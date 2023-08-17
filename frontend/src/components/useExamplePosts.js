const examplePosts = [
    {
      _id: '1',
      questionName: 'How to learn programming?',
      createdAt: '2023-08-16T10:30:00Z',
      questionUrl: 'https://static1.smartbear.co/smartbearbrand/media/images/blog/what%E2%80%99s-the-best-programming-language-to-learn-first.png?ext=.png',
     
      allAnswers: [
        {
          _id: 'a1',
          user: {
            userName: 'Coder123',
            photo: 'https://example.com/user123.jpg'
          },
          createdAt: '2023-08-16T12:00:00Z',
          answer: 'Learning programming takes practice and dedication...'
        },
        // ... more answers
      ]
    },
    {
      _id: '2',
      questionName: 'Best practices for front-end development?',
      createdAt: '2023-08-15T14:15:00Z',
      allAnswers: [
        {
          _id: 'a2',
          user: {
            userName: 'WebDevMaster',
            photo: 'https://example.com/webdevmaster.jpg'
          },
          createdAt: '2023-08-15T15:30:00Z',
          answer: 'When it comes to front-end development, there...'
        },
        // ... more answers
      ]
    },
    // ... more example posts
  ];
  
  export default examplePosts;
  