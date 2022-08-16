import emoji from "react-easy-emoji";

export const greetings = {
	name: "U.M.muzaffarovich",
	title: "Hi all, I'm Mirafzal",
	description:
		"I'm passionate Frontend developer in developing real-world projects (personal, business,  e-commerce web applications). My purpose is to work on large international projects and enhance my experience and knowledge.",
	resumeLink:
		"https://drive.google.com/file/d/16jQmWq3TeLhLIF0M82rPm6h2VCdzFDA5/view",
};

export const openSource = {
	githubUserName: "Mirafzal1307",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/profile.php?id=100074563819796",
	instagram: "https://www.instagram.com/u.m.muzaffarovich/",
	twitter: "https://twitter.com/U_Mirafzal",
	github: "https://github.com/Mirafzal1307",
	linkedin: "https://www.linkedin.com/in/mirafzal-usmonjonov-752138227/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL FRONTEND WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "FRONTEND WEB Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js And Vue.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				{
					skillName: "Vue",
					fontAwesomeClassname: "logos:vue",
				},
				{
					skillName: "Material",
					fontAwesomeClassname: "logos:material-ui",
				},
				{
					skillName: "Nuxtjs",
					fontAwesomeClassname: "logos:nuxt",
				},
				{
					skillName: "Typescript",
					fontAwesomeClassname: "logos:typescript",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Cambirdge International University In Tashkent",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2022 - April 2025",
		desc: "Participated in the research of XXX and published 3 papers.",
		grade: "Grade A",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Itech",
		companylogo: "/img/icons/common/itech.jpg",
		date: "September 2021 – Present",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using  Material-UI, Typescript, Chart.js and some other libraries.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "Olmaliq Savdo",
		desc: "With Olaliq Savdo, it’s easy to find the products with the best price and ship them straight to your door.",
		link: "https://shop.itechcompany.uz/en"
	},
	{
		name: "Yengil Credit",
		desc: "Get hands-on everything in technical products with Yengil Credit",
		github: "https://yengilcredit.uz/",
	},
	{
		name: "DeliveryFood",
		desc: "Now your reach to all your favorite food is just one touch apart",
		github: "https://github.com/Mirafzal1307/DeliveryFood",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Usmonjonov Mirafzal",
	description:
		"A passionate Fronend Web Developer",
	author: "Usmonjonov Mirafzal",
	image: "https://avatars.githubusercontent.com/u/90593555?v=4",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Mirafzal",
		"Usmonjonov Mirafzal",
		"Mirafzal0713",
		"Portfolio",
		"Usmonjonov Mirafzal ",
		"Usmonjonov Mirafzal Portfolio",
	],
}