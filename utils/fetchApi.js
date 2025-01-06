import config from "../config.js";

// export const fetchApi = async (method, path) => {
//     const response = await fetch(`${config.BASE_URL}${path}`, {
//         method: method,
//         headers: {
//             'x-rapidapi-key': 'b4006212f1mshdaa941c5f005c48p1e1900jsn6ee029eadbd7',
// 		    'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
//         }
//     });
//     const result = await response.json();
//     return result;
// }

export const fetchApi = async (method, path) => {
    try {
        const response = await fetch(`${config.BASE_URL}${path}`, {
            method: method,
            headers: {
                'x-rapidapi-key': 'b4006212f1mshdaa941c5f005c48p1e1900jsn6ee029eadbd7',
                'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
}

