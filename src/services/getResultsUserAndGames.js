async function getResultsUser() {
    try {
        const response = await fetch('http://localhost:5500');
        if(!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Помилка: " + error);
    }
}

getResultsUser();