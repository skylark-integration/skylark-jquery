var Backbone = require('backbone');
var Components = require('./Components');
var Selectors = require('selector_manager/model/Selectors');
var Traits = require('trait_manager/model/Traits');

module.exports = Backbone.Model.extend({

  defaults: {
    // HTML tag of the component
    tagName: 'div',

    // Component type, eg. 'text', 'image', 'video', etc.
    type: '',

    // True if the component is removable from the canvas
    removable: true,

    // Indicates if it's possible to drag the component inside other
    // Tip: Indicate an array of selectors where it could be dropped inside
    draggable: true,

    // Indicates if it's possible to drop other components inside
    // Tip: Indicate an array of selectors which could be dropped inside
    droppable: true,

    // Set false if don't want to see the badge (with the name) over the component
    badgable: true,

    // True if it's possible to style it
    // Tip:  Indicate an array of CSS properties which is possible to style
    stylable: true,

    // Highlightable with 'dotted' style if true
    highlightable: true,

    // True if it's possible to clone the component
    copyable: true,

    // Indicates if it's possible to resize the component (at the moment implemented only on Image Components)
    resizable: false,

    // Allow to edit the content of the component (used on Text components)
    editable: false,

    // Hide the component inside Layers
    hiddenLayer: false,

    // This property is used by the HTML exporter as void elements do not
    // have closing tag, eg. <br/>, <hr/>, etc.
    void: false,

    // Indicates if the component is in some CSS state like ':hover', ':active', etc.
    state: '',

    // State, eg. 'selected'
    status: '',

    // Content of the component (not escaped) which will be appended before children rendering
    content: '',

    // Component related style
    style: {},

    // Key-value object of the component's attributes
    attributes: '',

    // Array of classes
    classes: '',

    // Component's javascript
    script: '',

    // Traits
    traits: ['id', 'title'],

    /**
      * Set an array of items to show up inside the toolbar (eg. move, clone, delete)
      * when the component is selected
      * toolbar: [{
      *     attributes: {class: 'fa fa-arrows'},
      *     command: 'tlb-move',
      *   },{
      *     attributes: {class: 'fa fa-clone'},
      *     command: 'tlb-clone',
      * }]
    */
    toolbar: null,

    // TODO
    previousModel: '',
    mirror: '',
  },

  initialize(o, opt) {
    // Check void elements
    if(opt && opt.config && opt.config.voidElements.indexOf(this.get('tagName')) >= 0)
      this.set('void', true);

    this.opt = opt;
    this.sm = opt ? opt.sm || {} : {};
    this.config = o || {};
    this.defaultC = this.config.components || [];
    this.defaultCl = this.normalizeClasses(this.get('classes') || this.config.classes || []);
    this.components	= new Components(this.defaultC, opt);
    this.components.parent = this;
    this.listenTo(this, 'change:script', this.scriptUpdated);
    this.set('attributes', this.get('attributes') || {});
    this.set('components', this.components);
    this.set('classes', new Selectors(this.defaultCl));
    var traits = new Traits();
    traits.setTarget(this);
    traits.add(this.get('traits'));
    this.set('traits', traits);
    this.initToolbar();

    // Normalize few properties from strings to arrays
    var toNormalize = ['stylable'];
    toNormalize.forEach(function(name) {
      var value = this.get(name);

      if (typeof value == 'string') {
        var newValue = value.split(',').map(prop => prop.trim());
        this.set(name, newValue);
      }
    }, this);

    this.set('status', '');
    this.init();
  },

  /**
   * Initialize callback
   */
  init() {},

  /**
   * Script updated
   */
  scriptUpdated() {
    this.set('scriptUpdated', 1);
  },

  /**
   * Init toolbar
   */
   initToolbar() {
    var model = this;
    if(!model.get('toolbar')) {
      var tb = [];
      if(model.get('draggable')) {
        tb.push({
          attributes: {class: 'fa fa-arrows'},
          command: 'tlb-move',
        });
      }
      if(model.get('copyable')) {
        tb.push({
          attributes: {class: 'fa fa-clone'},
          command: 'tlb-clone',
        });
      }
      if(model.get('removable')) {
        tb.push({
          attributes: {class: 'fa fa-trash-o'},
          command: 'tlb-delete',
        });
      }
      model.set('toolbar', tb);
    }
  },

  /**
   * Load traits
   * @param  {Array} traits
   * @private
   */
  loadTraits(traits) {
    var trt = new Traits();
    trt.setTarget(this);
    trt.add(traits);
    this.set('traits', trt);
  },

  /**
   * Normalize input classes from array to array of objects
   * @param {Array} arr
   * @return {Array}
   * @private
   */
  normalizeClasses(arr) {
     var res = [];

     if(!this.sm.get)
      return;

    var clm = this.sm.get('SelectorManager');
    if(!clm)
      return;

    arr.forEach(val => {
      var name = '';

      if(typeof val === 'string')
        name = val;
      else
        name = val.name;

      var model = clm.add(name);
      res.push(model);
    });
    return res;
  },

  /**
   * Override original clone method
   * @private
   */
  clone(reset) {
    var attr = _.clone(this.attributes),
    comp = this.get('components'),
    traits = this.get('traits'),
    cls = this.get('classes');
    attr.components = [];
    attr.classes = [];
    attr.traits = [];

    comp.each((md, i) => {
      attr.components[i]	= md.clone(1);
    });
    traits.each((md, i) => {
      attr.traits[i] = md.clone();
    });
    cls.each((md, i) => {
      attr.classes[i]	= md.get('name');
    });

    attr.status = '';
    attr.view = '';

    if(reset){
      this.opt.collection = null;
    }

    return new this.constructor(attr, this.opt);
  },

  /**
   * Get name of the component
   * @return {string}
   * @private
   * */
  getName() {
    if(!this.name){
      var id = this.cid.replace(/\D/g,''),
      type = this.get('type');
      var tag = this.get('tagName');
      tag = tag == 'div' ? 'box' : tag;
      tag = type ? type : tag;
      this.name 	= tag.charAt(0).toUpperCase() + tag.slice(1);
    }
    return this.name;
  },

  getCurrentName() {
    return this.get('custom-name') || this.getName();
  },

  /**
   * Return HTML string of the component
   * @param {Object} opts Options
   * @return {string} HTML string
   * @private
   */
  toHTML(opts) {
    var code = '';
    var m = this;
    var tag = m.get('tagName'),
    sTag = m.get('void'),
    attrId = '';
    // Build the string of attributes
    var strAttr = '';
    var attr = this.getAttrToHTML();
    for(var prop in attr){
      var val = attr[prop];
      strAttr += typeof val !== undefined && val !== '' ?
        ' ' + prop + '="' + val + '"' : '';
    }
    // Build the string of classes
    var strCls = '';
    m.get('classes').each(m => {
      strCls += ' ' + m.get('name');
    });
    strCls = strCls !== '' ? ' class="' + strCls.trim() + '"' : '';

    // If style is not empty I need an ID attached to the component
    // TODO: need to refactor in case of 'ID Trait'
    if(!_.isEmpty(m.get('style')))
      attrId = ' id="' + m.cid + '" ';

    code += '<' + tag + strCls + attrId + strAttr + (sTag ? '/' : '') + '>' + m.get('content');

    m.get('components').each(m => {
      code += m.toHTML();
    });

    if(!sTag)
      code += '</'+tag+'>';

    return code;
  },

  /**
   * Returns object of attributes for HTML
   * @return {Object}
   * @private
   */
  getAttrToHTML() {
    var attr = this.get('attributes') || {};
    delete attr.style;
    return attr;
  },

  /**
   * Return a shallow copy of the model's attributes for JSON
   * stringification.
   * @return {Object}
   * @private
   */
  toJSON(...args) {
    var obj = Backbone.Model.prototype.toJSON.apply(this, args);
    var scriptStr = this.getScriptString();
    delete obj.toolbar;

    if (scriptStr) {
      obj.script = scriptStr;
    }

    return obj;
  },

  /**
   * Return script in string format, cleans 'function() {..' from scripts
   * if it's a function
   * @param {string|Function} script
   * @return {string}
   * @private
   */
  getScriptString(script) {
    var scr = script || this.get('script');

    // Need to cast script functions to string
    if (typeof scr == 'function') {
      var scrStr = scr.toString().trim();
      scrStr = scrStr.replace(/^function\s?\(\)\s?\{/, '');
      scrStr = scrStr.replace(/\}$/, '');
      scr = scrStr;
    }

    return scr;
  }

},{

  /**
   * Detect if the passed element is a valid component.
   * In case the element is valid an object abstracted
   * from the element will be returned
   * @param {HTMLElement}
   * @return {Object}
   * @private
   */
  isComponent(el) {
    return {tagName: el.tagName ? el.tagName.toLowerCase() : ''};
  },

});
