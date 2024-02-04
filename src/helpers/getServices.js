export default async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/api/service', {
            method: 'GET',
        });
        const data = await response.json();
        console.log(data)

        return data?.services;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}