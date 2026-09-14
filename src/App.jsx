import { Suspense, useState } from "react";
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Technologies from "./Components/Technologies";
import Stack from "./Components/Stack";
import { toast } from "react-toastify";


const techFetch = async() =>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
      const techPromise = techFetch()
      console.log(techPromise);

      const [stacked, setStaked] = useState([]);

      const handleStack = (tech) =>{
          const exists = stacked.find(
            (item=>item.id === tech.id)
          );
          if(exists){
            toast.error("Already added")
            return;
          }
          setStaked([...stacked, tech]);

          toast.success(`${tech.name} added to stack`)
      }

      const handleRemove = (id) =>{
        const updatedStack = stacked.filter(
          (item)=>item.id !== id
        );
        toast.error('Removed from stack')
        setStaked(updatedStack)
      }

      const handleRemoveAll = ()=>{
        setStaked([])
        toast.info("Stack cleeared")
      };
      //  const handleClick = () =>{
      //   toast.success("successfully added to cart!")
      //  }
  return (
    <>
       {/* <h2 className='text-5xl text-amber-900 font-bold'> React assignmet <FaBitcoin />
       <button onClick={handleClick}>clivk me</button>
</h2> */}
     <Navbar></Navbar>  
     <Hero></Hero>
     <Suspense fallback={<h2>Loading....</h2>}>
        <div className="flex flex-col items-center justify-center
             lg:flex-row items-start">
           <Technologies
           techPromise={techPromise}
           handleStack={handleStack}
           stacked={stacked}
           />
           <Stack
           stacked={stacked}
           handleRemove={handleRemove}
           handleRemoveAll={handleRemoveAll}
           />
        </div>
    </Suspense>
     <Footer></Footer>
    </>
  )
}

export default App
