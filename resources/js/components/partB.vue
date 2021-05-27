<template>
    <div id="app" class="part-b">
        <h1>Cost Detail</h1>
        <part-b-table></part-b-table>
    </div>
</template>

<script>
import partBTable from './partBTable.vue'

export default ({
    name: 'partB',
    components: {
        partBTable
    }
})
</script>