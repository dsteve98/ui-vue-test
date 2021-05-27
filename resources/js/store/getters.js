let getters= {
    tableBRows: state => {
        return state.tableBRows
    },
    rowCounter: state => {
        return state.rowCounter
    },
    dropDownUom: state => {
        return state.dropDownUom
    },
    dropDownCurrency: state => {
        return state.dropDownCurrency
    },
    dropDownChargeTo: state => {
        return state.dropDownChargeTo
    },
    totalUsd: state => {
        return state.totalUsd
    },
    totalAed: state => {
        return state.totalAed
    }
}

export default getters