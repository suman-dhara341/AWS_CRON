import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoggedIn(true);
    }
  };

  if (loggedIn) return <h2>Welcome, {email}!</h2>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
      />
      <button type="submit">Login</button>
    </form>
  );
}
