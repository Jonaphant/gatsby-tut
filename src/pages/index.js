import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div style={{ color: 'purple' }}>
      <Link to="/about/">About</Link>
      <h1>This is sparta</h1>
      <p>Hello Jon!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
