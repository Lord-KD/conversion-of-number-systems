module.exports = {
  configureWebpack: {
    devServer: {
      before(app, server) {
        let questions= [{
          q: 10, c: 2, value: 4, answer: null},{
          q: 2, c: 8, value: 1011, answer: null},{
          q: 16, c: 2, value: 6, answer: null},{
          q: 10, c: 8, value: 8, answer: null},{
          q: 8, c: 16, value: 16, answer: null},{
          q: 2, c: 16, value: 1101, answer: null},{
          q: 2, c: 10, value: 1000, answer: null},{
          q: 8, c: 2, value: 14, answer: null},{
          q: 16, c: 10, value: 12, answer: null},{
          q: 16, c: 8, value: 13, answer: null},{
          q: 10, c: 2, value: 2, answer: null},{
          q: 8, c: 10, value: 10, answer: null}]

        let topics= [
          {
            t1: {q: 10, value: 4},
            t2: {q: 2, value: 1011}
          },
          {
            t1: {q: 8, value: 11},
            t2: {q: 10, value: 8}
          },
          {
            t1: {q: 2, value: 1101},
            t2: {q: 16, value: 'c'}
          },
          {
            t1: {q: 8, value: 13},
            t2: {q: 2, value: 111}
          },
          {
            t1: {q: 2, value: 1111},
            t2: {q: 10, value: 15}
          },
          {
            t1: {q: 16, value: 4},
            t2: {q: 2, value: 1011}
          },
          {
            t1: {q: 8, value: 4},
            t2: {q: 16, value: 1011}
          },
          {
            t1: {q: 10, value: 12},
            t2: {q: 8, value: 12}
          },
          {
            t1: {q: 8, value: 6},
            t2: {q: 2, value: 1011}
          },
          {
            t1: {q: 16, value: 'd'},
            t2: {q: 8, value: 14}
          },
          {
            t1: {q: 16, value: 'f'},
            t2: {q: 10, value: 15}
          },
          {
            t1: {q: 2, value: 1001},
            t2: {q: 10, value: 7}
          }
        ]

        app.get('/api/questions', (req, res) => {
          res.json(questions)
        })

        app.get('/api/topics', (req, res) => {
          res.json(topics)
        })
      }


    }
  }
};
