export async function getUser(param) {
    try
    {
        const response = await fetch(`users/${param}`);

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

