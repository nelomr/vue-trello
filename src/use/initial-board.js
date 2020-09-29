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
            userAssigned: null
          },
          {
            description: '',
            name: 'second task',
            id: 2,
            userAssigned: null
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
            userAssigned: null
          }
        ]
      }
    ]
  }