sap.ui.define([
	"sap/ui/model/type/Currency"
], function (Currency) {
	"use strict";

	return {

		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},

		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {number} iQuantity product quantity
		 * @param {number} fPrice product price
		 * @param {string} sCurrencyCode currency code for the price
		 * @returns {string} formatted currency value with 2 digits
		 */
		calculateItemTotal: function (iQuantity, fPrice, sCurrencyCode) {
			var oCurrency = new Currency({ showMeasure: false });
			var fTotal = iQuantity * fPrice;
			return oCurrency.formatValue([fTotal.toFixed(2), sCurrencyCode], "string");
		},

		/**
		 * Converts a binary string into an image format suitable for the src attribute
		 *
		 * @public
		 * @param {string} vData a binary string representing the image data
		 * @returns {string} formatted string with image metadata based on the input or a default image when the input is empty
		 */
		sheetText: function (rejectStatus, type) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();

			if (type === null) {
				return "None";
			}

			if (type === "O") {
				if (rejectStatus) {
					return oResourceBundle.getText("rejected");
				} else {
					return oResourceBundle.getText("didntRelease");
				}
			}
			else if (type === "R") {
				return oResourceBundle.getText("released");
			}

		},


		sheetState: function (rejectStatus, type) {

	
			if (type === null) {
				return "None";
			}

			if (type === "O") {
				if (rejectStatus) {
					return "Error"
				} else {
					return "Warning"
				}
			}
			else if (type === "R") {
				return "Success"
			}

		},
	};
});