sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("int.train.odata.ZINT_TRAIN_ODATA.controller.App", {
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
		// updateOperation: function (vbeln) {

		// 	// "/SalesHeaderSet('189273918')"
		// 	this.model.update("/SalesHeaderSet" + "('" + vbeln + "')", {
		// 		Vbeln: vbeln
		// 	}, {
		// 		success: function (response,data,datax) {
		// 			MessageBox.success("Güncelleme işlemi başarılı");
		// 		},
		// 		error: this.errorHandler
		// 	});
		// },
		// deleteOperation: function (vbeln) {
		// 	// "/SalesHeaderSet('189273918')"

		// 	this.model.remove("/SalesHeaderSet" + "('" + vbeln + "')", {
		// 		success: function (response) {
		// 			MessageBox.success("Silme işlemi başarılı");
		// 		},
		// 		error: this.errorHandler
		// 	});
		// },

		errorHandler: function (response) {
			var messageText = JSON.parse(response.responseText).error.message.value;
			MessageBox.error(messageText);
		}

	});
});