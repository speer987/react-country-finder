import { useState } from "react";

export default function Entry({ action }) {
  const [country, setCountryName] = useState("");

  function submit(e) {
    e.preventDefault();
    action(country);
  }

  return (
    <form onSubmit={submit}>
      <label>Please Enter A Country Name: </label>
      <input value={country} onChange={(e) => setCountryName(e.target.value)} />
      <p>Hit "Enter" or "Return" to Submit.</p>
    </form>
  );
}
