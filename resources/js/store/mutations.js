let mutations= {
    addTableBRow (state , rowCounter) {
        state.tableBRows.push({
            description: '',
            qty: '',
            uom: '',
            unit_price: '',
            discount: 0,
            vat: 0,
            currency: '',
            vat_amount: 0,
            sub_total: 0,
            total: 0,
            charge_to: ''
        })
    },
    removeTableBRow (state, row) {
        state.tableBRows.splice(state.tableBRows.indexOf(row), 1)
    }
}

export default mutations