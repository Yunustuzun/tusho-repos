sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, Fragment,MessageToast,JSONModel) {
	"use strict";

	return Controller.extend("int.train.fragment.ZINT_TRAIN_FRAGMENT.controller.App", {
		onInit: function () {

		},
		onAfterRendering:function()
		{
		var oData = {
			personel: {
				name : "Mehmet",
				surname : "Tatlı"
			} 
		};
		
		var oModel = new JSONModel(oData);
		this.getView().setModel(oModel);
		
		},
		onShowMessageToast:function()
		{
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var message = oBundle.getText("helloWorld");
			MessageToast.show(message);	
		},
		onShowFragment: function () {
			var oView = this.getView();

			if (!this.byId("helloDialog")) {
				Fragment.load({
					id: oView.getId(),
					name: "int.train.fragment.ZINT_TRAIN_FRAGMENT.view.Dialog"
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("helloDialog").open();
			}

		}
	});
});