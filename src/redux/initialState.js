const initialState = {
    posts: [
        {
            id: '1',
            title: 'First Article',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: '2023-07-05',
            author: 'Viktoryia Vysotskaya',
            category: 'Sport'
        },
        {
            id: '2',
            title: 'Second Article',
            shortDescription: 'A brief overview of the article...',
            content: 'The main subject matter of the article',
            publishedDate: '2023-07-06',
            author: 'Viktoryia Vysotskaya',
            category: 'Movies'
        },
        {
            id: '3',
            title: 'Third Article',
            shortDescription: 'Summarizing the main points, the article explores...',
            content: 'The primary focus of the article',
            publishedDate: '2023-07-07',
            author: 'Viktoryia Vysotskaya',
            category: 'News'
        },
    ],
    categories: [
        'Sport',
        'Movies',
        'News'
    ]
};

export default initialState;