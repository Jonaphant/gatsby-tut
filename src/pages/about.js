import React from "react";
import { Link } from "gatsby";

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  )
}