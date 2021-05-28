<template>
    <div id="app" class="part-b">
        <h3 class="partBTitle">Cost Detail <i class="fa fa-chevron-down" aria-hidden="true"></i></h3>
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