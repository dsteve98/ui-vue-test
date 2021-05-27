let actions= {
    addTableBRow (context) {
        let rowCounter = context.getters.rowCounter
        // console.log(rowCounter)
        context.commit('addTableBRow' ,rowCounter)
    },
    getFormDatas (context) {
        axios.get('api/formdatas')
            .then(res => {
                // console.log(res.data);
                context.commit('updateFormData', res.data);
            }).catch(err =>{
                console.log(err);
            })
    }
}

export default actions