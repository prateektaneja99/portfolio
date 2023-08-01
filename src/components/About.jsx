import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I am a passionate Front-End Developer with over 4 years of
          professional experience, constantly striving to expand my expertise in
          cutting-edge frontend technologies. I specialize in crafting
          responsive and visually appealing web applications, leveraging the
          power of React.js, Next.js, and Express.js. Through personal projects,
          I explore the possibilities of Next.js for Server-Side Rendering (SSR)
          and Search Engine Optimization (SEO), further enhancing the user
          experience. My proficiency in HTML, CSS, JavaScript, TypeScript,
          Tailwind, and Bootstrap allows me to create captivating user
          interfaces that have contributed to a 25% increase in user interaction
          and satisfaction.
        </p>

        <br />

        <p className="text-xl">
          Apart from my work in web development, I embrace a diverse lifestyle,
          driven by my passions for cooking, traveling, and fitness. I enjoy
          experimenting in the kitchen, preparing delightful meals. Traveling
          allows me to immerse myself in different cultures, savor unique
          cuisines, and create unforgettable memories. In addition, my
          enthusiasm for cars fuels my curiosity about the latest automotive
          innovations, and I make sure to stay updated with industry trends and
          attend car shows to witness automotive engineering marvels firsthand.
          I am always excited to connect with like-minded individuals and engage
          in stimulating conversations. Let's explore new possibilities and
          create remarkable experiences together. Looking forward to connecting
          soon!
        </p>
      </div>
    </div>
  );
};

export default About;
