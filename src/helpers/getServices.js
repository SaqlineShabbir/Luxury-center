export default async function fetchData() {
    try {
        const response = await fetch('http://lhttps://luxury-center.vercel.app//api/service', {
            method: 'GET',
        });
        const data = await response.json();


        return data?.services;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;

    }
}