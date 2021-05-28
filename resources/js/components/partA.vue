<template>
    <div class="part-a">
        <table class="tableA">
            <tr>
                <td><h3 class="partBTitle"><i class="fa fa-truck fa-flip-horizontal" aria-hidden="true"></i> Logistic Instructions</h3></td>
                <td colspan="5"><span>draft</span></td>
            </tr>
            <tr>
                <td rowspan="4"></td>
                <td>Assigned Vendor</td>
                <td>Attention Of</td>
                <td>Quotation No.</td>
                <td>Invoice To</td>
                <td>Customer - Contract</td>
            </tr>
            <tr>
                <td>
                    <select class="tInput tContent" v-model="assignedVendor" name="assignedVendor">
                        <option v-for="(dAssign, dAssignIdx) in dropDownAssignedVendor" :key="dAssignIdx" :value="dAssign">{{dAssign}}</option>
                    </select>
                </td>
                <td><input class="tInput tContent" v-model="attentionOf" type="text" name="attentionOf" placeholder="Attention Of"></td>
                <td><input class="tInput tContent" v-model="quotationNo" type="text" name="quotationNo" placeholder="Quotation No."></td>
                <td>
                    <select class="tInput tContent" v-model="invoiceTo" name="invoiceTo">
                        <option v-for="(dInvoice, dInvoiceIdx) in dropDownInvoiceTo" :key="dInvoiceIdx" :value="dInvoice">{{dInvoice}}</option>
                    </select>
                </td>
                <td>
                    <select class="tInput tContent" v-model="customerContract" name="customerContract">
                        <option v-for="(dCustomer, dCustomerIdx) in dropDownCustomerContract" :key="dCustomerIdx" :value="dCustomer">{{dCustomer}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="4">Vendor Address</td>
                <td>Customer PO No.</td>
            </tr>
            <tr>
                <td colspan="4"> <input class="tInput tContent" v-model="vendorAddress" type="text" name="vendorAddress" placeholder="vendorAddress"></td>
                <td>
                    <select class="tInput tContent" v-model="customerPoNo" name="customerPoNo">
                        <option v-for="(dPono, dPonoIdx) in dropDownCustomerPoNo" :key="dPonoIdx" :value="dPono">{{dPono}}</option>
                    </select>
                </td>
            </tr>
        </table>
        <!-- <button @click="logdata">try</button> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default ({
    name: 'partA',
    computed: {
        ...mapGetters([
            'dropDownAssignedVendor',
            'dropDownInvoiceTo',
            'dropDownCustomerContract',
            'dropDownCustomerPoNo'
        ]),
        assignedVendor: {
            get () {
                return this.$store.state.assignedVendor
            },
            set (value) {
                this.$store.commit('assignedVendorUpdate', value)
            }
        },
        attentionOf: {
            get () {
                return this.$store.state.attentionOf
            },
            set (value) {
                this.$store.commit('attentionOfUpdate', value)
            }
        },
        quotationNo: {
            get () {
                return this.$store.state.quotationNo
            },
            set (value) {
                this.$store.commit('quotationNoUpdate', value)
            }
        },
        invoiceTo: {
            get () {
                return this.$store.state.invoiceTo
            },
            set (value) {
                this.$store.commit('invoiceToUpdate', value)
            }
        },
        customerContract: {
            get () {
                return this.$store.state.customerContract
            },
            set (value) {
                this.$store.commit('customerContractUpdate', value)
            }
        },
        vendorAddress: {
            get () {
                return this.$store.state.vendorAddress
            },
            set (value) {
                this.$store.commit('vendorAddressUpdate', value)
            }
        },
        customerPoNo: {
            get () {
                return this.$store.state.customerPoNo
            },
            set (value) {
                this.$store.commit('customerPoNoUpdate', value)
            }
        }
    },
    methods: {
        logdata () {
            console.log("PRINT STATE");
            console.log(this.$store.state);
        }
    },
    mounted () {
        console.log('mounted');
        this.$store.dispatch('getFormDatas');
    }
})
</script>