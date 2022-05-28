sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("int.train.router.ZINT_TRAIN_ROUTER.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf int.train.router.ZINT_TRAIN_ROUTER.view.Master
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("master").attachPatternMatched(this._rutEslesirse, this);
		},

		_rutEslesirse: function () {

			this.getOwnerComponent().getRouter().navTo("detail", {
				orderId: 0
			}, true);
		},
		onSelectionChange: function (oEvent) {
			var orderId = oEvent.getSource().getSelectedItem().getBindingContext().getProperty("orderId");
			this.getOwnerComponent().getRouter().navTo("detail", {
				orderId: orderId
			}, true);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf int.train.router.ZINT_TRAIN_ROUTER.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf int.train.router.ZINT_TRAIN_ROUTER.view.Master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf int.train.router.ZINT_TRAIN_ROUTER.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});