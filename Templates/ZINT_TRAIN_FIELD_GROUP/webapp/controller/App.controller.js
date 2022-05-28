sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("int.train.field_group.ZINT_TRAIN_FIELD_GROUP.controller.App", {
		onInit: function () {

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