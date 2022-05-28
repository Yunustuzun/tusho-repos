sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/DateFormat",
	"sap/ui/core/format/NumberFormat",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, DateFormat, NumberFormat, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("int.train.types.ZINT_TRAIN_TYPES.controller.App", {
		onInit: function () {

		},
		onAfterRendering: function () {

			// Time & Date Formatting

			var dateInstance = DateFormat.getDateInstance({
				pattern: "dd/MM/yyyy"
			});

			var timeInstance = DateFormat.getTimeInstance({
				pattern: "HH:mm:ss"
			});

			var today = new Date();
			var dateString = dateInstance.format(today);
			var timeString = timeInstance.format(today);

			// Number Formatting

			var floatInstance = NumberFormat.getFloatInstance({
				minFractionDigits: 1,
				maxFractionDigits: 2,
				minIntegerDigits: 3,
				maxIntegerDigits: 5
			});

			var sampleNumberx = 2313.223121313;
			var sampleNumbery = 23.12;
			var sampleNumberz = 23135.3;

			var oModel = new JSONModel({
				demoDate: dateString,
				demoTime: timeString,
				demoNumberx: floatInstance.format(sampleNumberx),
				demoNumbery: floatInstance.format(sampleNumbery),
				demoNumberz: floatInstance.format(sampleNumberz)
			});

			this.getView().setModel(oModel, "firstModel");
		},
		showPopup: function () {
			var floatInstance = NumberFormat.getFloatInstance({
				maxFractionDigits: 2,
				decimalSeparator: ","
			});
			var x = "12,1231231";
			var y = floatInstance.parse(x);
			var z = floatInstance.format(y);
			MessageBox.show("Bu kullanıcının puanı" + z);
		}

	});
});