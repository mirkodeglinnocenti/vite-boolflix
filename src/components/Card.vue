<template>

    <li>
        <p>{{ result.title }}</p>
        <p>{{ result.original_title }}</p>
    </li>


</template>

<script>
export default{
    props:{
        result: {
            type: Array,
            required: true
        }
    }

}
</script>

<style lang="scss" scoped>

</style>