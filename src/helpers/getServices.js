export default async function fetchData() {
    try {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('Request timed out'));
            }, 10000); // Adjust the timeout value (in milliseconds) as needed
        });

        const fetchPromise = fetch('https://luxury-center.vercel.app/api/service', {
            method: 'GET',
        }).then(response => response.json());

        const data = await Promise.race([fetchPromise, timeoutPromise]);

        return data?.services;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}