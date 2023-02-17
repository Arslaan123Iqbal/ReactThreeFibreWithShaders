import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css"
const imagePaths = [
  { path: "./0.jpg", alt: "Image 1" },
  { path: "./1.jpg", alt: "Image 2" },
  { path: "./2.jpg", alt: "Image 3" },
  { path: "./3.jpg", alt: "Image 4" },
];


const data = [
  {
    title:"./1.jpg",
    theme:{background:"yellow",text:"white"}

  },
  {
    title:"./2.jpg",
    theme:{background:"blue",text:"white"}

  },
  {
    title:"./0.jpg",
    theme:{background:"red",text:"white"}

  },
  {
    title:"./3.jpg",
    theme:{background:"lightpink",text:"white"}

  },
  {
    title:"./2.jpg",
    theme:{background:"blue",text:"white"}

  },
  {
    title:"./0.jpg",
    theme:{background:"red",text:"white"}

  },
  {
    title:"./3.jpg",
    theme:{background:"lightpink",text:"white"}

  },
]

function App() {
  const groupRef = useRef([]);

  const onScroll = (el) => {
    const styles = groupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();
        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);
    document.body.style.backgroundColor = `${styles.group.getAttribute('data-bgcolor')}`;
    document.body.style.color = `${styles.group.getAttribute('data-txtcolor')}`;
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div>
      {data.map((group, i) => (
        <div
        className="main"
          ref={(el) => (groupRef.current[i] = el)}
          style={{ height: "50vh" }}
          data-bgcolor={group.theme.background}
          data-txtcolor={group.theme.text}
        >
          <img className="car" src={group.title} height={500} width={500}/>
        </div>
      ))}
    </div>
  );
}


export default App;