import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState();

  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault()

    onSubmitUsername(inputRef.current.value);
  }

  function handleChange(value) {
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input type="text" id="usernameInput" name="usernameInput" ref={inputRef} onChange={(event) => handleChange(event.target.value)}/>
      </div>
      <div role='alert'>{error}</div>
      <button type="submit" disabled={!!error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
