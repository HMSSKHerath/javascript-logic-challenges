interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchAndSortPosts = async (): Promise<void> => {
    const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response: Response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts: Post[] = await response.json();

        const processedPosts: Post[] = posts
            .filter((post: Post) => post.userId === 1)
            .sort((firstPost: Post, secondPost: Post) => {
                const firstTitleLength: number = firstPost.title.length;
                const secondTitleLength: number = secondPost.title.length;

                return secondTitleLength - firstTitleLength;
            });

        console.log("Successfully fetched and sorted posts for User 1:");
        console.table(processedPosts);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error encountered:", error.message);
        } else {
            console.error("An unexpected error occurred.");
        }
    }
};

fetchAndSortPosts();

export {};