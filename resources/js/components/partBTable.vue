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
                <td><input v-model="row.qty" :name="`tableBRows[${index}][qty]`" type="text" placeholder="Qty"></td>
                <td>
                    <select v-model="row.uom" :name="`tableBRows[${index}][uom]`">
                        <option v-for="(uom, uomidx) in dropDownUom" :key="uomidx" :value="uom">{{uom}}</option>
                    </select>
                </td>
                <td><input v-model="row.unit_price" :name="`tableBRows[${index}][unit_price]`" type="text" placeholder="Unit Price"></td>
                <td><input v-model="row.discount" :name="`tableBRows[${index}][discount]`" type="text" placeholder="Discount"></td>
                <td><input v-model="row.vat" :name="`tableBRows[${index}][vat]`" type="text" placeholder="VAT"></td>
                <td>-></td>
                <td>
                    <select v-model="row.currency" :name="`tableBRows[${index}][currency]`">
                        <option v-for="(currency, currencyidx) in dropDownCurrency" :key="currencyidx" :value="currency.name">{{currency.name}}</option>
                    </select>
                </td>
                <td><input v-model="row.vat_amount" :name="`tableBRows[${index}][vat_amount]`" type="text" placeholder="VAT Amount"></td>
                <td><input v-model="row.sub_total" :name="`tableBRows[${index}][sub_total]`" type="text" placeholder="Sub Total"></td>
                <td><input v-model="row.total" :name="`tableBRows[${index}][total]`" type="text" placeholder="Total"></td>
                <td>
                    <select v-model="row.charge_to" :name="`tableBRows[${index}][charge_to]`">
                        <option value="" disabled selected>Select an option</option>
                        <option v-for="(chargeto, chargetoidx) in dropDownChargeTo" :key="chargetoidx" :value="chargeto">{{chargeto}}</option>
                    </select>
                </td>
                <td><button @click="removeTableBRow(row)">-</button></td>
            </tr>
        </table>
        <button @click="addTableBRow">+</button>
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
            'dropDownChargeTo'
        ])
    },
    methods: {
        addTableBRow () {
            console.log('Heyaaa');
            this.$store.dispatch('addTableBRow');
        },
        removeTableBRow (row) {
            console.log('Delete table b row');
            this.$store.commit('removeTableBRow',row);
        },
        printdata () {
            console.log("Get Data!");
            console.log(this.$store.state.tableBRows);
            // console.log(this.$store.state.dropDownUom);
            // console.log(this.$store.state.dropDownCurrency);
            // console.log(this.$store.state.dropDownChargeTo);
        }
    },
    mounted () {
        this.$store.dispatch('getFormDatas');
        this.$store.dispatch('addTableBRow');
    }
    
}



</script>