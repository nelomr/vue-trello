export default {
    name: 'initialBoard',
    columns: [
      {
        name: 'todo',
        tasks: [
          {
            description: '',
            name: 'first task',
            id: 1,
            user: null
          },
          {
            description: '',
            name: 'second task',
            id: 2,
            user: null
          },
        ]
      },
      {
        name: 'done',
        tasks: [
          {
            description: '',
            name: 'last task',
            id: 3,
            user: null
          }
        ]
      }
    ]
  }