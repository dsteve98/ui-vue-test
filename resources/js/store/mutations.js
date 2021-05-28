let mutations= {
    addTableBRow (state) {
        console.log('mutation.js addTableRow');
        state.tableBRows.push({
            description: '',
            qty: 0,
            uom: 'SHP',
            unit_price: '',
            discount: 0,
            vat: 0,
            currency: 'USD',
            vat_amount: 0,
            sub_total: 0,
            total: 0,
            charge_to: ''
        });
    },
    removeTableBRow (state, row) {
        console.log('mutation.js removeTableBRow');
        state.tableBRows.splice(state.tableBRows.indexOf(row), 1);
    },
    updateFormData (state, jsondata) {
        console.log('mutation.js updateFormData');
        state.dropDownUom = jsondata.dropDownUom;
        state.dropDownCurrency = jsondata.dropDownCurrency;
        state.dropDownChargeTo = jsondata.dropDownChargeTo;
        state.dropDownAssignedVendor = jsondata.dropDownAssignedVendor;
        state.dropDownInvoiceTo = jsondata.dropDownInvoiceTo;
        state.dropDownCustomerContract = jsondata.dropDownCustomerContract;
        state.dropDownCustomerPoNo = jsondata.dropDownCustomerPoNo;
    },
    updateRowValue (state, row) {
        console.log('mutation.js updateRowValue');
        var idx = state.tableBRows.indexOf(row)
        state.tableBRows[idx].sub_total = state.tableBRows[idx].qty * state.tableBRows[idx].unit_price * (100 - state.tableBRows[idx].discount) / 100;
        state.tableBRows[idx].vat_amount = state.tableBRows[idx].sub_total * state.tableBRows[idx].vat / 100;
        state.tableBRows[idx].total = state.tableBRows[idx].sub_total + state.tableBRows[idx].vat_amount;
    },
    updateSummary (state) {
        console.log('mutation.js updateSummary');
        var sumVatAmount = 0;
        var sumSubTotal = 0;
        var sumTotal = 0;
        var currencyValue = 1;
        var usdValue = state.dropDownCurrency[state.dropDownCurrency.findIndex(x => x.name == "USD")].val
        var aedValue = state.dropDownCurrency[state.dropDownCurrency.findIndex(x => x.name == "AED")].val
        for (let row in state.tableBRows) {
            var currencyIndex = state.dropDownCurrency.findIndex(x => x.name == state.tableBRows[row].currency)
            currencyValue = state.dropDownCurrency[currencyIndex].val
            // console.log("CurVal = "+currencyValue);
            sumVatAmount += (state.tableBRows[row].vat_amount) / currencyValue * usdValue;
            sumSubTotal += (state.tableBRows[row].sub_total) / currencyValue * usdValue;
            sumTotal += (state.tableBRows[row].total) / currencyValue * usdValue;
        };
        state.totalUsd = {
            "vat_amount": sumVatAmount,
            "sub_total": sumSubTotal,
            "total": sumTotal
        };
        state.totalAed = {
            "vat_amount": sumVatAmount / usdValue * aedValue,
            "sub_total": sumSubTotal / usdValue * aedValue,
            "total": sumTotal / usdValue * aedValue
        };
    },
    assignedVendorUpdate (state, value) {
        state.assignedVendor = value;
    },
    attentionOfUpdate (state, value) {
        state.attentionOf = value;
    },
    quotationNoUpdate (state, value) {
        state.quotationNo = value;
    },
    invoiceToUpdate (state, value) {
        state.invoiceTo = value;
    },
    customerContractUpdate (state, value) {
        state.customerContract = value;
    },
    vendorAddressUpdate (state, value) {
        state.vendorAddress = value;
    },
    customerPoNoUpdate (state, value) {
        state.customerPoNo = value;
    }
}

export default mutations