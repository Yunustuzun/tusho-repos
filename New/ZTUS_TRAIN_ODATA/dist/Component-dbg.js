sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"int/train/odata/ZINT_TRAIN_ODATA/model/models",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
], function (UIComponent,
	Device,
	models,
	MessageBox,
	JSONModel) {
	"use strict";

	return UIComponent.extend("int.train.odata.ZINT_TRAIN_ODATA.Component", {

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



	
		},

		errorHandler: function (response) {
			var messageText = JSON.parse(response.responseText).error.message.value;
			MessageBox.error(messageText);
		}

	});
});