<template>
    <div v-if="company">
        <h2>{{ company.name }}</h2>
        <p><strong>Tax Level:</strong> {{ company.taxLevel }}</p>
        <p><strong>Year Founded:</strong> {{ company.year }}</p>
        <p><strong>Owner:</strong> {{ company.owner }}</p>
    </div>
    <div v-else>
        <p>Company not found.</p>
    </div>
</template>

<script>
export default {
    computed: {
        company() {
            const companyId = parseInt(this.$route.params.id, 10)
            return this.$store.state.companies.find((company) => company.id === companyId)
        },
    },
}
</script>
