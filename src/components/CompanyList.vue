<template>
    <div>
        <input v-model="query" @input="updateQuery($event.target.value)" placeholder="Search companies..." />
        <ul>
            <li v-for="company in filteredCompanies" :key="company.id">
                <router-link :to="'/company/' + company.id">{{ company.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['filteredCompanies']),
        ...mapState(['query']),
    },
    methods: {
        ...mapActions(['updateQuery']),
    },
}
</script>
