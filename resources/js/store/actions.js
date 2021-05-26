let actions= {
    addTableBRow (context) {
        let rowCounter = context.getters.rowCounter
        // console.log(rowCounter)
        context.commit('addTableBRow' ,rowCounter)
    }
}

export default actions