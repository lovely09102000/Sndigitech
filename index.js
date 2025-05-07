import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import { dbConfig } from './_configs/db.config.js';
import userRoute from './_routes/user.route.js';
import actionRoute from './_routes/action.route.js';
import sectionRoute from './_routes/section.route.js';
import adminPermissionRoute from './_routes/admin.permission.route.js';
import categoryRoute from './_routes/category.route.js';
import contactUsRoute from './_routes/contact.us.route.js';
import departmentRoute from './_routes/department.route.js';
import designationRoute from './_routes/designation.route.js';
import directorMessageRoute from './_routes/director.message.route.js';
import newsRoute from './_routes/news.route.js';
import companyLocationRoute from './_routes/company.location.route.js';
import blogsRoute from './_routes/blogs.route.js';
import faqRoute from './_routes/faq.route.js';
import ourTeamRoute from './_routes/our.team.route.js';
import testimonialRoute from './_routes/testimonial.route.js';
import serviceRoute from './_routes/service.route.js';
import industryRoute from './_routes/industry.route.js';
import galleryRoute from './_routes/gallery.route.js';
import subCategoryRoute from './_routes/sub.category.route.js';
import rolesRoute from './_routes/roles.route.js';
import bannerRoute from './_routes/banner.route.js';
import tagRoute from './_routes/tag.route.js';
import tagDetailsRoute from './_routes/tag.details.route.js';
import clientPartnershipRoute from './_routes/client.partnership.route.js';
import serviceDetailsRoute from './_routes/service.details.route.js';
import developmentProcessRoute from './_routes/development.process.route.js';
import technologyStackRoute from './_routes/technology.stack.route.js';
import ourClientRoute from './_routes/our.client.route.js'
import faqDetailsRoute from './_routes/faq.details.route.js';
import placeToWorkRoute from './_routes/place.to.work.route.js';
import feedbackRoute from './_routes/feedback.route.js';
import businessRoute from './_routes/business.route.js';
import keyPointRoute from './_routes/key.point.route.js';
import coreValueRoute from './_routes/core.value.route.js';
import visionMissionRoute from './_routes/vision.mission.route.js';
import aboutCompanyRoute from './_routes/about.company.route.js';
import serviceDetailsWhyChooseUsRoute from './_routes/service.details.why.choose.us.route.js';
import serviceDetailsInfoRoute from './_routes/service.info.route.js';
import serviceDetailsInfoProcessRoute from './_routes/service.details.info.process.route.js';
import portfolioRoute from './_routes/portfolio.route.js';
import industryDetailsRoute from './_routes/industry.details.route.js';
import businessDetailsRoute from './_routes/business.details.route.js';
import portfolioDetailsRoute from './_routes/portfolio.details.route.js';
import subServiceRoute from './_routes/sub.service.route.js';
import subSubServiceRoute from './_routes/sub.under.service.route.js';
import subServiceInfoRoute from './_routes/sub.service.info.route.js';
import marketing360Route from './_routes/marketing.360.route.js';
import rightToChoice from './_routes/right.choice.route.js';
import serviceGallery from './_routes/service.gallery.route.js';



mongoose.set('strictQuery', false);
mongoose.connect(dbConfig.dev, {}).then((connected) => {
    console.log('Mongodb connected with success');
}).catch((error) => {
    console.log(error);
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});



const app = express();
app.use(cors());
app.options("*", cors())

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = http.createServer(app);


userRoute(app);
actionRoute(app);
sectionRoute(app);
adminPermissionRoute(app);
categoryRoute(app);
contactUsRoute(app);
departmentRoute(app);
designationRoute(app);
directorMessageRoute(app);
newsRoute(app);
companyLocationRoute(app);
blogsRoute(app);
faqRoute(app);
ourTeamRoute(app);
testimonialRoute(app);
serviceRoute(app);
industryRoute(app);
galleryRoute(app);
subCategoryRoute(app);
rolesRoute(app);
bannerRoute(app);
tagRoute(app);
tagDetailsRoute(app);
clientPartnershipRoute(app);
serviceDetailsRoute(app);
developmentProcessRoute(app);
technologyStackRoute(app);
ourClientRoute(app);
faqDetailsRoute(app);
placeToWorkRoute(app);
feedbackRoute(app);
businessRoute(app);
keyPointRoute(app);
coreValueRoute(app);
visionMissionRoute(app);
aboutCompanyRoute(app);
serviceDetailsWhyChooseUsRoute(app);
serviceDetailsInfoRoute(app);
serviceDetailsInfoProcessRoute(app);
portfolioRoute(app);
industryDetailsRoute(app);
businessDetailsRoute(app);
portfolioDetailsRoute(app);
subServiceRoute(app);
subSubServiceRoute(app);
subServiceInfoRoute(app);
marketing360Route(app);
rightToChoice(app);
serviceGallery(app);




app.get("/", (req, res) => {
    res.status(200).json(`Backend version 1.0.0 working `);
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Backend server listening at ${PORT}`);
});


