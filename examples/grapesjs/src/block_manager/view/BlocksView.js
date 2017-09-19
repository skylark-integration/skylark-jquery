var Backbone = require('backbone');
var BlockView = require('./BlockView');
var CategoryView = require('./CategoryView');

module.exports = Backbone.View.extend({

  initialize(opts, config) {
    _.bindAll(this, 'getSorter', 'onDrag', 'onDrop');
    this.config = config || {};
    this.categories = opts.categories || '';
    this.renderedCategories = [];
    var ppfx = this.config.pStylePrefix || '';
    this.ppfx = ppfx;
    this.noCatClass = `${ppfx}blocks-no-cat`;
    this.blockContClass = `${ppfx}blocks-c`;
    this.catsClass = `${ppfx}block-categories`;
    this.listenTo(this.collection, 'add', this.addTo);
    this.em = this.config.em;
    this.tac = 'test-tac';
    this.grabbingCls = this.ppfx + 'grabbing';

    if(this.em){
      this.config.getSorter = this.getSorter;
      this.canvas = this.em.get('Canvas');
    }
  },

  /**
   * Get sorter
   * @private
   */
  getSorter() {
    if(!this.em)
      return;
    if(!this.sorter){
      var utils = this.em.get('Utils');
      var canvas = this.canvas;
      this.sorter = new utils.Sorter({
        container: canvas.getBody(),
        placer: canvas.getPlacerEl(),
        containerSel: '*',
        itemSel: '*',
        pfx: this.ppfx,
        onStart: this.onDrag,
        onEndMove: this.onDrop,
        onMove: this.onMove,
        document: canvas.getFrameEl().contentDocument,
        direction: 'a',
        wmargin: 1,
        nested: 1,
        em: this.em,
        canvasRelative: 1,
      });
    }
    return this.sorter;
  },

  /**
   * Callback when block is on drag
   * @private
   */
  onDrag(e) {
    this.em.stopDefault();
    this.em.trigger('block:drag:start', e);
  },

  onMove(e) {
    this.em.trigger('block:drag:move', e);
  },

  /**
   * Callback when block is dropped
   * @private
   */
  onDrop(model) {
    this.em.runDefault();

    if (model && model.get) {
      if(model.get('activeOnRender')) {
        model.trigger('active');
        model.set('activeOnRender', 0);
      }

      // Register all its components (eg. for the Undo Manager)
      this.em.initChildrenComp(model);
    }
    this.em.trigger('block:drag:stop', model);
  },

  /**
   * Add new model to the collection
   * @param {Model} model
   * @private
   * */
  addTo(model) {
    this.add(model);
  },

  /**
   * Render new model inside the view
   * @param {Model} model
   * @param {Object} fragment Fragment collection
   * @private
   * */
  add(model, fragment) {
    var frag = fragment || null;
    var view = new BlockView({
      model,
      attributes: model.get('attributes'),
    }, this.config);
    var rendered = view.render().el;
    var category = model.get('category');

    // Check for categories
    if (category && this.categories) {
      if (typeof category == 'string') {
        category = {
          id: category,
          label: category
        };
      }

      var catModel = this.categories.add(category);
      var catId = catModel.get('id');
      var catView = this.renderedCategories[catId];
      var categories = this.getCategoriesEl();
      model.set('category', catModel);

      if (!catView && categories) {
        catView = new CategoryView({
          model: catModel
        }, this.config).render();
        this.renderedCategories[catId] = catView;
        categories.appendChild(catView.el);
      }

      catView && catView.append(rendered);
      return;
    }

    if(frag)
      frag.appendChild(rendered);
    else
      this.append(rendered);
  },

  getCategoriesEl() {
    if (!this.catsEl) {
      this.catsEl = this.el.querySelector(`.${this.catsClass}`);
    }

    return this.catsEl;
  },

  getBlocksEl() {
    if (!this.blocksEl) {
      this.blocksEl = this.el.querySelector(`.${this.noCatClass} .${this.blockContClass}`);
    }

    return this.blocksEl;
  },

  append(el) {
    let blocks = this.getBlocksEl();
    blocks && blocks.appendChild(el);
  },

  render() {
    var ppfx = this.ppfx;
    var frag = document.createDocumentFragment();
    this.catsEl = null;
    this.blocksEl = null;
    this.renderedCategories = [];
    this.el.innerHTML = `
      <div class="${this.catsClass}"></div>
      <div class="${this.noCatClass}">
        <div class="${this.blockContClass}"></div>
      </div>
    `;

    this.collection.each(function(model){
      this.add(model, frag);
    }, this);

    this.append(frag);
    this.$el.addClass(this.blockContClass + 's')
    return this;
  },

});
