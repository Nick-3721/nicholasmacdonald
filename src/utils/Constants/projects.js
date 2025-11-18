// const animationsImages = import.meta.glob('/src/assets/images/projects/animations/*.{png,jpg,webp}', { eager: true });
const omakeseImages = import.meta.glob('/src/assets/images/projects/omakase/*.{png,jpg,webp}', { eager: true });


// Example  for future use with image imports

// export const projects = [
//   {
//     id: 1,
//     title: "Animations",
//     categories: ["Animation", "Illustration", "3D"],
//     coverImage: animationsImages['/src/assets/projects/animations/cover.webp'].default,
//     images: Object.values(animationsImages).map(i => i.default)
//   },
//   {
//     id: 2,
//     title: "Omakese",
//     categories: ["Illustration", "Graphic Design", "Art Direction"],
//     coverImage: omakeseImages['/src/assets/projects/omakese/cover.webp'].default,
//     images: Object.values(omakeseImages).map(i => i.default)
//   }
// ];




const projects = [
  {
    id: 1,
    title: "Animations",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Animation", "Illustration", "3D"],
    coverImage: "",
  },
  {
    id: 2,
    title: "Omakese",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Illustration", "Graphic Design", "Art Direction"],
    coverImage: omakeseImages['/src/assets/images/projects/omakase/cover.jpg'].default,
    coverImageAlt: "Omakese project cover image",
    images: Object.values(omakeseImages).map(i => i.default)
  },
  {
    id: 3,
    title: "Film photography",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Photography", "Art Direction"],
    coverImage: "",
  },
  {
    id: 4,
    title: "Digital photography",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Photography", "Art Direction"],
    coverImage: "",
  },
  {
    id: 5,
    title: "Travel photography",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Photography", "Art Direction"],
    coverImage: "",
  },
  {
    id: 6,
    title: "Creative coding",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Web Development", "Motion", "Animation", "3D", "Art Direction"],
    coverImage: "",
  },
  {
    id: 7,
    title: "Orbs",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Animation", "Illustration", "3D", "Graphic Design", "Art Direction", "3D"],
    coverImage: "",
  },
  {
    id: 8,
    title: "SportingCareers",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Web Development", "UX UI Design", "Branding"],
    coverImage: "",
  },
  {
    id: 9,
    title: "Your World Careers",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Web Development", "UX UI Design", "Branding"],
    coverImage: "",
  },
  {
    id: 10,
    title: "Breeze Workforce Solutions",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Web Development", "UX UI Design", "Branding"],
    coverImage: "",
  },
  {
    id: 11,
    title: "Your World",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Web Development", "UX UI Design", "Branding", "Graphic Design", "Art Direction", "Motion"],
    coverImage: "",
  },
  {
    id: 12,
    title: "3D work",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Animation", "3D", "Motion"],
    coverImage: "",
  },
  {
    id: 15,
    title: "Posters",
    description: "Bacon ipsum dolor amet landjaeger frankfurter tongue meatloaf shoulder kevin chicken kielbasa. Doner pig chicken short ribs, leberkas turducken pork andouille beef ribs short loin bresaola tail. Hamburger pork chop spare ribs pork belly, jowl brisket bacon jerky. Pork belly beef t-bone flank, alcatra landjaeger porchetta pork chop brisket picanha pork doner jerky pastrami.",
    categories: ["Graphic Design", "Illustration"],
    coverImage: "",
  },
];

export { projects };