import { useParams } from "react-router-dom";

const aboutData = [
  {
    slug: "about-app",
    title: "About the app",
    description:
      "This application let's us add todos, edit and deleteitems. Login in to see the delete feature. also persist the todos in the browser's local storage for a subsequent visit.",
  },
  {
    slug: "about-developer",
    title: "About the developer",
    description:
      "Moses is  an intermediate full-stack developer, who is skilled with Django. he is currently mastering react web development and the journer is gpin great.",
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;

  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
