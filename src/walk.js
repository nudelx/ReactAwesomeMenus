(function(global) {
  // TODO:
  /*
  actions  click
  add borders
  mark element
  trigger
  navigation ?
  backend for users
  multiple instances ??
*/
  var SamGuide = function(config) {
    return new SamGuide.init(config);
  };
  SamGuide.init = function(config) {
    this.config = Object.assign(
      {
        arrowZindex: 401,
        containerZindex: 300,
        fogOpacity: 0.7,
        selectedZindex: 400,
        arrowOffset: 20
      },
      config
    );
    this.slides = [];
    this.old = {};

    this.resources = {
      css: `
        div.samguide-container { position: absolute;top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: ${
          this.config.containerZindex
        };}
        div.samguide-fog { position: fixed;top: 0px;bottom: 0px;left: 0px;right: 0px;background-color: #000; opacity:${
          this.config.fogOpacity
        }; }
        div.samguide-stage { position: relative;}
        div.samguide-mainbox { max-width: 500px;  border: 1px solid red; margin-left: auto;margin-right: auto; background-color:#fff; margin-top:15%;}
        div.samguide-mainbox-title { line-height: 30px; padding: 3px 0;text-indent: 10px; font-weight:bolder}
        div.samguide-content { padding:10px}
        div.samguide-arrow { color:#FFF}
        div.samguide-buttons { text-align:right; padding: 5px;}
        div.samguide-exit { position: absolute; top: 20px; right: 30px; color: #fff; font-size: 28px; cursor: pointer;}
      `,
      body: document.querySelector("body")
    };
    if (this.config.attachOnElement) {
      this.resources.attachedEl = document.querySelector("div.logo-wrapper");
      this.resources.attachedEl &&
        this.resources.attachedEl.addEventListener("click", this.activateGuide);
    } else {
      this.getSlides(this.config.serverUrl);
    }
  };
  SamGuide.prototype = {
    getSlides: function() {
      const self = this;
      fetch("guide.json", { method: "GET" })
        .then(response => response.json())
        .then(result => {
          self.setData(result);
        })
        .catch(error => console.error(error));
    },

    setData: function(result) {
      this.slides = result.slides;
      this.activateGuide();
    },

    activateGuide: function() {
      this.setContaiter();
      this.addCSS();
      this.setFog();
      this.setStage();
      this.addExit();
      this.run();
    },

    addCSS: function() {
      var style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(document.createTextNode(this.resources.css));
      this.resources.container.appendChild(style);
    },

    setContaiter: function() {
      var div = document.createElement("div");
      div.setAttribute("class", "samguide-container");
      this.resources.body.appendChild(div);
      this.resources.container = div;
    },

    setFog: function() {
      var fog = this.buildElement("div", "samguide-fog");
      this.resources.container.appendChild(fog);
    },

    setStage: function() {
      var stage = this.buildElement("div", "samguide-stage");
      this.resources.stage = stage;
      this.resources.container.appendChild(stage);
    },

    addExit: function() {
      var exit = this.buildElement("div", "samguide-exit");
      var txt = this.buildText("X");
      exit.appendChild(txt);
      exit.addEventListener("click", this.removeAll.bind(this));
      this.resources.exit = exit;
      this.resources.container.appendChild(exit);
    },

    removeAll: function() {
      this.resources.body.removeChild(this.resources.container);
      this.lastElement = null;
    },

    buildElement: function(type, className) {
      var e = document.createElement(type);
      if (className) {
        e.setAttribute("class", className);
      }
      return e;
    },

    buildText: function(txt) {
      return document.createTextNode(txt);
    },

    drawMainBox: function(slide) {
      var box = this.buildElement("div", "samguide-mainbox");
      var title = this.buildElement("div", "samguide-mainbox-title");
      var content = this.buildElement("div", "samguide-content");

      var nextButton = this.buildElement("button", "samguide-button");
      nextButton.innerHTML = "Next";
      nextButton.addEventListener("click", this.run.bind(this));
      var buttons = this.buildElement("div", "samguide-buttons");

      buttons.appendChild(nextButton);
      title.appendChild(this.buildText(slide.title));
      content.appendChild(this.buildText(slide.text));

      [title, content, buttons].forEach(function(e) {
        box.appendChild(e);
      });
      return box;
    },

    drawArrowBox: function(slide) {
      var box = this.buildElement("div", "samguide-arrowbox");
      var arrow = this.buildElement("div", "samguide-arrow");

      var arrowButton = this.buildElement("button", "samguide-arrow-button");
      arrowButton.innerHTML = "Next";
      arrowButton.addEventListener("click", this.run.bind(this));
      var buttons = this.buildElement("div", "samguide-buttons");

      buttons.appendChild(arrowButton);
      arrow.appendChild(this.buildText(slide.title));

      [arrow, buttons].forEach(function(e) {
        box.appendChild(e);
      });
      return box;
    },

    setArrowPosition: function(selected, arrow) {
      var coordinates = selected.getBoundingClientRect();
      this.old.zIndex = selected.style.zIndex;
      arrow.style.position = "absolute";
      selected.style.zIndex = this.config.selectedZindex;
      arrow.style.zIndex = this.config.arrowZindex;
      var scrollOffset = window.pageYOffset || 0;
      arrow.style.top =
        coordinates.top +
        coordinates.height +
        scrollOffset +
        this.config.arrowOffset +
        "px";
      arrow.style.left = coordinates.left + "px";
      arrow.id = new Date().getTime();
    },

    drawStep: function(slide) {
      var toFocus = false;
      if (slide.type && slide.type.toLowerCase() === "main") {
        this.lastElement = this.drawMainBox(slide);
      } else if (slide.type && slide.type.toLowerCase() === "selector") {
        this.selectedElement = document.querySelector(slide.selector);
        this.lastElement = this.drawArrowBox(slide);
        this.setArrowPosition(this.selectedElement, this.lastElement);
        toFocus = true;
      }
      this.resources.stage.appendChild(this.lastElement);
      toFocus && this.scrollToElement(this.selectedElement);
      if (slide.event && slide.event.actions)
        this.doActions(slide.event, this.selectedElement);
    },

    wait: function(ms) {
      return new Promise(function(r, j) {
        return setTimeout(r, ms);
      });
    },

    doActions: function(event, el) {
      var actions = event.actions;
      var self = this;
      actions.forEach(function(a) {
        var actionEl = event.selector ? el.querySelector(event.selector) : el;
        typeof actionEl[a] === "function" && actionEl[a]();
        self.wait(2000);
      });
    },

    scrollToElement: function(el) {
      var offSet = el.getBoundingClientRect();
      window.scrollTo({
        top: offSet.top - parseInt(offSet.top, 10) * 0.2,
        behavior: "smooth"
      });
    },

    cleanStage: function() {
      if (this.lastElement) {
        this.resources.stage.removeChild(this.lastElement);
        this.lastElement = null;
      }
      if (this.selectedElement) {
        this.selectedElement.style.zIndex = this.old.zIndex;
        this.selectedElement = null;
      }
    },

    run: function() {
      console.log("run", this);
      if (this.slides && this.slides.length) {
        var slide = this.slides.shift();
        this.cleanStage();
        this.drawStep(slide);
      } else {
        this.removeAll();
      }
    }
  };
  SamGuide.init.prototype = SamGuide.prototype;
  global.SAMG = SamGuide({ serverUrl: "guide.json" });

})(window);
