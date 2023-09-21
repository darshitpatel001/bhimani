import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Index from "./components/Index";
import Loans from "./components/Loans";
import loan from './assets/images/Loan-heading-bg.jpg'
import Businessloan from "./components/Businessloan";
import Twowheelerloan from "./components/Twowheelerloan";
import Footer from "./containers/Footer";
import heading from './assets/images/two-wheeler-banner.jpg'
import businessheading from './assets/images/business-loan-1.jpg'
import personalheading from './assets/images/personal-loan.jpg'
import studentheading from './assets/images/student-loan.jpg'
import carheading from './assets/images/car-loan-1.jpg'
import goldheading from './assets/images/gold-loan.jpg'
import commercialheading from './assets/images/commercial-loan.jpg'
import interest from './assets/images/interestrate.png'
import Financing from './assets/images/100%.png'
import Quick from './assets/images/quickdisbursals.png'
import Minimal from './assets/images/minmaldocumentation.png'
import Presence from './assets/images/ourpresence.png'
import Hassle from './assets/images/hassslefree.png'
import business1 from './assets/images/business-1.png'
import business2 from './assets/images/business-2.png'
import business3 from './assets/images/business-3.png'
import business4 from './assets/images/business-4.png'
import business5 from './assets/images/business-5.png'
import business6 from './assets/images/business-6.png'
import Personalloan from "./components/Personalloan";
import personal1 from './assets/images/personal-1.png'
import personal2 from './assets/images/personal-2.png'
import personal3 from './assets/images/personal-3.png'
import personal4 from './assets/images/personal-4.png'
import personal5 from './assets/images/personal-5.png'
import personal6 from './assets/images/personal-6.png'
import Studentloan from './components/Studentloan'
import student1 from './assets/images/student-1.png'
import student2 from './assets/images/student-2.png'
import student3 from './assets/images/student-3.png'
import student4 from './assets/images/student-4.png'
import student5 from './assets/images/student-5.png'
import student6 from './assets/images/student-6.png'
import Carloan from "./components/Carloan";
import car1 from './assets/images/car-1.png'
import car2 from './assets/images/car-2.png'
import car3 from './assets/images/car-3.png'
import car4 from './assets/images/car-4.png'
import car5 from './assets/images/car-5.png'
import car6 from './assets/images/car-6.png'
import Goldloan from "./components/Goldloan";
import gold1 from './assets/images/gold-1.png'
import gold2 from './assets/images/gold-2.png'
import gold3 from './assets/images/gold-3.png'
import gold4 from './assets/images/gold-4.png'
import gold5 from './assets/images/gold-5.png'
import gold6 from './assets/images/gold-6.png'
import CommercialLoan from "./components/CommercialLoan";
import commercial1 from './assets/images/commercial-1.png'
import commercial2 from './assets/images/commercial-2.png'
import commercial3 from './assets/images/commercial-3.png'
import commercial4 from './assets/images/commercial-4.png'
import commercial5 from './assets/images/commercial-5.png'
import commercial6 from './assets/images/commercial-6.png'
import Healthinsurance from "./components/Healthinsurance";
import Healthinsurancebg from './assets/images/health-insurance-heading-bg.jpg'
import Healthinsuranceimg from "./assets/images/health-insurance-img.png"
import Carinsurancebg from './assets/images/car-insurance-heading-bg.jpg'
import Carinsuranceimg from "./assets/images/car-insurance-img.png"
import Carinsurance from "./components/Carinsurance";
import Bikeinsurance from "./components/Bikeinsurance";
import Bikeinsurancebg from './assets/images/bike-insurance-heading-bg.jpg'
import Bikeinsuranceimg from "./assets/images/bike-insurance-img.png"
import Lifeinsurance from "./components/Bikeinsurance";
import Lifeinsurancebg from './assets/images/life-insurance-heading-bg.jpg'
import Lifeinsuranceimg from "./assets/images/life-insurance-img.png"
import Fireinsurance from "./components/Fireinsurance";
import Fireinsurancebg from './assets/images/fire-insurance-heading-bg.jpg'
import Fireinsuranceimg from "./assets/images/fire-insurance-img.png"
import Incometax from "./components/Incometax";
import Incometaxbg from './assets/images/incometax-heading-bg.jpg'
import Incometaximg from "./assets/images/income-tax-img.png"
import Pancard from "./components/Pancard";
import Pancardbg from './assets/images/pan-card-bg.jpg'
import Pancardimg from "./assets/images/pan-card-img.png"
import Mysy from "./components/Mysy";
import Mysybg from './assets/images/mysy-heading-bg.jpg'
import Mysyimg from "./assets/images/mysy-img.png"
import Rte from "./components/Rte";
import Rtebg from './assets/images/rte-heading-bg.jpg'
import Rteimg from "./assets/images/rte-img.png"
import Admission from "./components/Admission";
import Admissionbg from './assets/images/Admission-heading-bg.jpg'
import Admissionimg from "./assets/images/Admission-img.png"
import Kuvarbai from "./components/Kuvarbai";
import Kuvarbaibg from './assets/images/kuvarbai-heading-bg.jpg'
import Kuvarbaiimg from "./assets/images/kuvarbai-img.png"
import Vahlidikri from "./components/Vahlidikri";
import Vahlidikribg from './assets/images/vahlidikri-heading-bg.jpg'
import Vahlidikriimg from "./assets/images/vahlidikri-img.png"
import Vidhvasahay from "./components/Vidhvasahay";
import Vidhvasahaybg from './assets/images/vidhva-heading-bg.jpg'
import Vidhvasahayimg from "./assets/images/vidhva-img.png"
import Atalpansion from "./components/Atalpansion";
import Atalpensionbg from './assets/images/atal-pension-heading-bg.jpg'
import Atalpensionimg from "./assets/images/atal-pension-img.png"
import Sukanyasamriddhi from "./components/Sukanyasamriddhi";
import Sukanyasamriddhibg from './assets/images/sukanya-heading-bg.jpg'
import Sukanyasamriddhiimg from "./assets/images/sukanya-img.png"
import Divyanglagn from "./components/Divyanglagn";
import Divyanglagnbg from './assets/images/divyang-lagan-heading-bg.jpg'
import Divyanglagnimg from "./assets/images/divyang-lagan-img.png"
import Jawaharnavodaya from "./components/Jawaharnavodaya";
import Jawaharnavodayabg from './assets/images/jawahar-navodaya-heading-bg.jpg'
import Jawaharnavodayaimg from "./assets/images/jawahar-navodaya-img.png"
import Manavgarima from "./components/Manavgarima";
import Manavgarimabg from './assets/images/manav-garima-heading-bg.jpg'
import Manavgarimaimg from "./assets/images/manav-garima-img.png"
import Ntse from "./components/Ntes";
import Ntsebg from './assets/images/ntse-heading-bg.jpg'
import Ntseimg from "./assets/images/ntse-img.png"
import Digitalgujarat from "./components/Digitalgujarat ";
import Digitalgujaratbg from './assets/images/digital-gujarat-heading-bg.jpg'
import Digitalgujaratimg from "./assets/images/digital-gujarat-img.png"
import Tuitioncoaching from "./components/Tuitioncoaching";
import Tuitioncoachingbg from './assets/images/tuition-coaching-heading-bg.jpg'
import Tuitioncoachingimg from "./assets/images/tuition-coaching-img.png"
import Nsp from "./components/Nsp";
import Nspbg from './assets/images/nsp-heading-bg.jpg'
import Nspimg from "./assets/images/nsp-img.png"
import Taxconsultant from "./components/Taxconsultant";
import Taxconsultantbg from './assets/images/tax-consultant-heading-bg.jpg'
import Gstreturn from "./components/Gstreturn";
import Gstreturnbg from './assets/images/gst-return-heading-bg.jpg'
import Subsidy from "./components/Subsidy";
import Subsidybg from './assets/images/subsidy-heading-bg.jpg'
import Insurance from "./components/Insurance";
import Insurancebg from './assets/images/insurance-heading-bg.jpg'
import Testimonials from "./components/Testimonials";
import Testimonialsbg from "./assets/images/testimonials-heading-bg.jpg";
import Contect from "./components/Contect";
import Contactbg from "./assets/images/contact-heading-bg.jpg";
import Allform from "./components/Allform";
import Appointmentform from "./components/Appointmentform";
import Consultantform from "./components/Consultantform";

function App() {

  /* Loan page start */
  const Loan = { imgurl: loan, heading: "Getting a two-wheeler loan" };

   /* Loan page start */

  /* TwoWheeler Loan content start */
  const twoWheelerLoanBanner = { imgurl: heading, heading: "Getting a two-wheeler loan" };
  const twoWheelerLoanSection = { mainHeading: "Two-Wheeler Loan", description: "Getting a Two-Wheeler Loan is quick and convenient. Get low interest rates, flexible EMI tenures and easy repayment options", heading: "Features & Benefits", featureBoxContent: [{ featureImg: interest, featureHeading: "Interest Rate", featureDescription: "Our interest rates starts from 11.5% p.a.*" }, { featureImg: Financing, featureHeading: "Up to 100% Financing", featureDescription: "Up to 100% financing on the on-road price of the bike of your choice" }, { featureImg: Quick, featureHeading: "Quick Disbursals", featureDescription: "Get your loan amount as quick as 24 hours" }, { featureImg: Minimal, featureHeading: "Minimal Documentation", featureDescription: "Save time with minimal documentation and get your loan without any hassles" }, { featureImg: Presence, featureHeading: "Our Presence", featureDescription: "Over 2800 branches to serve customers across the country" }, { featureImg: Hassle, featureHeading: "Hassle-free Purchase", featureDescription: "Experience hassle-free purchase as you ride the bike from the nearest showroom" }] }
  const twoWheelerLoanInquiry = { mainHeading: "Two Wheeler Loan Inquiry", inquiry: [{ title: "Purpose :", description: "For purchase of new and old two wheeler vehicle not more than 3 years old from manufacturing date." }, { title: "Maximum amount :", description: "80% of Cost of new vehicle inclusive of registration and Insurance charges or applied Amount. In case of resale vehicle, 50% of Valuation price or 75% agreement value which over is low." }, { title: "Eligibility :", description: "Salaried Person-Employee of reputed organization with confirmed service/Business man- Sole Proprietor/Partnership Firm/Pvt. Ltd/Public Ltd. Company/Professional/Se lf Employed person/Partner/Director etc." }, { title: "Margin :", description: "20% to 50%." }, { title: "Period :", description: "Maximum 60 months in case of new Vehicle and 36 months to old Vehicle." }, { title: "Guarantors :", description: "Minimum two sureties maximum depends on merit of proposal" }, { title: "Security :", description: "Hypothecation of concerned two wheeler" }, { title: "Interest Rate :", description: "As per Bank Policy." }, { title: "Documents Required :", description: "Self certified KYC documents, Existing Bankers Statement for last one year Original Pay slips for last consecutive three months/Salary Certificate, form No-16 And/or IT Returns with computation of income and Financial statements for last three consecutive years. In case of Businessman/Self employed/Proprietor/Partner/ Director/Professional IT Returns are compulsory along with other necessary documents roforma Invoice of authorized dealer/Vehicle Purchase letter or agreement in case of old vehicle, Margin Money paid receipts and any other documents required on case to case basis." }], btnName: "Apply Now For Bike Loan" }
  /* TwoWheeler Loan content end */

  /* Business Loan content start */
  const businessLoanBanner = { imgurl: businessheading, heading: "Meet all your  business needs with Business Loans" };
  const businessLoanSection = { mainHeading: "Business Loan", description: "With competitive interest rates and easy repayment options, getting a business loan from Bhimani Advisors  is hassle-free and convenient. Whether you are a small business or an established organisation, our online application makes it simple to get the funding you need quickly.", heading: "Business loan Features & Benefits", featureBoxContent: [{ featureImg: business1, featureHeading: "Loan up to ₹30 Lakhs", featureDescription: "Manage all your business expenses with loan amount ranging up to ₹30 Lakhs." }, { featureImg: business2, featureHeading: "No Collateral Needed", featureDescription: "Get financial support you need without the stress of collateral." }, { featureImg: business3, featureHeading: "Flexible Loan Tenure", featureDescription: "Choose from a range of flexible tenure options starting from 12 to 60 months." }, { featureImg: business4, featureHeading: "Quick Loan & Disbursals", featureDescription: "Save time with minimal documentation and get your loan without any hassles" }, { featureImg: business5, featureHeading: "Hassle-free Online Process", featureDescription: "Get your loan approved online in a few simple hassle-free steps." }, { featureImg: business6, featureHeading: "Online EMI Calculator", featureDescription: "With our easy-to-use online EMI Calculator, calculate monthly accurately." }] }
  const businessLoanInquiry = { mainHeading: "Business loan  Inquiry", inquiry: [{ title: "Purpose :", description: "Overdraft Against Salary" }, { title: "Age :", description: "Min- 21 years & Max 58/60 yrs at the time of expiry of Overdraft." }, { title: "Eligibility : ", description: "The Proposed customer who are employees of Pvt. Ltd./ Public Ltd./ Govt. Corporation/ Dept./ Registered Education institutes are eligible for Over Draft against salary, In case of new customer whose last 3 consecutive months salary are credited to saving account in our bank are eligible for this facility. The existing customers/ Account holders whose salary are crediting in our bank are eligible for this facility.He must have own residence." }, { title: "Tenure :", description: "Maximum 15 Months. Account will be renewed after 12/15 months with reference to the satisfactory transactions made in the account. The General period for all accounts in overdraft against salary will be May to April." }, { title: "Reason : ", description: "Any personal Valid reason" }, { title: "Limit :", description: "90% of the average net salary for last 3 consecutive. This amount is made available in Customers Salary Account. Customer can withdraw it through the regular modes i.e. ATM, Cheques, online transfers." }, { title: "Documents Required :", description: "As per Bank Policy." }, { title: "Documents Required :", description: "1)Application form duly signed with photographs affixed  2)Bank Statement - Past 1 Year 3)Income and tax proofs 4)Age proof 5)Residence proof 6)KYC Documents" }, { title: "Membership :", description: "As per Bank Policy." }, { title: "Guarantee :", description: "One surety should be taken. If spouse is employed person, then He/ She may be taken as surety" }, { title: "Pre closure Charges :", description: "Repay the loan at any time without having to pay a pre closure fee." }] , btnName: "Apply now for businness loan"}
  /* Business Loan content end */

  /* Personal Loan content start */
  const personalLoanBanner = { imgurl: personalheading, heading: "every personal need of yours" };
  const personalLoanSection = { mainHeading: "Get Personal Loan Online Up to Rs.15 Lakhs", description: "Personal Loans from Bhimani Advisors Finance can help you meet your financial goals. Whether you are planning a vacation, home renovation, medical emergency or wedding expenses, we provide personal loans up to ₹15 lakhs. Key features include minimal documentation, flexible repayment options and competitive interest rates.", heading: "Personal loan Features & Benefits", featureBoxContent: [{ featureImg: personal1, featureHeading: "Collateral-free Loans", featureDescription: "Get loans without collateral security up to ₹15,00,000/-" }, { featureImg: personal2, featureHeading: "Quick Disbursals", featureDescription: "Pre-approved personal loans are processed and credited within 72 hours" }, { featureImg: personal3, featureHeading: "Flexible Repayments", featureDescription: "Choose from a range of flexible tenure options starting from 12 to 60 months." }, { featureImg: personal4, featureHeading: "Competitive Interest Rates", featureDescription: "Customised interest rates starting from 12% p.a.* on your personal loan" }, { featureImg: personal5, featureHeading: "Seamless experience", featureDescription: "Enjoy a fully digital completely paperless borrowing experience that is fast" }, { featureImg: personal6, featureHeading: "Regular Reminders", featureDescription: "Receive periodical alerts on your register mobile and email ID about your EMI " }] }
  const personalLoanInquiry = { mainHeading: "Personal loan Inquiry", inquiry: [{ title: "Purpose :", description: "For Consumption, Housing Repairs, Renovations, Medical Expenses, Marriage, Ceremonial Expenses, Repayment of Debts, Other Reasons/Purposes acceptable to Bank etc." }, { title: "Maximum amount :", description: "Rs 500000/-" }, { title: "Eligibility : ", description: "Salaried Person-Employee of reputed organization with confirmed service/ Businessman/ Professional/Self Employed person." }, { title: "Margin : ", description: "As per bank policy subject to reason of loan." }, { title: "Period : ", description: "Maximum 84 months subject to recovery U/S 49 OF MCS Act-1960" }, { title: "Security :", description: "Depends on merit of proposal" }, { title: "Service Charges :", description: "Minimum two sureties maximum depends on merit of proposal" }, { title: "Interest Rate :", description: "As per Bank Policy." }, { title: "Documents Required :", description: "Self certified KYC documents, Existing Bankers Statement for last one year Original Pay slips for last consecutive three months/Salary Certificate, form No-16 And/or IT Returns with computation of income and Financial statements for last Consecutive three years. In case of Businessman/Self employed/Proprietor/Partner/ Director/Professional IT Returns are compulsory along with other necessary documents." }] , btnName: "Apply now for Personal loan"}
  /* Personal Loan content end */

  /* Student Loan content start */
  const studentLoanBanner = { imgurl: studentheading, heading: "Build A Strong Foundation With Avanse Education Institution Loan!" };
  const studentLoanSection = { mainHeading: "Student Education Institution Loan!", description: "Get a line of credit without collateral at competitive rates. Achieve your business goals by funding your short-term business cash needs with 24*7 withdrawals.", heading: "Working Capital loan Features & Benefits", featureBoxContent: [{ featureImg: student1, featureHeading: "Rely low rates and high limits", featureDescription: "Get loans to buy used and new commercial vehicles" }, { featureImg: student2, featureHeading: "Loans that fit your life", featureDescription: "Get customised interest rates starting from 12% p.a.*" }, { featureImg: student3, featureHeading: "Benefits that go beyond funding", featureDescription: "Flexible repayment tenure up to 60 months" }, { featureImg: student4, featureHeading: "Skill Loan", featureDescription: "With our simple online application process, you can apply in just a few clicks." }, { featureImg: student5, featureHeading: "Takeover of Education", featureDescription: "Minimal paperwork, digital process, and hassle-free" }, { featureImg: student6, featureHeading: "Repayment", featureDescription: "Enjoy the convenience of financing your second-hand car with fast approvals." }] }
  const studentLoanInquiry = { mainHeading: "Student Loan Features & Benefits", inquiry: [{ title: "Purpose :", description: "For Consumption, Housing Repairs, Renovations, Medical Expenses, Marriage, Ceremonial Expenses, Repayment of Debts, Other Reasons/Purposes acceptable to Bank etc." }, { title: "Maximum amount :", description: "Rs 500000/-" }, { title: "Eligibility :", description: "Salaried Person-Employee of reputed organization with confirmed service/ Businessman/ Professional/Self Employed person." }, { title: "Margin :", description: "As per bank policy subject to reason of loan." }, { title: "Period :", description: "Maximum 84 months subject to recovery U/S 49 OF MCS Act-1960" }, { title: "Guarantors :", description: "Minimum two sureties maximum depends on merit of proposal" }, { title: "Security :", description: "Depends on merit of proposal" }, { title: "Service Charges :", description: "Minimum two sureties maximum depends on merit of proposal" }, { title: "Interest Rate :", description: "As per Bank Policy." }, { title: "Documents Required :", description: "Self certified KYC documents, Existing Bankers Statement for last one year Original Pay slips for last consecutive three months/Salary Certificate, form No-16 And/or IT Returns with computation of income and Financial statements for last Consecutive three years. In case of Businessman/Self employed/Proprietor/Partner/ Director/Professional IT Returns are compulsory along with other necessary documents." }] , btnName: "Apply now for Student loan"}
  /* Student Loan content end */

  /* Car Loan content start */
  const carLoanBanner = { imgurl: carheading, heading: "Choose your car, choose your loan" };
  const carLoanSection = { mainHeading: "Used Car Loan  ", description: "Bhimani Advisors Finance recognises the significance of purchasing a car and provides adaptable and convenient financing options for individuals interested in buying a used car. With our easy and flexible Used Car Loan options, you can be assured that your car purchasing process will be simple and hassle-free. ", heading: "Working Capital loan Features & Benefits", featureBoxContent: [{ featureImg: car1, featureHeading: "Competitive Interest Rates", featureDescription: "Competitive interest rates on used car loans start at 13%* p.a." }, { featureImg: car2, featureHeading: "Flexible Repayments", featureDescription: "Flexible and convenient repayment tenure of up to 48 months." }, { featureImg: car3, featureHeading: "Up to 85% financing Car’s Value", featureDescription: "Get up to 85% financing on a Pre-Owned Car based on eligibility." }, { featureImg: car4, featureHeading: "Easy to Apply", featureDescription: "With our simple online application process, you can apply in just a few clicks." }, { featureImg: car5, featureHeading: "Minimal Documentation ", featureDescription: "Minimal paperwork, digital process, and hassle-free" }, { featureImg: car6, featureHeading: "Quick Approvals & Disbursals", featureDescription: "Enjoy the convenience of financing your second-hand car with fast approvals." }] }
  const carLoanInquiry = { mainHeading: "Car loan  Inquiry", inquiry: [{ title: "Purpose :", description: "Overdraft Against Salary" }, { title: "Age :", description: "Min- 21 years & Max 58/60 yrs at the time of expiry of Overdraft." }, { title: "Eligibility :", description: "The Proposed customer who are employees of Pvt. Ltd./ Public Ltd./ Govt. Corporation/ Dept./ Registered Education institutes are eligible for Over Draft against salary, In case of new customer whose last 3 consecutive months salary are credited to saving account in our bank are eligible for this facility. The existing customers/ Account holders whose salary are crediting in our bank are eligible for this facility.He must have own residence." }, { title: "Tenure :", description: "Maximum 15 Months. Account will be renewed after 12/15 months with reference to the satisfactory transactions made in the account. The General period for all accounts in overdraft against salary will be May to April." }, { title: "Reason : ", description: "Any personal Valid reason" }, { title: "Limit :", description: "90% of the average net salary for last 3 consecutive. This amount is made available in Customers Salary Account. Customer can withdraw it through the regular modes i.e. ATM, Cheques, online transfers." }, { title: "Documents Required :", description: "1)Application form duly signed with photographs affixed 2)Bank Statement - Past 1 Year 3)Income and tax proofs 4)Age proof 5)Residence proof 6)KYC Documents" }, { title: "Membership :", description: "As per Bank Policy." }, { title: "Guarantee :", description: "One surety should be taken. If spouse is employed person, then He/ She may be taken as surety" }, { title: "Pre closure Charges :", description: "Repay the loan at any time without having to pay a pre closure fee." }] , btnName: "Apply now for Car loan"}
  /* Car Loan content emd */

  /* Gold Loan content start */
  const goldLoanBanner = { imgurl: goldheading, heading: "Quick Money for Gold" };
  const goldLoanSection = { mainHeading: "Gold Loan", description: "Bhimani Advisors Finance offers up to 75% of the loan amount against your gold. Trust us to provide you with the best value for your gold. Get quick access to cash with our gold loan services.", heading: "Gold Loan Features and Benefits", featureBoxContent: [{ featureImg: gold1, featureHeading: "Maximum Finance", featureDescription: "Loan up to 75% of your gold value" }, { featureImg: gold2, featureHeading: "Low Rate of Interest", featureDescription: "Our interest rate starts from 11.4% p.a.*" }, { featureImg: gold3, featureHeading: "Flexible Tenure", featureDescription: "Choose from a range of flexible tenure options starting from 1 to 12 months" }, { featureImg: gold4, featureHeading: "Minimal Documentation", featureDescription: "Minimal paperwork, digital process, and hassle-free" }, { featureImg: gold5, featureHeading: "Safe & Secure", featureDescription: "We ensure that your gold is safe & secure" }, { featureImg: gold6, featureHeading: "Quick Disbursal", featureDescription: "Reliable and faster loan approvals with minimal documentation" }] }
  const goldLoanInquiry = { mainHeading: "Gold Loan Inquiry ", inquiry: [{ title: "Purpose :", description: "For personal financial need not for speculative purpose." }, { title: "Maximum amount :", description: "2 lakh for Gold Bullet Loan and Rs 50 Lakh for regular Gold Loan." }, { title: "Eligibility :", description: "Salaried Person-Employee of reputed organization with confirmed service/Businessman- Sole Proprietor/Professional/Self employed person etc." }, { title: "Margin : ", description: "15% to 20% of Valuation" }, { title: "Period : ", description: "Maximum 36 months . For Gold Bullet Loan :-Up to 12 Months" }, { title: "Security :", description: "Hypothecation of concerned two wheeler" }, { title: "Service Charges :", description: "Are applicable from time to time." }, { title: "Interest Rate :", description: "As per Bank Policy." }, { title: "Documents Required :", description: "Self certified KYC documents, Existing Bankers Statement for last one year, Original Pay slips for last consecutive three months/Salary Certificate, form No-16 And/or IT Returns with computation of income and Financial statements for last three consecutive years. In case of Businessman/Self employed/Proprietor/ Professional IT Returns are compulsory along with other necessary documents. Declaration about ownership of Gold Ornaments." }] , btnName: "Apply now for Gold loan"}
  /* Gold Loan content end */

  /* Commercial content start */
  const commercialLoanBanner = { imgurl: commercialheading, heading: "Grow your business with Commercial Goods Vehicle Finance " };
  const commercialLoanSection = { mainHeading: "Commercial Goods Vehicle Finance", description: "Bhimani Advisors offers customisation and a personal approach to financing your business if you consider entering the transport industry or expanding your fleet. Bhimani Advisorscan help you avail a loan for a new and a used Commercial Vehicle quickly and easily with the lowest interest rates", heading: "Personal loan Features & Benefits", featureBoxContent: [{ featureImg: commercial1, featureHeading: "Finance for Used Vehicles", featureDescription: "Get loans to buy used and new commercial vehicles" }, { featureImg: commercial2, featureHeading: "Competitive Interest Rates", featureDescription: "Get customised interest rates starting from 12% p.a.*" }, { featureImg: commercial3, featureHeading: "Flexible Repayment", featureDescription: "Flexible repayment tenure up to 60 months" }, { featureImg: commercial4, featureHeading: "Quick Disbursals", featureDescription: "Reliable and fast loan approval with minimal documentation" }, { featureImg: commercial5, featureHeading: "Finance up to 90%", featureDescription: "Get Loans up to 90% of the value of the vehicle" }, { featureImg: commercial6, featureHeading: "Regular Reminders", featureDescription: "Receive alerts on your registered mobile number and email ID about your EMI." }] }
  const commercialLoanInquiry = { mainHeading: "Commercial loan Features & Benefits", inquiry: [{ title: "Purpose :", description: "For Consumption, Housing Repairs, Renovations, Medical Expenses, Marriage, Ceremonial Expenses, Repayment of Debts, Other Reasons/Purposes acceptable to Bank etc." }, { title: "Maximum amount :", description: "Rs 500000/-" }, { title: "Eligibility :", description: "Salaried Person-Employee of reputed organization with confirmed service/ Businessman/ Professional/Self Employed person." }, { title: "Margin : ", description: "As per bank policy subject to reason of loan." }, { title: "Period : ", description: "Maximum 84 months subject to recovery U/S 49 OF MCS Act-1960" }, { title: "Security :", description: "Depends on merit of proposal" }, { title: "Service Charges :", description: "Minimum two sureties maximum depends on merit of proposal" }, { title: "Interest Rate :", description: "As per Bank Policy." }, { title: "Documents Required :", description: "SSelf certified KYC documents, Existing Bankers Statement for last one year Original Pay slips for last consecutive three months/Salary Certificate, form No-16 And/or IT Returns with computation of income and Financial statements for last Consecutive three years. In case of Businessman/Self employed/Proprietor/Partner/ Director/Professional IT Returns are compulsory along with other necessary documents." }], btnName: "Apply now for Commercial loan" }
  /* Commercial Loan content end */

  /* Health Insurance content start */
  const HealthInsuranceBanner = { imgurl: Healthinsurancebg, heading: "Buy Health Insurance Plans Online" };
  const HealthInsuranceContent = { imgurl: Healthinsuranceimg, heading: "Health Insurance", description: [{ descriptionlist: "Health insurance takes care of your medical expenses and insurance that out-of-pocket expenses are reduced up to the sum insured. Anybody who has a health insurance policy will tell you that buying one is one of the smartest financial decisions by any earning individual. Now that you have decided to buy a health insurance policy, you need to know how to select a good health insurance plan that will take care of all your needs. Here is a list of benefits a good health insurance plan should offer you:" }], subheading: "Benefits:", list: [{ listcontent: "Protection against a large number of critical illnesses" }, { listcontent: "Flexibility to choose your health cover." }, { listcontent: "No increase in premiums during the policy term even if your health condition changes" }, { listcontent: "Long policy term that covers you even in your old age" }, { listcontent: "Large hospital network for easy access to medical treatment" }] }
  /* Health Insurance content end */

  /* Car Insurance content start */
  const CarInsuranceBanner = { imgurl: Carinsurancebg, heading: "Car insurance provides financial protection to policyholders against accidents, theft, total loss" };
  const CarInsuranceContent = { imgurl: Carinsuranceimg, heading: "Car Insurance", description: [{ descriptionlist: "Group insurance is a type of insurance plan that covers a number of people in the same contract. Such a plan provides the same level of insurance coverage to all members of a group irrespective of their age, gender, occupation or socio-economic status." }], subheading: "Benefits:", list: [{ listcontent: "In case your vehicle is damaged due to an accident, fire, or self-ignition, you are protected. Furthermore, if the car suffers losses due to burglary or theft, strikes, riots, or terrorism, your insurance policy covers these. Another benefit of car insurance is that it covers loss or damage while in transit by rail, inland waterways, air, road, or lift." }, { listcontent: "Another advantage of car insurance is that it offers personal accident cover for a pre-determined amount. Personal Accident cover provides protection against permanent total disability, Death due to an accident. Furthermore, this cover can be taken for other passengers on unnamed basis (maximum as per the vehicle’s seating capacity) for a pre-determined amount under the car insurance policy." }] }
  /* Car Insurance content end */

  /* bike Insurance content start */
  const bikeInsuranceBanner = { imgurl: Bikeinsurancebg, heading: "Benefits of having a bike insurance" };
  const bikeInsuranceContent = { imgurl: Bikeinsuranceimg, heading: "Bike Insurance", description: [{ descriptionlist: "When you renew your two-wheeler insurance coverage when it expires, you will be following the law of the country. You will avoid fines and be protected under your insurance policy. Riding a bike without a legal two-wheeler insurance coverage might result in a fine or even incarceration. Your two-wheeler policy will become inactive after it has expired. As a result, quick two-wheeler insurance online replacement after finishing is critical." }], subheading: "Benefits:", list: [{ listcontent: "Anything can happen while riding a two wheeler / motorcycle, scooter, or moped. The lack of good roads, the morning and evening rush hours and free traffic problems are a part of life today. Moreover, examples of rainfall or heat waves may cause many problems on the road, such as slippery surfaces, mushy or cloudy areas, or sticky tar. These situations may cause damages to the two wheeler vehicle and even injure the riders. To stay protected from all such incidents, it is important to have a valid two wheeler insurance. The motor protection laws in India protect millions of bike owners from expenses that may arise due to third-party damages by making third party bike insurance cover mandatory." }] }
  /* bike Insurance content end */

  /* life Insurance content start */
  const lifeInsuranceBanner = { imgurl: Lifeinsurancebg, heading: "Yes, life insurance is a worthy purchase." };
  const lifeInsuranceContent = { imgurl: Lifeinsuranceimg, heading: "Life Insurance", description: [{ descriptionlist: "Life insurance is a contract between an insurer and a policy owner. A life insurance policy guarantees the insurer pays a sum of money to named beneficiaries when the insured dies in exchange for the premiums paid by the policyholder during their lifetime." }, { descriptionlist: "For the contract to be enforceable, the life insurance application must accurately disclose the insured’s past and current health conditions and high-risk activities." }], subheading: "Benefits:", list: [{ listcontent: "There are many benefits to having life insurance. Below are some of the most important features and protections offered by life insurance policies." }, { listcontent: "Most people use life insurance to provide money to beneficiaries who would suffer a financial hardship upon the insured’s death. However, for wealthy individuals, the tax advantages of life insurance, including the tax-deferred growth of cash value, tax-free dividends, and tax-free death benefits, can provide additional strategic opportunities." }] }
  /* life Insurance content end */

  /* fire Insurance content start */
  const fireInsuranceBanner = { imgurl: Fireinsurancebg, heading: "You can also purchase fire insurance as a stand-alone policy." };
  const fireInsuranceContent = { imgurl: Fireinsuranceimg, heading: "Fire Insurance", description: [{ descriptionlist: "Fire insurance is a legal contract between an insurance company and the policyholder which guarantees that any loss or damages caused to the policyholder's property in a fire will be paid by the insurance company. Fire insurance provides coverage against incidents of accidental fire, lightning, explosion, etc." }], subheading: "Benefits:", list: [{ listcontent: "Fire insurance has been designed to reimburse the cost of repair, reconstruction or replacement of the property damaged or destroyed in a fire. Besides, fire insurance also covers property loss or damages due to smoke, water and damages caused by the firefighters." }, { listcontent: "There are three plans under Fire and burglary insurance according to the required sum insured amount of the customer." }, { listcontent: "For sum insured amount more than Rs 50 Crores: Standard Fire Special Peril (SFSP)." }, { listcontent: "Plant and machinery, stock of goods and other assets related to the business are also covered under property insurance." }] }
  /* fire Insurance content end */

  /* Income-tax content start */
  const incometaxBanner = { imgurl: Incometaxbg, heading: "Payment of application fee can be made through credit/debit card" };
  const incometaxContent = { imgurl: Incometaximg, heading: "Income Tax Return [ ITR ]", description: [{ descriptionlist: "Income Tax Return is the form in which assessee files information about his/her Income and tax thereon to Income Tax Department. Various forms are ITR 1, ITR 2, ITR 3, ITR 4, ITR 5, ITR 6 and ITR 7. When you file a belated return, you are not allowed to carry forward certain losses.." }, { descriptionlist: "For professionals and others, who don't get regular salary, Income Tax Returns (ITRs) are used as income proof for various purposes. Instead of ITR-V, the Income Tax Return Acknowledgement may only be used henceforth as a proof of filing the return of income." }], subheading: "REQUIREMENT OF DOCUMENT:", list: [{ listcontent: "Aadhar card" }, { listcontent: "Pan card" }, { listcontent: "Bank passbook" }, { listcontent: "Statement of current account(if any)" }, { listcontent: "Loan Account Statement and Certificate of Interest if any (if any)" }, { listcontent: "Property purchase - a sales document or bill(if any)" }, { listcontent: "Form no.16 or salary certificate" }, { listcontent: "Bills of farm income" }, { listcontent: "Receipt of insurance(if any)" }, { listcontent: "Receipt of payment of children's school fees(if any)" }, { listcontent: "Bill of purchase ,sales and costs(if any)" }, { listcontent: "Stock market administration bill(if any)" }, { listcontent: "Details if any new investment / bank fix deposit has been made" }] }
  /* Income-tax content end */

  /* pan-card start */
  const pancardBanner = { imgurl: Pancardbg, heading: "Payment of application fee can be made through credit/debit card" };
  const pancardContent = { imgurl: Pancardimg, heading: "PAN Card", description: [{ descriptionlist: "PAN stands for Permanent Account Number and is a 10-digit alphanumeric code used for unique identification. The Income Tax department is responsible for providing this number to every potential taxpayer to curb tax evasion." }, { descriptionlist: "This is made possible since PAN is an electronic system that tracks the financial transactions of every tax paying citizen. Here two individuals cannot have the same number. This unique identification number is allotted to every individual via a laminated card called the PAN card." }, { descriptionlist: "The downloading of e-PAN card is provided free of cost only if the e-PAN card was issued within last one month's time on fresh PAN application or change/correction request." }, { descriptionlist: "A permanent account number (PAN) is a ten-character alphanumeric identifier Foundational ID, issued in the form of a laminated PAN card, by the Indian ..." }], subheading: "REQUIREMENT OF DOCUMENT:", list: [{ listcontent: "Adhar card (with DOB)" }, { listcontent: "Passport size photo" }] }
  /* pan-card content end */

  /* Mysy start */
  const mysyBanner = { imgurl: Mysybg, heading: "Mukhymantri Yuva Swavalamban Yojana or MYSY Scholarship" };
  const mysyContent = { imgurl: Mysyimg, heading: "MYSY", description: [{ descriptionlist: "MukhymantriYuvaSwavalambanYojana or MYSY Scholarship is a scholarship scheme that is offered to the economically weaker section students of Gujarat. All those students who wish to pursue higher education like diploma courses, engineering, pharmacy course, medical course, etc apply for MYSY scholarship every year." }], subheading: "Requirement of document", list: [{ listcontent: "Aadhar card of student, father and mother" }, { listcontent: "Standard - 10 and 12 mark sheet" }, { listcontent: "Degree / Diploma Admission Letter" }, { listcontent: "Self-declaration" }, { listcontent: "Income certificate of parents" }, { listcontent: "Ration card" }, { listcontent: "Certificate on the letterhead of the college" }, { listcontent: "Fee structure" }, { listcontent: "Receipt of payment of tuition fee" }, { listcontent: "Student's bank passbook (with IFSC code)" }, { listcontent: "Hostel Admission and Meal Receipt (if any)" }, { listcontent: "IT Return Form (If any, PDF file should be obtained from CA)" }, { listcontent: "IT Return - Acknowledgment (if any) PDF file should be obtained from CA." }, { listcontent: "Passport photo of student" }, { listcontent: "Father's PAN Card (if any)" }, { listcontent: "Non-IT Form (If Income Tax is not paid then this form should be Xeroxed with Sign the guardian)" },] }
  /* Mysy end */

  /* NTSE start */
  const ntseBanner = { imgurl: Ntsebg, heading: "NTSE exam is the National level scholarship program by Govt. of India and most venerated exam of India." };
  const ntseContent = { imgurl: Ntseimg, heading: "National Talent Search Exam (NTSE)", description: [{ descriptionlist: "National Talent Search Exam (NTSE), initially known as NSTSS (National Science Talent Search Scheme), is a scholarship examination that takes place on a national level to identify and enhance the skills, logical reasoning, and mental-ability of students." }], subheading: "Requirement of document", list: [{ listcontent: "Mark sheet of standard-9" }, { listcontent: "Income certificate" }, { listcontent: "Caste certificate" }, { listcontent: "Non-Claire Certificate (mandatory for SEBC)" }, { listcontent: "EWS Certificate" }, { listcontent: "Passport size photo" }, { listcontent: "Student Aadhaar card" }, { listcontent: "DISE number of the school" }, { listcontent: "ATM card for online fees" }, { listcontent: "Ration card" }, { listcontent: "Mobile number and email id" }] }
  /* NTSE end */

  /* digital gujarat start */
  const digitalgujaratBanner = { imgurl: Digitalgujaratbg, heading: "Digital Gujarat scholarship is an initiative of the Government of Gujarat." };
  const digitalgujaratContent = { imgurl: Digitalgujaratimg, heading: "Digital Gujarat Scholarship ", description: [{ descriptionlist: "The government of Gujarat and its subsidiary departments aims at empowering the students through education by providing the different scholarship schemes under the Digital Gujarat Scholarship to the various students belonging to economically weaker and underprivileged sections of the society who are not able to pursue their studies due to financial constraints and poor background. The government of Gujarat offers a number of scholarships for candidates of all age groups including students at the school level, college level, and research level. Digital Gujarat Scholarship Schemes are available for the entire reserved categories i.e. –SC/ BC/ Minority/ ST/ NTDNT/ SEBC/ other backward classes/ Valmiki/ Hadi/ Nadiya/ Turi/ Senva/ Vankar Sadhu/ Garo-Garoda/ Dalit-Bava/ Tirgar/ Tirbanda/ Turi-Barot/ Matang/ Thori community." }], subheading: "Requirement of document", list: [{ listcontent: "Income certificate" }, { listcontent: "Aadhar card of student, father and mother" }, { listcontent: "Student's bank passbook (with IFSC code)" }, { listcontent: "Receipt of payment of tuition fee" }, { listcontent: "Certificate on the letterhead of the college" }, { listcontent: "Old Mark sheet" }] }
  /* digital gujarat end */

  /* tuition coaching start */
  const tuitioncoachingBanner = { imgurl: Tuitioncoachingbg, heading: "Tuition and coaching Sahay Yojana. Tuition / tuition fees paid in school / college are not recoverable in tuition assistance scheme." };
  const tuitioncoachingContent = { imgurl: Tuitioncoachingimg, heading: "Tuition and coaching Sahay Yojana", description: [{ descriptionlist: "Tuition / tuition fees paid in school / college are not recoverable in tuition assistance scheme. The school is entitled to an additional tuition fee outside the collegeStudents of non-reserved class who have obtained 90% in Std-10 and are studying in Std-11,12 in science stream will be given Rs.15,000 / - per annum incentive assistance per annum.Eligibility Criteria: 90% or more in Std-10.Assistance will be available only once in each year." }], subheading: "Requirement of document", list: [{ listcontent: "aadhar card" }, { listcontent: "Proof of residence" }, { listcontent: "Bonofide Certificate" }, { listcontent: "Proof of Age (Birth Certificate / Living Certificate)" }, { listcontent: "Certificate of non-reserved class" }, { listcontent: "Certificate of income" }, { listcontent: "Mark sheet of standard-10" }, { listcontent: "Bank passbook of the applicant" }, { listcontent: "Tuition class details (with paid and payable fees, with registration number)" }, { listcontent: "Std-11 mark sheet (for JEE / NEET assistance)" }, { listcontent: "Std-12 or last year mark sheet of study (for JEE / NEET assistance)" }, { listcontent: "The coaching class is administered by the society / trust / organization. So its registration number as well as proof of 3 years’ experience of the organization (for assistance of JEE / NEET)" }] }
  /* tuition coaching end */

  /* National Scholarship Portal (NSP) start */
  const nspBanner = { imgurl: Nspbg, heading: "The National Scholarship Portal is an online portal by the Government of India for applying" };
  const nspContent = { imgurl: Nspimg, heading: "National Scholarship Portal (NSP)", description: [{ descriptionlist: "2.1 Pre - Matric Scholarship Scheme - This scholarship scheme is for students studying from Class 1st to Class 10th. 2.2 Post - Matric Scholarship Scheme - This scholarship scheme is for students studying from Class 11th, 12th and above which includes Courses like ITI, B.SC, B. Com., B. Tech, and Medical etc." }], subheading: "Requirement of document", list: [{ listcontent: "Aadhar card of student, father and mother" }, { listcontent: "Standard - 10 and 12 mark sheet" }, { listcontent: "Degree / Diploma Admission Letter" }, { listcontent: "Self-declaration" }, { listcontent: "Income certificate of parents" }, { listcontent: "Ration card" }, { listcontent: "Certificate on the letterhead of the college" }, { listcontent: "Fee structure" }, { listcontent: "Receipt of payment of tuition fee" }, { listcontent: "Student's bank passbook (with IFSC code)" }, { listcontent: "Hostel Admission and Meal Receipt (if any)" }, { listcontent: "IT Return" }, { listcontent: "Passport photo of student" }] }
  /* National Scholarship Portal (NSP) end */

  /* RTE start */
  const rteBanner = { imgurl: Rtebg, heading: "The Right of Children to Free and Compulsory Education Act or Right to (RTE)" };
  const rteContent = { imgurl: Rteimg, heading: "Right to education(RTE)", description: [{ descriptionlist: "The Right of Children to Free and Compulsory Education Act or Right to Education Act (RTE) is an Act of the Parliament of India enacted on 4 August 2009, which describes the modalities of the importance of free and compulsory education for children between the age of 6 to 14 years in India under Article 21A of the Indian Constitution.[1] India became one of 135 countries to make education a fundamental right of every child when the act came into force on 1 April 2010.The title of the RTE Act incorporates the words ‘free and compulsory’. ‘Free education’ means that no child, other than a child who has been admitted by his or her parents to a school which is not supported by the appropriate Government, shall be liable to pay any kind of fee or charges or expenses which may prevent him or her from pursuing and completing elementary education." }], subheading: "REQUIREMENT OF DOCUMENT:", list: [{ listcontent: "Guardian's Aadhar Card / Passport / Electricity Bill/ Water Bill / Election Card / RationCard / Register Rental Agreement (any one) (Document of where you live will be required)" }, { listcontent: "Child's birth certificate" }, { listcontent: "Bank passbook (child / mother or father)" }, { listcontent: "Aadhar card of child, mother and father" }, { listcontent: "income Certificate (Below 1.20 lakh for rural area and 1.50 lakh for urban)" }, { listcontent: "Mobile number" }, { listcontent: "Passport size photo of the child" }, { listcontent: "Mother or father's PAN card (if any)" }, { listcontent: "Ration card (if any)" }, { listcontent: "Guardian caste certificate (for other than General catagory)" }, { listcontent: "Keep a list of 8 to 10 school names" }] }
  /* RTE content end */

  /* Admission start */
  const admissionBanner = { imgurl: Admissionbg, heading: "An online job application is a website form used to information about job candidates." };
  const admissionContent = { imgurl: Admissionimg, heading: "College/Job Admission Form", description: [{ descriptionlist: "M & K Advisor can fill the online form of VNSGU, GTU, Diploma, Degree and any other university as well as job form without any charge." }], subheading: "COLLEGE/JOB ADMISSION FORM:", list: [{ listcontent: "Email ID" }, { listcontent: "Mobile number" }, { listcontent: "Mark sheet of standard 10 and 12" }, { listcontent: "School leaving certificate" }, { listcontent: "Category Certificate for EWS / ST / SC / SEBC" }, { listcontent: "Non-Crimilayer for SEBC category only" }, { listcontent: "Bank passbook" }, { listcontent: "Mother or father's PAN card (if any)" }, { listcontent: "Student and father's Aadhaar card" }, { listcontent: "Passport size photo" }, { listcontent: "for online fee paymentCredit card / debit card" }] }
  /* Admission content end */

  /* Kuvarbai start */
  const kuvarbaiBanner = { imgurl: Kuvarbaibg, heading: "Kuvarbai nu Mameru Yojana In Gujarat benefits the marriage of daughters of socially and economically weaker families." };
  const kuvarbaiContent = { imgurl: Kuvarbaiimg, heading: "Kuvarbai Mameru Yojana", description: [{ descriptionlist: "In 2020 Gujarat government has launched the KuvarbaiMameruYojana for girls of specific castes in the state. ... This scheme is specially launched to give financial help to the Gujarat government at the time of marriage to every ST,SC and Binanamat girl in the entire state." }], subheading: "Requirement of document", list: [{ listcontent: "Aadhaar card of bride and groom" }, { listcontent: "Living certificate of the bride and groom" }, { listcontent: "Bride’s bank passbook(In which father's name should be followed)" }, { listcontent: "Marriage certificate" }, { listcontent: "Certificate of income of the father of the bride(Less than 6 lakh for the city)" }, { listcontent: "Cast certificate of the bride" }, { listcontent: "Ration of the bride's father(Light bill / Lease Agreement / Election Card)" }, { listcontent: "Passport size photo of the bride" }, { listcontent: "Couple photo (size of 2 * 3)" }, { listcontent: "Kankotri of marriage" }, { listcontent: "Aadhar card of the bride's father" }] }
  /* Kuvarbai content end */

  /* Vahlidikri start */
  const vahlidikriBanner = { imgurl: Vahlidikribg, heading: "The scheme will be for girls from poor families with incomes below Rs 2 lakh a year" };
  const vahlidikriContent = { imgurl: Vahlidikriimg, heading: "Vahli Dikri Yojana", description: [{ descriptionlist: "VahliDikriYojana is started by the Gujarat Government in favor of improving the proportion of births of girls. This scheme is also known as the “Dear Daughter Scheme”. The main objective of this scheme is to empower women and help in studying the daughters of persons below the poverty line." }], subheading: "Requirement of document", list: [{ listcontent: "Child's birth certificate" }, { listcontent: "Marriage certificate" }, { listcontent: "Bank passbook in the child's name" }, { listcontent: "Mother & Father Aadhaar Card (2 copies)" }, { listcontent: "Certificate of income" }, { listcontent: "Passport size photos of daughter and parents" }, { listcontent: "Ration card" }, { listcontent: "Lightbill / Wearable / Lease Agreement" }, { listcontent: "Parent's birth certificate orSchool leaving certificate" }, { listcontent: "If there is another child, file of the doctor who performed the family control operation" }, { listcontent: "Mobile number" }] }
  /* Vahlidikri content end */

  /* Vidhva Sahay start */
  const vidhvasahayBanner = { imgurl: Vidhvasahaybg, heading: "the Latest Status about vidhva sahay pension yojana gujarat from top creators only on Nojoto App." };
  const vidhvasahayContent = { imgurl: Vidhvasahayimg, heading: "Vidhva Sahay Yojana", description: [{ descriptionlist: "The Gujarat government has started the SahayYojana for widowed women. Under the scheme, financial assistance of Rs 1250 per month will be provided to all the widowed women of the state. In order to take advantage of , interested women have to complete the application process.e." }], subheading: "Requirement of document", list: [{ listcontent: "Aadhar Card" }, { listcontent: "Ration card" }, { listcontent: "Light bill / Lease Agreement" }, { listcontent: "Certificate of births of children/Aadhar Card" }, { listcontent: "Certificate of husband's death" }, { listcontent: "Passport size photo" }, { listcontent: "Mobile number" }, { listcontent: "Bank passbook" }] }
  /* Vidhva Sahay content end */

  /* Atal Pension Sahay start */
  const atalpensionBanner = { imgurl: Atalpensionbg, heading: "Atal Pension Yojana, formerly known as Swavalamban Yojana is a government-backed pension scheme in India" };
  const atalpensionContent = { imgurl: Atalpensionimg, heading: "Atal Pension Yojana", description: [{ descriptionlist: "Atal Pension Yojana, formerly known as SwavalambanYojana is a government-backed pension scheme in India, primarily targeted at the unorganised sector. It was mentioned in the year 2015 Budget speech by the Finance Minister ArunJaitley. It was launched by Prime Minister NarendraModi on 9 May 2015 in Kolkata." }], subheading: "Requirement of document", list: [{ listcontent: "Savings account" }, { listcontent: "APY registration form duly filled" }, { listcontent: "Aadhaar card" }, { listcontent: "Mobile number" }] }
  /* Atal Pension content end */

  /* Sukanya Samriddhi start */
  const sukanyasamriddhiBanner = { imgurl: Sukanyasamriddhibg, heading: "Sukanya Samriddhi Account is a Government of India backed saving scheme targeted at the parents of girl children." };
  const sukanyasamriddhiContent = { imgurl: Sukanyasamriddhiimg, heading: "Sukanya Samriddhi Yojana", description: [{ descriptionlist: "SukanyaSamriddhi Account is a Government of India backed saving scheme targeted at the parents of girl children. The scheme encourages parents to build a fund for the future education and marriage expenses for their female child." }], subheading: "Requirement of document", list: [{ listcontent: "Daughter's birth certificate" }, { listcontent: "Daughter's Aadhaar card" }, { listcontent: "Father Identity Card (Election Card / Aadhaar Card / PAN Card / Driving License)" }, { listcontent: "Evidence of Residence (Ration Card / Light Bill / Aadhar Card)" }] }
  /* Sukanya Samriddhi end */

  /* Divyang Lagn start */
  const divyanglagnBanner = { imgurl: Divyanglagnbg, heading: "The Divyang Lagna Sahay Yojana has been implemented with the aim of enabling ordinary people to live" };
  const divyanglagnContent = { imgurl: Divyanglagnimg, heading: "Divyang Lagn Sahay Yojana", description: [{ descriptionlist: "The Department of Social Justice and Empowerment, Gandhinagar has implemented ‘DivyangLagnSahayYojana’ to provide financial assistance for marriage to persons with disabilities from Divyang to Divyang and Divyang to common persons. The DivyangLagnaSahayYojana has been implemented with the aim of enabling ordinary people to live a dignified life in the society. All you have to do now is apply online from e-samajkalyan portal." }], subheading: "Requirement of document", list: [{ listcontent: "Copy of Divyangat pattern of Civil Surgeon of Kanya / Kumar" }, { listcontent: "Proof of residence" }, { listcontent: "Applicant's school leaving certificate" }, { listcontent: "Certificate of school leave of the bride / groom" }, { listcontent: "Marriage certificate" }, { listcontent: "A copy of the petition of the Civil Surgeon of the applicant" }, { listcontent: "Copy of first page of bank passbook" }, { listcontent: "Couple photo (4 * 6 size)" }, { listcontent: "Wedding Kankotri" }] }
  /* Divyang Lagn Sahay Yojana end */

  /* jawahar navodaya start */
  const jawaharnavodayaBanner = { imgurl: Jawaharnavodayabg, heading: "Jawahar Navodaya Vidyalaya (JNV) is a system of central schools for talented students predominantly" };
  const jawaharnavodayaContent = { imgurl: Jawaharnavodayaimg, heading: "Jawahar Navodaya Vidyalaya", description: [{ descriptionlist: "JawaharNavodayaVidyalayas are a system of central schools for talented students predominantly from rural area in India. They are run by NavodayaVidyalayaSamiti, New Delhi, an autonomous organization under the Department of School Education and Literacy, Ministry of Education, Government of India." }], subheading: "Requirement of document", list: [{ listcontent: "Candidate's Photo" }, { listcontent: "Candidate's Signature" }, { listcontent: "Candidate'sAadhar card" }, { listcontent: "Parent's Signature" }, { listcontent: "Parent's Aadhar card" }, { listcontent: "Std-3, 4, 5 results" }, { listcontent: "Birth Certificate" }, { listcontent: "Cast Certificate" }, { listcontent: "ITR Return / Income Certificate" }] }
  /* jawahar navodaya end */

  /* manav garima start */
  const manavgarimaBanner = { imgurl: Manavgarimabg, heading: "The chief minister of Gujarat Vijay Rupani has launched Manav Garima Yojana in order to" };
  const manavgarimaContent = { imgurl: Manavgarimaimg, heading: "Manav Garima Yojana", description: [{ descriptionlist: "The chief minister of Gujarat Vijay Rupani has launched ManavGarimaYojana in order to financially help schedule castes, scheduled tribes, OBC, and Backward classes of the state." }], subheading: "Requirement of document", list: [{ listcontent: "Aadhaar card of the applicant" }, { listcontent: "Ration card" }, { listcontent: "Aadhaar card of all the members in the ration card" }, { listcontent: "Light bill / Election Card / Rental Agreement / Ration Card" }, { listcontent: "Cast Certificate of applicant" }, { listcontent: "Certificate of income" }, { listcontent: "Evidence of study" }, { listcontent: "Proof of having received vocational training" }, { listcontent: "Signature on the blank page of the applicant" }] }
  /* manav garima end */

  /* Tax consultant page start */
  const TaxconsultantBanner = { imgurl: Taxconsultantbg, heading: "Knowing the tax rules can help you plan your financial life and not pay more than necessary." };
  /* Tax consultant page end */

  /* Gst return page start */
  const GstreturnBanner = { imgurl: Gstreturnbg, heading: "GST Login portal allows taxpayers to undertake GST compliance on a single portal." };
  /* Gst return page end */

  /* Subsidy page start */
  const SubsidyBanner = { imgurl: Subsidybg, heading: "a transfer of money from the government to an entity." };
  /* Subsidy page end */

  /* Subsidy page start */
  const insuranceBanner = { imgurl: Insurancebg, heading: "An insurance policy is a written contract between the policyholder" };
  /* Subsidy page end */

  /* testimonials start */
  const testimonialsBanner = { imgurl: Testimonialsbg, heading: "Client Testimonials" };
  /* testimonials end */

  /* conatct start */
  const contactBanner = { imgurl: Contactbg, heading: "Contact" };
  /* contact end */
  return (
    <div className="main-section">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/loans" element={<Loans banner={Loan}  />} />
          <Route path="/business-loan" element={<Businessloan banner={businessLoanBanner} bannerContent={businessLoanSection} inquiryContent={businessLoanInquiry} />} />
          <Route path="/personal-loan" element={<Personalloan banner={personalLoanBanner} bannerContent={personalLoanSection} inquiryContent={personalLoanInquiry} />} />
          <Route path="/student-loan" element={<Studentloan banner={studentLoanBanner} bannerContent={studentLoanSection} inquiryContent={studentLoanInquiry} />} />
          <Route path="/car-loan" element={<Carloan banner={carLoanBanner} bannerContent={carLoanSection} inquiryContent={carLoanInquiry} />} />
          <Route path="/gold-loan" element={<Goldloan banner={goldLoanBanner} bannerContent={goldLoanSection} inquiryContent={goldLoanInquiry} />} />
          <Route path="/commercial-loan" element={<CommercialLoan banner={commercialLoanBanner} bannerContent={commercialLoanSection} inquiryContent={commercialLoanInquiry} />} />
          <Route path="/two-wheeler-loan" element={<Twowheelerloan banner={twoWheelerLoanBanner} bannerContent={twoWheelerLoanSection} inquiryContent={twoWheelerLoanInquiry} />} />
          <Route path="/insurance" element={<Insurance banner={insuranceBanner} />} />
          <Route path="/health-insurance" element={<Healthinsurance banner={HealthInsuranceBanner} content={HealthInsuranceContent} />} />
          <Route path="/car-insurance" element={<Carinsurance banner={CarInsuranceBanner} content={CarInsuranceContent} />} />
          <Route path="/bike-insurance" element={<Bikeinsurance banner={bikeInsuranceBanner} content={bikeInsuranceContent} />} />
          <Route path="/life-insurance" element={<Lifeinsurance banner={lifeInsuranceBanner} content={lifeInsuranceContent} />} />
          <Route path="/fire-insurance" element={<Fireinsurance banner={fireInsuranceBanner} content={fireInsuranceContent} />} />
          <Route path="/tax-consultant" element={<Taxconsultant banner={TaxconsultantBanner} />} />
          <Route path="/gst-return" element={<Gstreturn banner={GstreturnBanner} />} />
          <Route path="/income-tax" element={<Incometax banner={incometaxBanner} content={incometaxContent} />} />
          <Route path="/pan-card" element={<Pancard banner={pancardBanner} content={pancardContent} />} />
          <Route path="/subsidy" element={<Subsidy banner={SubsidyBanner} />} />
          <Route path="/mysy" element={<Mysy banner={mysyBanner} content={mysyContent} />} />
          <Route path="/ntse" element={<Ntse banner={ntseBanner} content={ntseContent} />} />
          <Route path="/digital-gujarat" element={<Digitalgujarat banner={digitalgujaratBanner} content={digitalgujaratContent} />} />
          <Route path="/tuition-coaching" element={<Tuitioncoaching banner={tuitioncoachingBanner} content={tuitioncoachingContent} />} />
          <Route path="/nsp" element={<Nsp banner={nspBanner} content={nspContent} />} />
          <Route path="/rte" element={<Rte banner={rteBanner} content={rteContent} />} />
          <Route path="/admission" element={<Admission banner={admissionBanner} content={admissionContent} />} />
          <Route path="/kuvarbai" element={<Kuvarbai banner={kuvarbaiBanner} content={kuvarbaiContent} />} />
          <Route path="/vahli-dikri" element={<Vahlidikri banner={vahlidikriBanner} content={vahlidikriContent} />} />
          <Route path="/vidhva-sahay" element={<Vidhvasahay banner={vidhvasahayBanner} content={vidhvasahayContent} />} />
          <Route path="/atal-pansion" element={<Atalpansion banner={atalpensionBanner} content={atalpensionContent} />} />
          <Route path="/sukanya-samriddhi" element={<Sukanyasamriddhi banner={sukanyasamriddhiBanner} content={sukanyasamriddhiContent} />} />
          <Route path="/divyang-lagn" element={<Divyanglagn banner={divyanglagnBanner} content={divyanglagnContent} />} />
          <Route path="/jawahar-navodaya" element={<Jawaharnavodaya banner={jawaharnavodayaBanner} content={jawaharnavodayaContent} />} />
          <Route path="/manav-garima" element={<Manavgarima banner={manavgarimaBanner} content={manavgarimaContent} />} />
          <Route path="/testimonials" element={<Testimonials banner={testimonialsBanner} />} />
          <Route path="/contact" element={<Contect banner={contactBanner} />} />
          <Route path="/allform" element={<Allform />} />
          <Route path="/appointmentform" element={<Appointmentform />} />
          <Route path="/consultantform" element={<Consultantform />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;