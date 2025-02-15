import Typewriter from "./Typewriter";

export default function PageHeader({ title, image, sentences}) {
  
  return (
    <div className="relative mx-auto sm:h-[50vh] md:h-[55vh] lg:h-[60vh]  xl:h-[85vh]   bg-cover bg-center ">
      <img src={image} alt="" className="w-[100%] h-[100%]  max-w-[100%] absolute top-0"  />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <Typewriter texts={sentences} speed={50}/>
      </div>
    </div>
    
  );
}

  