export default async function fetchData() {
    try {
        const response = await fetch('https://luxury-center.vercel.app/api/service', {
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