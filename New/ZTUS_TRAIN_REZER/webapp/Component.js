sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"int.training.rezervation/model/models",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
], function (UIComponent,
	Device,
	models,
	MessageBox,
	JSONModel) {
	"use strict";

	return UIComponent.extend("int.training.rezervation.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			var defaultModel = this.getModel();

			var applicationModel = new JSONModel(
				{
					list: [],
					secondList: []
				}
			);

			this.setModel(applicationModel, "application");


			// var defaultModel = this.getOwnerComponent().getModel();

			// defaultModel.read('/MaterialSet', {
			// 	filters: filters,
			// 	urlParameters: {
			// 		"$expand": ["MaterialPlants"]
			// 	},
			// 	success: function (response, data) {

			// 		var applicationModel = this.getOwnerComponent().getModel("application");
			// 		applicationModel.setProperty("/list", response.results);

			// 	}.bind((this)),
			// 	error: this.errorHandler

			// })



		},

		errorHandler: function (response) {
			var messageText = JSON.parse(response.responseText).error.message.value;
			MessageBox.error(messageText);
		}

	});
});