import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState();

  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault()

    onSubmitUsername(inputRef.current.value);
  }

  function handleChange(value) {
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input type="text" id="usernameInput" name="usernameInput" ref={inputRef} value={username} onChange={(event) => handleChange(event.target.value)}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
