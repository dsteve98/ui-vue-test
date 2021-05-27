<template>
    <div>
        <table>
            <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>UOM</th>
                <th>Unit Price</th>
                <th>Discount (%)</th>
                <th>VAT (%)</th>
                <th></th>
                <th>Currency</th>
                <th>VAT Amount</th>
                <th>Sub Total</th>
                <th>Total</th>
                <th>Charge To</th>
                <th></th>
            </tr>
            <tr v-for="(row, index) in tableBRows" :key="index">
                <td><input v-model="row.description" :name="`tableBRows[${index}][description]`" type="text" placeholder="Description"></td>
                <td><input @change="updateRowValue(row)" v-model="row.qty" :name="`tableBRows[${index}][qty]`" type="number" placeholder="Qty"></td>
                <td>
                    <select v-model="row.uom" :name="`tableBRows[${index}][uom]`">
                        <option v-for="(uom, uomidx) in dropDownUom" :key="uomidx" :value="uom">{{uom}}</option>
                    </select>
                </td>
                <td><input @change="updateRowValue(row)" v-model="row.unit_price" :name="`tableBRows[${index}][unit_price]`" type="number" placeholder="Unit Price"></td>
                <td><input @change="updateRowValue(row)" v-model="row.discount" :name="`tableBRows[${index}][discount]`" type="number" placeholder="Discount"></td>
                <td><input @change="updateRowValue(row)" v-model="row.vat" :name="`tableBRows[${index}][vat]`" type="number" placeholder="VAT"></td>
                <td>-></td>
                <td>
                    <select @change="updateSummary" v-model="row.currency" :name="`tableBRows[${index}][currency]`">
                        <option v-for="(currency, currencyidx) in dropDownCurrency" :key="currencyidx" :value="currency.name">{{currency.name}}</option>
                    </select>
                </td>
                <!-- <td><input v-model="row.vat_amount" :name="`tableBRows[${index}][vat_amount]`" type="text" placeholder="VAT Amount"></td> -->
                <td>{{row.vat_amount}}</td>
                <!-- <td><input v-model="row.sub_total" :name="`tableBRows[${index}][sub_total]`" type="text" placeholder="Sub Total"></td> -->
                <td>{{row.sub_total}}</td>
                <!-- <td><input v-model="row.total" :name="`tableBRows[${index}][total]`" type="text" placeholder="Total"></td> -->
                <td>{{row.total}}</td>
                <td>
                    <select v-model="row.charge_to" :name="`tableBRows[${index}][charge_to]`">
                        <option value="" disabled selected>Select an option</option>
                        <option v-for="(chargeto, chargetoidx) in dropDownChargeTo" :key="chargetoidx" :value="chargeto">{{chargeto}}</option>
                    </select>
                </td>
                <td><button @click="removeTableBRow(row)">-</button></td>
            </tr>
            <tr>
                <td rowspan=2 colspan=7>Exchange Rate {{dropDownCurrency[dropDownCurrency.findIndex(x => x.name == "USD")].val}} USD =   {{dropDownCurrency[dropDownCurrency.findIndex(x => x.name == "AED")].val}} AED</td>
                <td>AED in Total</td>
                <td>{{totalAed.vat_amount}}</td>
                <td>{{totalAed.sub_total}}</td>
                <td>{{totalAed.total}}</td>
                <td></td>
                <td rowspan=2><button @click="addTableBRow">+</button></td>
            </tr>
            <tr>
                <td>USD in Total</td>
                <td>{{totalUsd.vat_amount}}</td>
                <td>{{totalUsd.sub_total}}</td>
                <td>{{totalUsd.total}}</td>
            </tr>
        </table>
        
        <button @click="printdata">%</button>
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
        printdata () {
            console.log("partBTable method printdata");
            console.log(this.$store.state.tableBRows);
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