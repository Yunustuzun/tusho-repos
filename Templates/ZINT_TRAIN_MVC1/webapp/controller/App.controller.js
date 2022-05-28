sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
	"use strict";

	return Controller.extend("int.train.mvc1.ZINT_TRAIN_MVC1.controller.App", {
		onInit: function () {

		},
		onAfterRendering:function()
		{
			var oModel = new JSONModel(
			{
				uygulamaAdi: "MVC Application"
			}
			);
			
			this.getView().setModel(oModel,"ilkModelim");
			  
		},
		changeLabel1:function()
		{
			this.getView().getModel("ilkModelim").setProperty("/uygulamaAdi","UI5 Application");
		},
		changeLabel2:function()
		{
			this.getView().getModel("ilkModelim").setProperty("/uygulamaAdi","Web Application");
		}
	});
});