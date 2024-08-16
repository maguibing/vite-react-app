import { useState, useEffect } from "react";

const useMouse = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })


  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return mouse
}

export { useMouse }
