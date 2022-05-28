sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"./model/models",
	// "./controller/ErrorHandler"
], function (UIComponent, Device, models, ListSelector) {
	"use strict";

	return UIComponent.extend("int.ui5.template.Component", {

		metadata: {
			manifest: "json"
		},
		init: function () {
		
			this.setModel(models.createDeviceModel(), "device");

			UIComponent.prototype.init.apply(this, arguments);
			
			this.getRouter().initialize();
		},
		destroy: function () {
			UIComponent.prototype.destroy.apply(this, arguments);
		},
	});
});
