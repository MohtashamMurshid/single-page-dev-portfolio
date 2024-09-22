
export const SectionHeader = ({
    title,
    eyebrow,
    description
}:{
    title:String;
    eyebrow:String;
    description:String;
}) => {
  return (
    <>
    <div className="flex justify-center">
      <p className="uppercase font-semibold  
      tracking-widest bg-gradient-to-r
       from-emerald-300 to-sky-400 
       text-transparent bg-clip-text 
       text-center ">
        {eyebrow}
        </p>
    </div>
      <h1 className="font-sans text-3xl md:text-5xl  
      text-center mt-6  ">
        {title}
        </h1>
      <p className="text-center
       text-white/60 mt-4 md:text-lg
        lg:text-2xl max-w-md mx-auto ">
            {description}
        </p>
    </>
  )
};


