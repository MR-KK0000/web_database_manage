<template>
    <div id="dashboard">
        <h1>{{ meg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {
            meg: this.$route.query.name
        }
    },
}
</script>