const fetchApiUsers = async () =>
{
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    try
    {
        const response = await fetch(API_URL);

        if (!response.ok)
        {
            throw new Error(`Failed To Fetch : ${response.status}`);
        }

        const users = await response.json();

        const findUsers = users
            .filter(user => user.username.length > 6)
            .map(({name,email}) => ({name,email}));

        console.table(findUsers);
    }
    catch (error)
    {
        console.error('Error fetching users:', error);
    }
}

fetchApiUsers();