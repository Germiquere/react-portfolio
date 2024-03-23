import image from "../section-works/proyect-img/portfolio.png";
import keepImage from "../section-works/proyect-img/gkeep.png";
import petImage from "../section-works/proyect-img/pet-shop.png";
import manageImage from "../section-works/proyect-img/manage.png";
// import crudApp from "../section-works/proyect-img/todo-app-crud.png";
import portfolioReact from "../section-works/proyect-img/portfolioReact.png";
import ninnaImage from "../section-works/proyect-img/NinnaApp.png";
import InfiniteScroll from "../section-works/proyect-img/InfiniteScroll.png";
import bikeMeNow from "../section-works/proyect-img/bikemenow.png";

const data = [
    {
        id: "001",
        title: "NINNA APP",
        description:
            "PRESENTING A ROBUST AND SOPHISTICATED APPLICATION DESIGNED FOR EFFICIENT PRODUCT MANAGEMENT, STOCK CONTROL, AND SALES TRACKING. THIS METICULOUSLY CRAFTED APP EXEMPLIFIES MY EXPERTISE IN SOFTWARE DEVELOPMENT, WITH A FOCUS ON CREATING STREAMLINED SOLUTIONS TO ENHANCE BUSINESS OPERATIONS. AS YOU DELVE INTO THE FUNCTIONALITIES OF THIS APPLICATION, YOU WILL WITNESS MY PROFICIENCY IN IMPLEMENTING CUTTING-EDGE FEATURES AND INTUITIVE USER INTERFACES.",
        photo: ninnaImage,
        demo: "https://ninna-app.vercel.app",
        code: "https://github.com/Germiquere/NinnaApp",
        tech: ["REACT", "MATERIAL UI", "FIREBASE", "REDUX"],
    },
    {
        id: "002",
        title: "BIKEMENOW",
        description:
            "INTRODUCING: BIKEMENOW! A BOOKING CAPSTONE PROJECT AT DIGITAL HOUSE THAT ALLOWS REGISTERED USERS TO EASILY, QUICKLY, AND SEAMLESSLY RESERVE A BICYCLE. ADDITIONALLY, FOR USERS WHO ARE ADMINISTRATORS, THEY ARE ALLOWED TO CREATE, EDIT, AND DELETE PRODUCTS, CATEGORIES, AND COMPANY POLICIES. FOR CATEGORIES AND PRODUCTS, THEY CAN UPLOAD IMAGES THAT ARE STORAGE USING AWS S3.",
        photo: bikeMeNow,
        demo: "https://proyecto-integrador-booking-app.vercel.app/",
        code: "https://github.com/Germiquere/ProyectoIntegrador-BookingApp",
        tech: ["JAVA", "AWS", "MYSQL", "REACT", "TAILWIND CSS"],
    },
    {
        id: "003",
        title: "INFINITE SCROLL",
        description:
            "I HAVE DEVELOPED A COMPACT APPLICATION THAT COMBINES THE INTERSECTION OBSERVER API WITH THE DUMMYJSON API TO CREATE AN EFFECTIVE LAZY LOADING IMPLEMENTATION. THIS PROJECT SHOWCASES MY SKILLS IN WEB DEVELOPMENT AND API INTEGRATION.",
        photo: InfiniteScroll,
        demo: "https://infinite-scroll-mauve-phi.vercel.app",
        code: "https://github.com/Germiquere/InfiniteScroll",
        tech: ["REACT", "INTERSECTION OBSERVER API", "DUMMYJSON API"],
    },

    {
        id: "004",
        title: "GOOGLE KEEP CLONE",
        description:
            "I'M WORKING ON THIS PROJECT USING REACT AND MATERIAL UI.DESPITE THIS IS STILL IN PROGRESSS, I AM LEARNING A LOT ABOUT THESE FRAMEWORKS AND LIBRARIES.",
        photo: keepImage,
        demo: "https://google-keep-clone-pearl.vercel.app/",
        code: "https://github.com/Germiquere/googleKeepClone",
        tech: ["HTML", "CSS", "REACT", "MATERIAL UI"],
    },
    {
        id: "005",
        title: "MANAGE LANDING PAGE",
        description:
            "IN THIS PROYECT I CREATED A RESPONSIVE LAYOUT HIGHTLIGHTING THE INFORMATION ABOUT THE COMPANY.THE MAIN GOAL WAS TO CREATE A FRESH AND SIMPLE LANDING PAGE.",
        photo: manageImage,
        demo: "https://germiquere.github.io/ManageWeb.github.io/",
        code: "https://github.com/Germiquere/ManageWeb.github.io",
        tech: ["HTML", "CSS"],
    },
    {
        id: "006",
        title: "FIRST PORTFOLIO",
        description:
            "THIS IS MY FIRST PORTFOLIO EVER. IT IS A FULL RESPONSIVE WEBSITE THAT IS MEANT TO PROVIDE INFORMATION ABOUT ME AND SHOW THE DIFFERENT PROYECTS I DEVELOPED. THE GOAL WAS TO CREATE AN ELEGANT, SIMPLE AND ENGAGING WEBSITE.",
        photo: image,
        demo: "https://germiquere.github.io/My-Portfolio/",
        code: "https://github.com/Germiquere/My-Portfolio",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
    },

    {
        id: "007",
        title: "REACT PORTFOLIO",
        description:
            "THE MAIN PURPOSE OF THIS IS TO CREATE A NEW PORTFOLIO WITH THE NEW FRAMEWORKS AND LIBRARIES I HAVE BEEN LEARNING SO FAR. THIS PARTICULAR PORTFOLIO IS INSPIRED BY A WEB OF A VIDEO GAME I LOVE SO MUCH,VALORANT.",
        photo: portfolioReact,
        demo: "https://germiquere-portfolio.vercel.app/",
        code: "https://github.com/Germiquere/react-portfolio/tree/main",
        tech: ["HTML", "CSS", "REACT", "TAILWIND CSS"],
    },

    {
        id: "008",
        title: "PET SHOT LANDING PAGE",
        description:
            "MY BRIEF WAS TO CREATE A RESPONSIVE LAYAOUT TO SHOWCASE THE PRODUCTS OF THE PET SHOP. ",
        photo: petImage,
        demo: "https://germiquere.github.io/Pet-shop.github.io/",
        code: "https://github.com/Germiquere/Pet-shop.github.io",
        tech: ["HTML", "CSS"],
    },
];

export { data };
