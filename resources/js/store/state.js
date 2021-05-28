let state= {
    dropDownUom: [],
    dropDownCurrency: [
		{"name": "USD", "val": 1},
		{"name": "AED", "val": 3.6275}
	],
    dropDownChargeTo: [],
    tableBRows: [],
    totalUsd: {
        "vat_amount": 0,
        "sub_total": 0,
        "total": 0
    },
    totalAed: {
        "vat_amount": 0,
        "sub_total": 0,
        "total": 0
    },
    assignedVendor: "Amarit",
    attentionOf: "Johnny",
    quotationNo: "ABC-123-45",
    invoiceTo: "MITO",
    customerContract: "ADNOC-ONSHORE",
    vendorAddress: "Generic Address #1",
    customerPoNo: "NSDUFF82MO",
    dropDownAssignedVendor: [],
    dropDownInvoiceTo: [],
    dropDownCustomerContract: [],
    dropDownCustomerPoNo: []

}

export default state