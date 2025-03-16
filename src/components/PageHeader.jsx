import Typewriter from "./Typewriter";

export default function PageHeader({ title, image, sentences }) {
  return (
    <div className="relative mx-auto h-[50vh] md:h-[60vh] lg:h-[90vh]">
      <img
        src={image}
        alt=""
        className="absolute top-0 w-[100%] max-w-[100%] h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-wrap">
          {title}
        </h1>
        <Typewriter texts={sentences} speed={50} />
      </div>
    </div>
  );
}
