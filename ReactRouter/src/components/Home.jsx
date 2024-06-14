import React from "react";

function Home(){
    return(
        <>
        <div className=' w-full px-28 h-auto bg-slate-200 py-10 '>
          <div className=" flex justify-center w-full h-96 items-center bg-[url('https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/coaching2.jpg')] bg-cover bg-center">
            <h1 className=" font-bold p-6 text-center w-1/2 text-5xl">Master Mind Coaching Classes</h1>
          </div>
            <div className=" flex w-full h-auto justify-evenly py-20">
              <div className=" w-2/5  p-8 h-60">
                <h1 className=" underline">What We Offer:</h1>
                <ul>
                  <li><b>Personalized Coaching:</b> Tailored lessons and exam prep.</li>
                  <li><b>Skill Enhancement:</b> Critical thinking and problem-solving in group classes.</li>
                  <li><b>Flexible Learning:</b> In-person/online classes and workshops on study techniques <br />and time management.</li>
                </ul>
              </div>
              <div className=" w-2/5 p-8 h-60">
                <h1 className=" underline">Why Choose Us:</h1>
                <ul>
                  <li><b>Expert Instructors:</b> Learn from experienced tutors committed to your success.</li>
                  <li><b>Tailored Programs:</b> Programs designed to match your specific academic goals.</li>
                  <li><b>Supportive Community:</b> Join a community that fosters growth and excellence.</li>
                </ul>
              </div>
            </div>
        </div>
        </>
    )
}

export default Home;