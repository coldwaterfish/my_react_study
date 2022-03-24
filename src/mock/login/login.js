import Mock from 'mockjs'
const login= Mock.mock('/login', 'get',options=> {
    const body=JSON.parse(options.body)
    if (body.username === 'admin' && body.password === '123456') {
        return Mock.mock({
          username: "admin",
          password:"123456",
          token:"12asdfsdf121s21d2f1se15sd6f4s6",
          role:['admin'],
          tel:"13757151027",
        });
      } else {
        return null;
      }
})

export default login