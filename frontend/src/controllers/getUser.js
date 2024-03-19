export async function login(email, password) {
    try
    {
        const response = await fetch(`http://localhost:3031/users/login`, {
            method: 'POST', // Specify the HTTP method (POST)
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON
            },
            body: JSON.stringify({ // Convert the data to JSON format
                email: email,
                password: password
            })
        });
        if (!response.ok)
        {
            let errorMessage = '';
            switch (response.status)
            {
                case 404:
                    errorMessage = 'User not found';
                    break;
                case 500:
                    errorMessage = 'Internal Server Error';
                    break;
                default:
                    errorMessage = `Error: ${response.statusText}`;
            }
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data;
    } catch (error)
    {
        console.error(`Error: ${error.message}`);
    }
}
