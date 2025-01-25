import todo from "./images/frontendimg/todo.jpg"
import foodweb from "./images/frontendimg/foodweb.png"
import virtualr from "./images/frontendimg/virtualr.png"
import passgen from "./images/frontendimg/passgen.jpg"
import cart from "./images/frontendimg/cart.png"
import theme from "./images/frontendimg/themeSwitcher.png"

// backend pics
// linkedin pics
import login from "./images/backendimg/login.png"
import signup from "./images/backendimg/signup.png"
import Network from "./images/backendimg/Network.png"
import notification from "./images/backendimg/notification.png"
import myprofile from "./images/backendimg/Network.png"
import showcase from "./images/backendimg/showcase.png"
import home from "./images/backendimg/home.png"

// chatapp pics
import chatlogin from "./images/backendimg/chatlogin.png"
import chatsignup from "./images/backendimg/chatsignup.png"
import chathome from "./images/backendimg/chathome.png"
import chatuser from "./images/backendimg/chatuser.png"
import themes from "./images/backendimg/themes.png"
import chatprofile from "./images/backendimg/chatprofile.png"

// ecomimages
import ecomhome from "./images/backendimg/ecom/euserhome.png"
import elogin from "./images/backendimg/ecom/elogin.png"
import esignup from "./images/backendimg/ecom/esignup.png"
import addmindashcrtpro from "./images/backendimg/ecom/admindashcrprod.png"
import cartpage from "./images/backendimg/ecom/ecart.png"
import euserdash from "./images/backendimg/ecom/userdash.png"
import admindashuppro from "./images/backendimg/ecom/admindashupdatepro.png"

// crudapp

import crudhome from "./images/backendimg/crud/crudhome.png"
import adData from "./images/backendimg/crud/adData.png"
import crudsingle from "./images/backendimg/crud/crudsingle.png"
import crudupdate from "./images/backendimg/crud/crudupdte.png"


export const frontendproject=[
    {
        id:1,
        title:"product adding to cart ecommerce functionalities in React.js",
        image:cart,
        url:"https://add-to-cart-omega-nine.vercel.app/",
        github:"https://github.com/jawadkhanswati/add-to-cart"
    },
    {
        id:2,
        title:"Todo list in React.js",
        image:todo,
        url:"https://todolist-flax-zeta.vercel.app/",
        github:"https://github.com/jawadkhanswati/todo"
    },
    {
        id:3,
        title:"Random Password Generator in React.js",
        image:passgen,
        url:"https://passgenrator-omega.vercel.app/",
        github:"https://github.com/jawadkhanswati/passgenerator"
    },
    {
        id:4,
        title:"Responsive Functional Food Website in React.js",
        image:foodweb,
        url:"https://food-website-chi-murex.vercel.app/",
        github:"https://github.com/jawadkhanswati/Food-website"
    },

    {
        id:5,
        title:"Modren Landing Page in React.js",
        image:virtualr,
        url:"https://virtual-r-tan-seven.vercel.app/",
       github:"https://github.com/jawadkhanswati/VirtualR"
    },
  
    {
        id:6,
        title:"Dark and Light themeSwitcher in React.js",
        image:theme,
        url:"https://theme-switcher-six-alpha.vercel.app/",
        github:"https://github.com/jawadkhanswati/themeSwitcher"
    },
]

export const backendprojects=[
    {
        id:1,
        showcaseimg:showcase,
        signupimg:signup,
        signuptitle:"signuppage click to view",
        loginimg:login,
        logintitle:"login page click to view",
        homeimg:home,
        hometitle:"click to view home page",
        image1:Network,
        image1title:"user see their friends and friends Request click to view",
        image2:notification,
        image2title:"notification page where other user like and comment show all notifications here",
        image3:myprofile,
        image3title:"profile where user can update image bannerimage skills education and other more...",
        url:"https://github.com/jawadkhanswati/LinkedInApp",
        title:"Full MERN Stack LinkedIn app Clone",
        desc:"I created the linkedIn app using MERN and I added alot of functionalities in this app i implemented JWT authentication system. When user signup first time automatically send welcome message to user,-FOR SENDING EMAILS I USED NODEMAILER IN SERVERSIDE-. User can Create Post Delete Post if we follow the other user then we can see the Posts else we can see only own post when we uploaded.when the other User Like Or comment on Post We recived the notification and also the all Notifications we can view and Delete the Notifications,We can Edit our profile and also upload the profile image and BannerImage and the image data Storing safely in cloudinary. __ In frontend i user React.js, Tailwindcss, DaisyUi, for stateManagment i use TanStackQuerry",

        features:"login, Signup, editProfile, recievednotification, creatingPosts, like&Comment Post, sending friend request = accepting friendRequest = Rejecting request = unfriend User, we can only see the post of those we have followed and also see our own posts, recieved email while user commenting on post OR new user creating account, and other alot disign attraction",

        backtechnology:"EXPRESS.JS, NODE.JS, MONGODB, CLOUDINARY, NODEMAILER, JSONWEBTOKEN",
        fronttech:"React.JS, TANSTACKQUERRY, TAILWINDCSS, DAISYUI,"
        
    },
    
    {
        id:2,
        showcaseimg:chatuser,
        loginimg:chatlogin,
        logintitle:"modren login page",
        signupimg:chatsignup,
        signuptitle:"signup page",
        homeimg:chathome,
        hometitle:"homepage with multiple themes",
        image1:themes,
        image1title:"all theme page",
        image2:chatprofile,
        image2title:"user profile where user change profile pic",
        image3:chatuser,
        image3title:"2 user chat with each other",
        url:"https://github.com/jawadkhanswati/fullstack-chat-app",
        title:"Chat App",
        desc:"I created chat App Using Mern stack, in this app i implement authentication system of JSONWEBTOKEN, and user can send message to eachother in realtime. For sending realtime messages i use Socket.io . User can change their profile picture and also sending images to easeother during chatting and see realtime online and offline Status. And more than 20 themes in chatty app  ",

        features:"Signup, Login, Uploading ProfileImage, Sending Realtime messages and images,",

        backtechnology:"NODE.JS, EXPRESS.JS, MONGODB, SOCKET.IO",
        fronttech:"REACT.JS, ZUSTAND FOR STATE MANAGMENT, TAILWINDCSS, DAISYUI, SOCKET.IO"
        
    },
    {
        id:3,
        showcaseimg:ecomhome,
        loginimg:elogin,
        logintitle:"login page click to view",
        signupimg:esignup,
        signuptitle:"signup page click to view",
        homeimg:admindashuppro,
        hometitle:"admin update the click to view",
        image1:euserdash,
        image1title:"user dashboard click to view",
        image2:addmindashcrtpro,
        image2title:"addmin dashbord admin can create delete update product and category",
        image3:cartpage,
        image3title:"cart page click to view",
        url:"https://github.com/jawadkhanswati/EcommereceWeb",
        title:"Ecommerce website created in Mern Stack",
        desc:"i created ecommerece website , for authentication i user jwt, With User Dashboard And Admin Dashboard, in Admin Dashboard user can create product, category, updateproduct, and always change the category of product. we can search the product by title and name , also we can filter product by price and category. this is multivendor ecomerece app",

        features:"Signup, Login, UserDashbord, AdminDashbord, Search product, filterProducts by price and category, Admin can createproduct update and delete product and category, cartpage",

        backtechnology:"Nodejs, Expressjs, Mongodb, Jsonwebtoken",
        fronttech:"Reactjs, ContextApi for StateManagment, Bootstrap"

    },
    {
       

        id:4,
        showcaseimg:crudhome,
        homeimg:crudhome,
        hometitle:"homepage user create, read, update, filter, search Data the click to view",
        image1:adData,
        image1title:"create user Details click to view",
        image2:crudsingle,
        image2title:"click on any one User View his details click to View",
        image3:crudupdate,
        image3title:"user can update any data which he want click to view",
        url:"https://github.com/jawadkhanswati/crudapp",
        title:"Crud App with NO Authentication",
        desc:" this is simple crud app without authenticaion for mastering crud Applications in this app we can create, Read, Upadate, Delete, Search, Filter, and also we upload image for the image upload i use Multer",

        features:"Create Data, Read, update, Delete, uploading image, search Data, Filter Data , Sort Data, View sigle User Data",

        backtechnology:"Nodejs, Expressjs, Mongodb",
        fronttech:"Reactjs, ContextApi for StateManagment, Bootstrap"

    },
  
]