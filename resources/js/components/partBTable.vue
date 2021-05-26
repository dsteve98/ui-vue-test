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
                <td><input v-model="row.uom" :name="`tableBRows[${index}][uom]`" type="text" placeholder="UOM"></td>
                <td><input v-model="row.unit_price" :name="`tableBRows[${index}][unit_price]`" type="text" placeholder="Unit Price"></td>
                <td><input v-model="row.discount" :name="`tableBRows[${index}][discount]`" type="text" placeholder="Discount"></td>
                <td><input v-model="row.vat" :name="`tableBRows[${index}][vat]`" type="text" placeholder="VAT"></td>
                <td>-></td>
                <td><input v-model="row.currency" :name="`tableBRows[${index}][currency]`" type="text" placeholder="Currency"></td>
                <td><input v-model="row.vat_amount" :name="`tableBRows[${index}][vat_amount]`" type="text" placeholder="VAT Amount"></td>
                <td><input v-model="row.sub_total" :name="`tableBRows[${index}][sub_total]`" type="text" placeholder="Sub Total"></td>
                <td><input v-model="row.total" :name="`tableBRows[${index}][total]`" type="text" placeholder="Total"></td>
                <td><input v-model="row.charge_to" :name="`tableBRows[${index}][charge_to]`" type="text" placeholder="Charge To"></td>
                <td><button @click="removeTableBRow(row)">-</button></td>
            </tr>
        </table>
        <button @click="addTableBRow">+</button>
        <button @click="printdata">+</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { log } from 'util';

export default {
    name: "partBTable",
    computed: {
        ...mapGetters([
            'tableBRows'
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
            console.log(this.$store.state.tableBRows);;
        }
    }
    
}



</script>