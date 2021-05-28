<template>
    <div id="app" class="mainContainer">
        <part-a></part-a>
        <part-b></part-b>
        <bottom-button></bottom-button>
    </div>
</template>

<script>
import partA from './components/partA.vue'
import partB from './components/partB.vue'
import bottomButton from './components/bottomButton.vue'

export default ({
    name: 'app',
    components: {
        partA,
        partB,
        bottomButton
    }
})
</script>