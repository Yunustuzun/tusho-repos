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

		pressTile: function (oEvent) {

			var target = oEvent.getSource().data().target;
			this.getRouter().navTo(target, {}, {}, true);
		},
		onInit: function () {

		},
		showPopup: function () {

			MessageBox.show("Deneme Popup",
				{
					title: "Title Popup"
				});

		}
	});
});