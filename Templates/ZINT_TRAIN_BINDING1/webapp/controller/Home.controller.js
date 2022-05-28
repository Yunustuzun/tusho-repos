sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("int.train.binding1.ZINT_TRAIN_BINDING1.controller.Home", {
		onInit: function () {

		},
		onAfterRendering: function () {
			var oModel = new JSONModel({
				customers: [{
					name: "Burger King",
					country: "USA"
				}, {
					name: "Audi",
					country: "Germany"
				}, {
					name: "Citroen",
					country: "France"
				}, {
					name: "Google",
					country: "USA"
				}]
			});

			this.getView().setModel(oModel, "listModel");

		}
	});
});