<template>
    <div id="app">
        <h1>HELLLO</h1>
        <part-b></part-b>
    </div>
</template>

<script>
import partB from './components/partB.vue'
// import buttonsOption from './components/buttonsOption.vue'

export default ({
    name: 'app',
    components: {
        partB
        // buttonsOption
    }
})
</script>