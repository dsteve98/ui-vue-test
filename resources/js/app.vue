<template>
    <div id="app" class="mainContainer">
        <part-b></part-b>
        <bottom-button></bottom-button>
    </div>
</template>

<script>
import partB from './components/partB.vue'
import bottomButton from './components/bottomButton.vue'

export default ({
    name: 'app',
    components: {
        partB,
        bottomButton
    }
})
</script>