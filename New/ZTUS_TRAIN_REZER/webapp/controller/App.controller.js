sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
], function (Controller,
	MessageBox,
	Filter,
	FilterOperator) {
	"use strict";

	return Controller.extend("int.training.rezervation.controller.App", {
		onInit: function () {

		},
		// handleButtonPress: function (oEvent) {

		// 	var selectedItem = this.getView().byId("mainList").getSelectedItem();

		// 	if (selectedItem === null) {
		// 		MessageBox.show("Kalem seçilmedi");
		// 		return;
		// 	}
		// 	var selectedObject = selectedItem.getBindingContext().getObject();

		// 	this.model = this.getView().getModel();

		// 	var buttonText = oEvent.getSource().getText();

		// 	switch (buttonText) {
		// 	case "Create":
		// 		this.createOperation(selectedObject.Vbeln);
		// 		break;
		// 	case "Delete":
		// 		this.deleteOperation(selectedObject.Vbeln);
		// 		break;
		// 	case "Update":
		// 		this.updateOperation(selectedObject.Vbeln);
		// 		break;
		// 	default:
		// 	}

		// },

		/**
		 * @override
		 */
		onChangeInputMaktl: function (event) {

			var materialGroup = event.getSource().getValue();

			var filters = [new Filter("Matkl", FilterOperator.EQ, materialGroup)];

			var defaultModel = this.getOwnerComponent().getModel();

			defaultModel.read('/MaterialSet', {
				filters: filters,
				urlParameters: {
					"$expand": ["MaterialPlants"]
				},
				success: function (response, data) {

					var applicationModel = this.getOwnerComponent().getModel("application");
					applicationModel.setProperty("/list", response.results);

				}.bind((this)),
				error: this.errorHandler

			})
		},
		createOperation: function (vbeln) {

			var defaultModel = this.getView().getModel();

			defaultModel.create("/MaterialSet", {
				Matnr: "00111111",
				Maktx: "test 11",
				Mtart: "ZM01"
			}, {
				success: function (response, data) {
					MessageBox.success("Yaratma işlemi başarılı");
				},
				error: this.errorHandler
			});

		},
		createDeepOperation: function (params) {
			var defaultModel = this.getView().getModel();

			var material = {
				Matnr: "00111111",
				Maktx: "test 11",
				Mtart: "ZM01",
				MaterialPlants: [
					{
						Matnr: "00111111",
						Werks: '1000',
						Dispo: "F1",
						Dismm: "F2",
						Pstat: "F3"
					},
					{
						Matnr: "00111111",
						Werks: '2000',
						Dispo: "x1",
						Dismm: "x2",
						Pstat: "x3"
					},

				]
			};


			defaultModel.create("/MaterialSet", material, {
				success: function (response, data) {
					MessageBox.success("Yaratma işlemi başarılı");
				},
				error: this.errorHandler
			});
		},
		onMainListItemPress: function (event) {
			var object = event.getSource().getSelectedItem().getBindingContext("application").getObject();

			// 
			this.getOwnerComponent().getModel("application").setProperty("/secondList", object.MaterialPlants.results);

		},
		updateOperation: function (vbeln) {

			// "/SalesHeaderSet('189273918')"
			var defaultModel = this.getView().getModel();
			var selectedObject = this.getView().byId("mainList").getSelectedItem().getBindingContext("application").getObject();

			defaultModel.update("/MaterialSet" + "('" + selectedObject.Matnr + "')", {
				Matnr: selectedObject.Matnr,
				Maktx: "test update process",
			}, {
				success: function (response, data, datax) {
					MessageBox.success("Güncelleme işlemi başarılı");
				},
				error: this.errorHandler
			});
		},
		deleteOperation: function (vbeln) {



			var defaultModel = this.getView().getModel();
			var selectedObject = this.getView().byId("mainList").getSelectedItem().getBindingContext("application").getObject();

			defaultModel.remove("/MaterialSet" + "('" + selectedObject.Matnr + "')", {
				success: function (response, data, datax) {
					MessageBox.success("Silme işlemi başarılı");
				},
				error: this.errorHandler
			});
		},

		errorHandler: function (response) {
			var messageText = JSON.parse(response.responseText).error.message.value;
			MessageBox.error(messageText);
		}

	});
});