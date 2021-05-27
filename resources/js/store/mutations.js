let mutations= {
    addTableBRow (state) {
        state.tableBRows.push({
            description: '',
            qty: '',
            uom: 'SHP',
            unit_price: '',
            discount: 0,
            vat: 0,
            currency: 'USD',
            vat_amount: 0,
            sub_total: 0,
            total: 0,
            charge_to: ''
        })
    },
    removeTableBRow (state, row) {
        state.tableBRows.splice(state.tableBRows.indexOf(row), 1);
    },
    updateFormData (state, jsondata) {
        state.dropDownUom = jsondata.dropDownUom;
        state.dropDownCurrency = jsondata.dropDownCurrency;
        state.dropDownChargeTo = jsondata.dropDownChargeTo;
    }
}

export default mutations