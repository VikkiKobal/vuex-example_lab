import { createStore } from 'vuex';

export default createStore({
    state: {
        companies: [
            { id: 1, name: 'Company A', taxLevel: 'High', year: 2000, owner: 'Owner A' },
            { id: 2, name: 'Company B', taxLevel: 'Medium', year: 2010, owner: 'Owner B' },
            { id: 3, name: 'Company C', taxLevel: 'Low', year: 2020, owner: 'Owner C' }
        ],
        query: '' // Початково порожній рядок
    },
    getters: {
        filteredCompanies(state) {
            const query = state.query ? String(state.query).toLowerCase() : ''; // Перетворюємо query на рядок
            return state.companies.filter(company =>
                company.name.toLowerCase().includes(query) ||
                company.taxLevel.toLowerCase().includes(query) ||
                company.year.toString().includes(query) ||
                company.owner.toLowerCase().includes(query)
            );
        }
    },
    mutations: {
        setQuery(state, query) {
            state.query = query; // Завжди встановлюємо значення як рядок
        }
    },
    actions: {
        updateQuery({ commit }, query) {
            commit('setQuery', query);
        }
    },
    modules: {}
});
