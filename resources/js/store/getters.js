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
    },
    assignedVendor: state => {
        return state.assignedVendor
    },
    attentionOf: state => {
        return state.attentionOf
    },
    quotationNo: state => {
        return state.quotationNo
    },
    invoiceTo: state => {
        return state.invoiceTo
    },
    customerContract: state => {
        return state.customerContract
    },
    vendorAddress: state => {
        return state.vendorAddress
    },
    customerPoNo: state => {
        return state.customerPoNo
    },
    dropDownAssignedVendor: state => {
        return state.dropDownAssignedVendor
    },
    dropDownInvoiceTo: state => {
        return state.dropDownInvoiceTo
    },
    dropDownCustomerContract: state => {
        return state.dropDownCustomerContract
    },
    dropDownCustomerPoNo: state => {
        return state.dropDownCustomerPoNo
    },
    dropDownDatas: state=> {
        return {
            "dropDownAssignedVendor": state.dropDownAssignedVendor,
            "dropDownInvoiceTo": state.dropDownInvoiceTo,
            "dropDownCustomerContract": state.dropDownCustomerContract,
            "dropDownCustomerPoNo": state.dropDownCustomerPoNo
        }
    }
}

export default getters