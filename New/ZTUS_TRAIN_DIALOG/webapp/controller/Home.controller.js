sap.ui.define([
	"int/ui5/template/controller/BaseController",
	'sap/m/MessageBox',
	"sap/ui/core/Fragment",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	'sap/ui/unified/CalendarLegendItem',
	'sap/ui/unified/DateTypeRange',
	'sap/ui/unified/library',
	"sap/ui/core/format/DateFormat",
	"sap/ui/core/format/NumberFormat",
	
], function (BaseController, MessageBox, Fragment, Filter, Operator, JSONModel, CalendarLegendItem, DateTypeRange, unifiedLibrary,DateFormat,NumberFormat) {
	"use strict";
	var CalendarDayType = unifiedLibrary.CalendarDayType;
	return BaseController.extend("int.ui5.template.controller.Home", {

		pressTile: function (oEvent) {

			var target = oEvent.getSource().data().target;
			this.getRouter().navTo(target, {}, {}, true);
		},
		onInit: function () {

		},
		/**
		 * @override
		 */
		onAfterRendering: function () {

			var list = {
				customers: [

					{
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
					}
				]
			};

			var oModel = new JSONModel();
			oModel.setData(list);
			this.getView().setModel(oModel, "listModel");
			var model = new JSONModel();

			model.setData({
				company: [{
						name: "Deloite",
						createDate: new Date(),
						averageSale: [ 1200,"USD"],
						sector: {
							name: "Finance",
							total: "100",
							unit: "$"
						}
					}, {
						name: "Coca Cola",
						createDate: new Date(),
						averageSale: [ 1300,"USD"],
						sector: {
							name: "Drink",
							total: "70",
							unit: "€"
						}
					}, {
						name: "Pınar Gıda",
						createDate: new Date(),
						averageSale: [ 1200,"USD"],
						sector: {
							name: "Food",
							total: "200",
							unit: "$"
						}
					}, {
						name: "IBM",
						createDate: new Date(),
						averageSale: [ 1200,"USD"],
						sector: {
							name: "IT",
							total: "130",
							unit: "€"
						}
					}, {
						name: "Şenpiliç",
						createDate: new Date(),
						averageSale: [ 1200,"USD"],
						sector: {
							name: "Food",
							total: "130",
							unit: "€"
						}
					}

				]
			});

			this.getView().setModel(model, "companyModel");

			
			var dateInstance = DateFormat.getDateInstance({
				pattern: "dd.MM.yyyy" 
			});

			var timeInstance = DateFormat.getTimeInstance({
				pattern: "HH:mm:ss"
			});

			var today = new Date();
			var dateString = dateInstance.format(today);
			var timeString = timeInstance.format(today);

			// Number Formatting

			var floatInstance = NumberFormat.getFloatInstance({
				minFractionDigits: 2,
				maxFractionDigits: 2,
				minIntegerDigits: 3,
				maxIntegerDigits: 5
			});

			var sampleNumberx = 2313.223121313;
			var sampleNumbery = 23.12;
			var sampleNumberz = 23135.3;



			var oModel = new JSONModel({
				today: new Date(),
				demoDate: dateString,
				demoTime: timeString,
				demoNumberx: floatInstance.format(sampleNumberx),
				demoNumbery: floatInstance.format(sampleNumbery),
				demoNumberz: floatInstance.format(sampleNumberz)
			});

			this.getView().setModel(oModel, "firstModel");


		},
		formatAverageSale: function (sale, x) {

			if (x === "IT") {
				if (sale > 1150) {
					return "Success";

				} else {
					return "Error";
				}

			} else {
				return "None";
			}
		},
		showPopup: function () {

			MessageBox.show("Deneme Popup",
				{
					title: "Title Popup"
				});

		},
		onShowDialog: function (params) {
			var oView = this.getView();

			if (!this.byId("helloDialog")) {

				Fragment.load({
					id: oView.getId(),
					name: "int.ui5.template.view.Dialog"
				}).then(

					function (oDialog) {
						oView.addDependent(oDialog);
						oDialog.open();

					}
				);

			} else {
				this.byId("helloDialog").open();
			}

		},
		fillAddress: function () {
			var inputlarim = sap.ui.getCore().byFieldGroupId("address");

			for (var k = 0; k < inputlarim.length; k++) {
				inputlarim[k].setValue("Örnek Adres");
			}
		},
		fillVendors: function () {
			var inputlarim = sap.ui.getCore().byFieldGroupId("vendorInfo");

			for (var k = 0; k < inputlarim.length; k++) {
				inputlarim[k].setEnabled(false);
			}
		}
	});
});