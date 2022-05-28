sap.ui.define([
	"int/ui5/template/controller/BaseController",
	'sap/m/MessageBox',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	'sap/ui/unified/CalendarLegendItem',
	'sap/ui/unified/DateTypeRange',
	'sap/ui/unified/library',
], function (BaseController, MessageBox, Filter, Operator, JSONModel, CalendarLegendItem, DateTypeRange, unifiedLibrary) {
	"use strict";
	var CalendarDayType = unifiedLibrary.CalendarDayType;
	return BaseController.extend("int.ui5.template.controller.Home", {

		onInit: function () {

		},
		onAfterRendering: function () {
			var oModel = new JSONModel(
				{
					uygulamaAdi: "MVC Application 1",
					uygulamaMetni: "MVC Application text 1"
				}
			);

			this.getView().setModel(oModel, "ilkModelim");

		},
		changeLabel1: function (params) {
			var firstModel = this.getView().getModel("ilkModelim");
			firstModel.setProperty("/uygulamaAdi", "MVC Application 2");

		},
		changeLabel2:function (params) {
			var firstModel = this.getView().getModel("ilkModelim");
			var uygulamaMetni = firstModel.getProperty("/uygulamaMetni");
			firstModel.setProperty("/uygulamaAdi", uygulamaMetni)

		}
	});
});