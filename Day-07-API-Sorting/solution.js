const fetchAndSortPosts = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        const processedPosts = posts
            .filter((post) => post.userId === 1)
            .sort((firstPost, secondPost) => {
                const firstTitleLength = firstPost.title.length;
                const secondTitleLength = secondPost.title.length;

                return secondTitleLength - firstTitleLength;
            });

        console.log("Successfully fetched and sorted posts for User 1:");
        console.table(processedPosts);

    } catch (error) {
        console.error("Error encountered while processing data:", error.message);
    }
};

fetchAndSortPosts();