<template>
    <div>
        <table class="tableB">
            <tr class="tableHeader">
                <th class="tDescription">Description</th>
                <th class="tQty">Qty</th>
                <th class="tUom">UOM</th>
                <th class="tUnitPrice">Unit Price</th>
                <th class="tDiscount">Discount (%)</th>
                <th class="tVat">VAT (%)</th>
                <th class="tArrow"></th>
                <th class="tCurrency">Currency</th>
                <th class="tVatAmount">VAT Amount</th>
                <th class="tSubTotal">Sub Total</th>
                <th class="tTotal">Total</th>
                <th class="tChargeTo">Charge To</th>
                <th class="tDeleteRow"></th>
            </tr>
            <tr class="trBody" v-for="(row, index) in tableBRows" :key="index">
                <td><input class="tInput tContent" v-model="row.description" :name="`tableBRows[${index}][description]`" type="text" placeholder="Description"></td>
                <td><input class="tInput tContent" @change="updateRowValue(row)" v-model="row.qty" :name="`tableBRows[${index}][qty]`" type="number" min="0" placeholder="Qty"></td>
                <td>
                    <select class="tInput tContent" v-model="row.uom" :name="`tableBRows[${index}][uom]`">
                        <option v-for="(uom, uomidx) in dropDownUom" :key="uomidx" :value="uom">{{uom}}</option>
                    </select>
                </td>
                <td><input class="tInput tContent" @change="updateRowValue(row)" v-model="row.unit_price" :name="`tableBRows[${index}][unit_price]`" type="number" min="0" placeholder="Unit Price"></td>
                <td><input class="tInput tContent" @change="updateRowValue(row)" v-model="row.discount" :name="`tableBRows[${index}][discount]`" type="number" min="0" max="100" placeholder="Discount"></td>
                <td><input class="tInput tContent" @change="updateRowValue(row)" v-model="row.vat" :name="`tableBRows[${index}][vat]`" type="number" min="0" max="100" placeholder="VAT"></td>
                <td><i class="fa fa-arrow-right" aria-hidden="true"></i></td>
                <td>
                    <select class="tContent" @change="updateSummary" v-model="row.currency" :name="`tableBRows[${index}][currency]`">
                        <option v-for="(currency, currencyidx) in dropDownCurrency" :key="currencyidx" :value="currency.name">{{currency.name}}</option>
                    </select>
                </td>
                <!-- <td><input v-model="row.vat_amount" :name="`tableBRows[${index}][vat_amount]`" type="text" placeholder="VAT Amount"></td> -->
                <td class="tContent">{{row.vat_amount}}</td>
                <!-- <td><input v-model="row.sub_total" :name="`tableBRows[${index}][sub_total]`" type="text" placeholder="Sub Total"></td> -->
                <td class="tContent">{{row.sub_total}}</td>
                <!-- <td><input v-model="row.total" :name="`tableBRows[${index}][total]`" type="text" placeholder="Total"></td> -->
                <td class="tContent">{{row.total}}</td>
                <td>
                    <select class="tInput tContent" v-model="row.charge_to" :name="`tableBRows[${index}][charge_to]`">
                        <option value="" disabled selected>Select an option</option>
                        <option v-for="(chargeto, chargetoidx) in dropDownChargeTo" :key="chargetoidx" :value="chargeto">{{chargeto}}</option>
                    </select>
                </td>
                <td class="tContent"><button class="rowButton minusRow" @click="removeTableBRow(row)">-</button></td>
            </tr>
            <tr class="rDivider"></tr>
            <tr>
                <td class="leftAlign" rowspan=2 colspan=7>Exchange Rate {{dropDownCurrency[dropDownCurrency.findIndex(x => x.name == "USD")].val}} USD =   {{dropDownCurrency[dropDownCurrency.findIndex(x => x.name == "AED")].val}} AED</td>
                <td class="tSummary">AED in Total</td>
                <td class="tSummary">{{totalAed.vat_amount}}</td>
                <td class="tSummary">{{totalAed.sub_total}}</td>
                <td class="tSummary">{{totalAed.total}}</td>
                <td></td>
                <td rowspan=2><button class="rowButton plusRow" @click="addTableBRow">+</button></td>
            </tr>
            <tr>
                <td class="tSummary">USD in Total</td>
                <td class="tSummary">{{totalUsd.vat_amount}}</td>
                <td class="tSummary">{{totalUsd.sub_total}}</td>
                <td class="tSummary">{{totalUsd.total}}</td>
                <td></td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { log } from 'util';

export default {
    name: "partBTable",
    computed: {
        ...mapGetters([
            'tableBRows',
            'dropDownUom',
            'dropDownCurrency',
            'dropDownChargeTo',
            'totalUsd',
            'totalAed'
        ])
    },
    methods: {
        addTableBRow () {
            console.log('partBTable method addTableBRow');
            this.$store.dispatch('addTableBRow');
        },
        removeTableBRow (row) {
            console.log('partBTable method removeTableBRow');
            this.$store.commit('removeTableBRow',row);
        },
        updateRowValue (row) {
            console.log('partBTable method updateRowValue');
            this.$store.commit('updateRowValue',row);
            this.$store.commit('updateSummary');
        },
        updateSummary () {
            console.log('partBTable method updateSummary');
            this.$store.commit('updateSummary');
        }
    },
    mounted () {
        console.log('mounted');
        this.$store.dispatch('getFormDatas');
        this.$store.dispatch('addTableBRow');
    }
    
}



</script>