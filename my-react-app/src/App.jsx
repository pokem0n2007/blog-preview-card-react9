import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogCard from './components/BlogCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BlogCard
      image="https://via.placeholder.com/150"
      category="Tech"
      title="Sample Blog Post"
      description="This is a sample blog post description."
      author={{ name: "John Doe", image: "https://via.placeholder.com/24" }}
    />
  )
}

export default App
