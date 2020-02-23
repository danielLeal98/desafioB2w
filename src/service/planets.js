import api from './api';

export default {
    async getPlanet(planetId) {
        const response = await api.get(`/planets/${planetId}/`)
        return response
    }
}