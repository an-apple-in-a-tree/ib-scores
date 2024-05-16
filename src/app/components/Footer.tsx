import { Assistant } from "next/font/google";

const assistant = Assistant({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={`bg-blue-600 text-white py-4`}>
      <div className="container mx-auto text-center">
        <p className={`${assistant.className} text-lg`}> @2024 made by Gloria Li</p>
      </div>
    </footer>
  );
};

export default Footer;
