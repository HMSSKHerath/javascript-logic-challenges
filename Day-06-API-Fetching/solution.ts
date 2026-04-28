interface User
{
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchApiUsers = async () =>
{
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try
    {
       const response = await fetch(apiUrl);
       
       if (!response.ok)
       {
            throw new Error(`Failed to fetch users: ${response.status}`);
       }

       const users:User[] = await response.json();

       const findUsers = users
            .filter((user) => user.username.length > 6)
            .map(({name,email}) => ({name,email}));
        
         console.table(findUsers);
    }
    catch (error)
    {
        console.error('Error fetching users:', error);
    }
}

fetchApiUsers();

export {};