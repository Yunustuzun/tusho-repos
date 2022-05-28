sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("int.train.first.ZINT_TRAIN_FIRST.controller.App", {
		onInit: function () {

		},
		showPopup:function()
		{
			
			MessageBox.show("Deneme Popup",
			{
				title : "Title Popup"
			});
			
		}
	});
});