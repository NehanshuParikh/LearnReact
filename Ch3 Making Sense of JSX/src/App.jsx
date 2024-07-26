function App() {

  const users = [
    { name: 'John', age: 30, role: 'Web Developer' },
    { name: 'Jane', age: 25, role: 'Designer' },
    { name: 'Bob', age: 40, role: 'Manager' },
  ]

  return (
    <ul>
      {
        users.map((user, index) => {
          return (
            <li key={index}>This is a index number: {index}  {user.name} | {user.age} | {user.role}</li>
          )
        })
      }
    </ul>
  )


}




export default App
