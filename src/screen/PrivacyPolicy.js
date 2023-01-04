import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function PrivacyPolicy(props) {
     
    return (
        <React.Fragment> 
            <div className="privacy-policy policy">
                <div className='hdr flex wrapPadding rel' style={{background: 'url(/images/tc-wave.svg)'}}>
                <   Link to="/" className='logo flex aic'>
                        <img src="/images/logo.png" className="img" />
                        <div className="tt font s22 b8 black">ShopEagle</div>
                    </Link>
                    <div className='wrap flex flex-col aic'><div className='title font b7 s32'>Privacy Policy</div></div>
                </div> 
                <div className="content flex flex-col">
                    <div className='actions flex aic'>
                        <div className='lef flex flex-col'>
                            <div className='btns flex aic c69'>
                                <Link to="/" className="btn font s16 c69">Go to Home</Link>
                                <span>&nbsp;&nbsp;&#47;&nbsp;&nbsp;</span>
                                <Link to="/privacy-policy" className="btn font s16 c69">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="txt marg-btm font s16 c69">This Privacy Policy agreement was last updated: 17th June, 2021.</div>
                        <div className="txt marg-btm font s16 c69">ShopEagle Retail Private Limited (“Company”) values your privacy. In this Privacy Policy ("Policy"), we describe the information that we collect about you when you visit the Company’s platform (“ShopEagle”) and use the services available on ShopEagle, and how we use and disclose that information.</div>
                        <div className="txt marg-btm font s16 c69">If you have any questions or comments about the Privacy Policy, please contact us at support@shopeagle.in. This Policy is incorporated into and is subject to the ShopEagle Terms of Use, which can be accessed at this link. Your use of ShopEagle and any personal information you provide on ShopEagle remains subject to the terms of the Policy and ShopEagle’s Terms of Use.</div>
                        <div className="txt marg-btm font s16 c69">In terms of the Information Technology (Intermediaries Guidelines) Rules, 2011 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, any grievance or complaint may be intimated to [●], Grievance Officer, who may be reached at [●]. The complaint shall be redressed within 1 (one) month.</div>
                    </div>
                      
                    <div className="heading flex flex-col"> 
                        <a href="#" className='lin font s16 c69'>A.&nbsp;<span className='noul'>Collection of Your Personal Information</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;a.&nbsp;<span className='noul'>COLLECTION OF PERSONAL INFORMATION</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;b.&nbsp;<span className='noul'>COLLECTION OF PERSONAL INFORMATION FROM SOCIAL NETWORKING SITES</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;c.&nbsp;<span className='noul'>COLLECTION OF AUTOMATIC INFORMATION, USE OF COOKIES AND OTHER TRACKING DEVICES</span></a> 
                        <a href="#" className='lin font s16 c69'>B.&nbsp;<span className='noul'>How the Company Uses the Information We Collect</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;a.&nbsp;<span className='noul'>HOW PERSONAL INFORMATION IS USED</span></a> 
                        <a href="#" className='lin font s16 c69'>C.&nbsp;<span className='noul'>Electronic Newsletters, Invitations, Polls and Surveys</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;a.&nbsp;<span className='noul'>ELECTRONIC NEWSLETTERS</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;b.&nbsp;<span className='noul'>"SEND TO A FRIEND"</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;c.&nbsp;<span className='noul'>POLLING</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;d.&nbsp;<span className='noul'>SURVEYS</span></a> 
                        <a href="#" className='lin font s16 c69'>D.&nbsp;<span className='noul'>Security</span></a> 
                        <a href="#" className='lin font s16 c69'>E.&nbsp;<span className='noul'>Disclosure</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;a.&nbsp;<span className='noul'>INFORMATION DISCLOSED TO PROTECT US AND OTHERS</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;b.&nbsp;<span className='noul'>INFORMATION DISCLOSED TO THIRD PARTY SERVICE PROVIDERS AND BUSINESS PARTNERS</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;c.&nbsp;<span className='noul'>DISCLOSURE TO OTHER USERS OF SHOPEAGLE</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;d.&nbsp;<span className='noul'>INFORMATION DISCLOSED TO LAW ENFORCEMENT OR GOVERNMENT OFFICIALS</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;e.&nbsp;<span className='noul'>IN THE EVENT OF A CHANGE OF CONTROL OR BANKRUPTCY</span></a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;f.&nbsp;<span className='noul'>INFORMATION DISCLOSED AT YOUR REQUEST</span></a> 
                        <a href="#" className='lin font s16 c69'>F.&nbsp;<span className='noul'></span>Links to External Websites</a> 
                        <a href="#" className='lin font s16 c69'>G.&nbsp;<span className='noul'></span>Updating, Deleting, and Correcting Your Personal Information</a> 
                        <a href="#" className='lin font s16 c69'>H.&nbsp;<span className='noul'></span>What Choices Do I Have Regarding Use of My Personal Information?</a> 
                        <a href="#" className='lin font s16 c69'>I.&nbsp;<span className='noul'></span>Third-Party Ad Networks</a> 
                        <a href="#" className='lin font s16 c69'>J.&nbsp;<span className='noul'></span>Your Full Name and Use of Company Information</a> 
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;a.&nbsp;<span className='noul'>YOUR FULL NAME</span></a>
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;b.&nbsp;<span className='noul'>USING INFORMATION FROM THE COMPANY</span></a>
                        <a href="#" className='lin font s16 c69'>&emsp;&emsp;c.&nbsp;<span className='noul'>ACCOUNT PROTECTION</span></a>
                        <a href="#" className='lin font s16 c69'>K.&nbsp;<span className='noul'></span>User Generated Content</a>
                        <a href="#" className='lin font s16 c69'>L.&nbsp;<span className='noul'></span>Privacy Policy Updates</a> 



                        <a href="#OurPrivacy" className='lin font s16 c69'>1.&nbsp;<span className='noul'>Our Privacy Policy</span></a> 
                        <a href="#Information" className='lin font s16 c69'>2.&nbsp;<span className='noul'>Information Collected or Received</span></a>
                        <a href="#Findablility" className='lin font s16 c69'>3.&nbsp;<span className='noul'>Findablility</span></a>
                        <a href="#MessagefromEsty" className='lin font s16 c69'>4.&nbsp;<span className='noul'>Message from Etsy</span></a>
                        <div className='lin font s16 c69'>5.&nbsp;<span className='noul'>Community</span></div>
                        <div className='lin font s16 c69'>6.&nbsp;<span className='noul'>Information Uses, Sharing & Disclosure</span></div>
                        <div className='lin font s16 c69'>7.&nbsp;<span className='noul'>Transfers</span></div>
                        <div className='lin font s16 c69'>8.&nbsp;<span className='noul'>Security</span></div>
                        <div className='lin font s16 c69'>9.&nbsp;<span className='noul'>Retention</span></div>
                        <div className='lin font s16 c69'>10.&nbsp;<span className='noul'>Your Rights & Choices</span></div>
                        <div className='lin font s16 c69'>11.&nbsp;<span className='noul'>Your Responsibilities</span></div>
                        <div className='lin font s16 c69'>12.&nbsp;<span className='noul'>Privacy Policy Changes</span></div>
                        <div className='lin font s16 c69'>13.&nbsp;<span className='noul'>Contact</span></div>
                    </div>
  
                    <div id="" className="item">
                        
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>A. Collection of Your Personal Information</div>
                        <div className='lbl font s18 b8 c000'>a. COLLECTION OF PERSONAL INFORMATION</div>
                        <div className='txt font s16 c69'>“Personal information” is defined to include information that whether on its own or in combination with other information may be used to readily identify or contact you such as name, address, email address, phone number, etc.</div>
                        <br></br>
                        <div className='txt font s16 c69'>We collect personal information from Sellers offering their products and services. This information is partially or completely accessible to all visitors using ShopEagle, either directly or by submitting a request for a service. Sellers and Shoppers are required to create an account to be able to access certain portions of ShopEagle, such as, including but not limited to, sell products, to request a price quote for a product, submit questions, participate in ratings or reviews, to place an order, and request information. Sellers, if and when they create and use an account with ShopEagle, will be required to disclose and provide to the Company information including personal contact details, bank details, store details, personal identification details and may be required to provide information such as GST number, PAN card, Aadhar card, etc. and participate in polls or surveys or feedbacks etc. Such information gathered shall be utilized to ensure greater customer satisfaction and help a customer satiate their needs. The type of personal information that we collect from you varies based on your particular interaction with ShopEagle. </div>
                        <br></br>
                        <div className='txt font s16 c69'>Shoppers: During the Account registration process and your usage of ShopEagle, we will collect information such as your name, phone number, email address and other personal information. You also may provide us with your mailing address, and demographic information (e.g., gender, age, education, race or ethnic origin, and other information relevant to user surveys and/or offers). We may also collect personal information that you post in your profile, orders, favorites or feedback, and any comments or discussions you post in any chat room, or other correspondence on ShopEagle, or any comments you provide during dispute resolution with other users of ShopEagle.</div>
                        <br></br>
                        <div className='txt font s16 c69'>Sellers: If you are a Seller and would like to post any information about yourself, we will require you to register for an Account. During the Account registration process, we will collect your business name, telephone number, address, zip code, a description of your goods, a headline for your profile, first and last name, delivery details, details of the products you wish to sell and email address, if any. Other information may also be required to be provided to the Company whilst you avail and use ShopEagle. In addition, you may, but are not required to, provide other content or information about your business, including photographs and videos. We may also collect payment information, such as bank account details, from you.</div>
                        <br></br>
                        <div className='txt font s16 c69'>The Company reserves the right to record the conversations between Sellers and Shoppers facilitated by ShopEagle through the messaging/chat mechanism on the platform provided to safeguard the privacy of Sellers and Shoppers. All the chat/messaging logs can be used for including but not limited to monitor and prohibit abuse, safeguard the rights of Sellers and Shoppers, resolve disputes, etc.</div>
                        <br></br>
                        <div className='txt font s16 c69'>If we deem it necessary, in our sole and absolute discretion, we may also ask for and collect supplemental information from third parties, such as information about your credit from a credit bureau (to the extent permitted by law), or information to verify any identification details you provide during registration.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>b. COLLECTION OF PERSONAL INFORMATION FROM SOCIAL NETWORKING SITES</div>
                        <div className='txt font s16 c69'>You may log into ShopEagle through other social networking accounts, if the feature is available. If you do so, you must enter the email address and password that you use for such a social network account. We will ask that you grant us permission to access and collect your basic information (this includes your name, profile picture, gender, networks, user IDs, list of friends, date of birth, email address, and any other information you have set to the public on your social network account). If you allow us to have access to this information, then we will have access to this information even if you have chosen not to make that information public.</div>
                        <br></br>
                        <div className='txt font s16 c69'>We store the information that we receive from such social network accounts with other information that we collect from you or receive about you. The respective social network controls the information it collects from you. For information about how it may use and disclose your information, including any information you make public, please consult the respective social network’s privacy policy. We have no control over how any third party site uses or discloses the personal information it collects about you.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>c. COLLECTION OF AUTOMATIC INFORMATION, USE OF COOKIES AND OTHER TRACKING DEVICES</div>
                        <div className='txt font s16 c69'>We and our third party service providers, which include ad networks, use cookies, web beacons, and other tracking technologies to collect information about your use of ShopEagle, such as your browser type, your ISP or operating system, your domain name, your access time, the URL of the previous website you visited, your page views, your IP address, and the type of device that you use. We also track how frequently you visit ShopEagle. We use this information (including the information collected by our third party service providers) for website and/or any other ShopEagle platform analytics (including to determine which portions of ShopEagle are used most frequently, what our users like/do not like), to assist us in determining relevant advertising (both on and off our ShopEagle), to evaluate the success of our advertising campaigns, and as otherwise described in this policy. Currently, we do not honor browser requests not to be tracked. We may obtain your device ID, which is sent to the Company’s servers and used in fraud prevention efforts.</div>
                        <br></br>
                        <div className='txt font s16 c69'>Cookies. We and our third party service providers collect information from you by using cookies. A cookie is a small file stored on a user's computer/hand-held hard drive containing information about the user. The cookie helps us analyze web traffic or informs you about your use of a particular website. Cookies allow web applications to respond to you as an individual, tailoring its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences. When you visit ShopEagle, we may send one or more cookies (i.e., a small text file containing a string of alphanumeric characters) to your computer that identifies your browser.</div>
                        <br></br>
                        <div className='txt font s16 c69'>Some of these cookies may be connected to third-party companies or websites. The terms of use of such cookies are governed by this Policy and the privacy policy of the relevant third party company or website. For example, Google measures the performance of advertisements by placing cookies on your computer when you click on ads. If you visit ShopEagle when you have such cookies on your computer, we and Google will be able to tell that you saw the ad delivered by Google. The terms of use of these cookies are governed by this Policy and Google's Privacy Policy.</div>
                        <br></br>
                        <div className='txt font s16 c69'>Disabling Cookies. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you disable cookies you may be prevented from taking full advantage of ShopEagle because it may not function properly if the ability to accept cookies is disabled.</div>
                        <br></br>
                        <div className='txt font s16 c69'>Clear GIFs, pixel tags and other technologies. Clear GIFs are tiny graphics with a unique identifier, similar in function to cookies. In contrast to cookies, which are stored on your computer's hard drive, clear GIFs are embedded invisibly on web pages. We may use clear GIFs (a.k.a. web beacons, web bugs or pixel tags), in connection with ShopEagle to, among other things, track the activities of ShopEagle visitors, help us manage content, and compile statistics about ShopEagle usage. We and our third party service providers also use clear GIFs in HTML emails to our Visitors, to help us track email response rates, identify when our emails are viewed, and track whether our emails are forwarded.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>B. How the Company Uses the Information We Collect</div>
                        <div className='lbl font s18 b8 c000'>a. HOW PERSONAL INFORMATION IS USED</div>
                        <div className='txt font s16 c69'>We collect your personal information and aggregate information about the use of ShopEagle to better understand your needs and to provide you with a better ShopEagle experience. Specifically, we may use your personal information for any of the following reasons:</div>
                        <br></br>
                        <div className='txt font s16 c69'>1. To provide our services to you, including registering you for our services, verifying your identity and authority to use our services, and to otherwise enable you to use ShopEagle;</div>
                        <br></br>
                        <div className='txt font s16 c69'>2. For customer support and to respond to your inquiries;</div>
                        <br></br>
                        <div className='txt font s16 c69'>3. For internal record-keeping purposes;</div>
                        <br></br>
                        <div className='txt font s16 c69'>4. To process billing and payment, including sharing with third party payment gateways in connection with ShopEagle;</div>
                        <br></br>
                        <div className='txt font s16 c69'>5. To improve and maintain ShopEagle (for example, we track information entered through the "Search" function; this helps us determine which areas of ShopEagle users like best and areas that we may want to enhance; we also will use for trouble-shooting purposes, where applicable);</div>
                        <br></br>
                        <div className='txt font s16 c69'>6. To periodically send promotional emails to the email address you provide regarding new products on ShopEagle, special offers on ShopEagle, or other information about ShopEagle that we think you may find interesting;</div>
                        <br></br>
                        <div className='txt font s16 c69'>7. To contact you via email, telephone, facsimile or mail, or, where requested, by text message, to deliver certain services or information you have requested;</div>
                        <br></br>
                        <div className='txt font s16 c69'>8. For the Company's market research purposes, including, but not limited to, the customization of ShopEagle according to your interests;</div>
                        <br></br>
                        <div className='txt font s16 c69'>9. We may use your demographic information (i.e., age, postal code, residential and commercial addresses, and other various data) to more effectively facilitate the promotion of goods and services to appropriate target audiences and for other research and analytical purposes;</div>
                        <br></br>
                        <div className='txt font s16 c69'>10. To resolve disputes, to protect ourselves and other users of ShopEagle, and to enforce our Terms of Use;</div>
                        <br></br>
                        <div className='txt font s16 c69'>11. We also may compare personal information collected through ShopEagle to verify its accuracy with personal information collected from third parties; and</div>
                        <br></br>
                        <div className='txt font s16 c69'>12. We may combine aggregate data with the personal information we collect about you.</div>
                        <br></br>
                        <div className='txt font s16 c69'>From time to time, the Company may use personal information for new and unanticipated uses not previously disclosed in our Privacy Policy. If our information practices change regarding information previously collected, the Company shall make reasonable efforts to provide notice and obtain the consent of any such uses as may be required by law.</div>
                        <br></br>
                        <div className='txt font s16 c69'>It is further clarified that your registration on ShopEagle shall be deemed to be your consent to be contacted for the purposes mentioned above, (i) on the mobile number shared by you even if you are registered with the National Customer Preference Register (NCPR) and have opted out of receiving promotional calls and messages and (ii) by way of SMS or email notifications or messages in any other electronic form.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>C. Electronic Newsletters, Invitations, Polls and Surveys</div>
                        <div className='txt font s16 c69'>At our sole discretion, the Company may offer any of the following free services in ShopEagle which you may select to use or receive at your option. Certain of the following services may require you to provide additional personal information as detailed below:</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>a. ELECTRONIC NEWSLETTERS</div>
                        <div className='txt font s16 c69'>We may offer a free electronic newsletter to users. We will gather the email addresses of users who sign up on ShopEagle for the newsletter mailing list. Users may remove themselves from this mailing list by opting out of receiving newsletters during the registration process, by following the link provided in each newsletter that points users to a subscription management page where the user can unsubscribe from receiving newsletters or by changing their preferences in their profile settings page.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>b. "SEND TO A FRIEND"</div>
                        <div className='txt font s16 c69'>ShopEagle users can voluntarily choose to electronically forward a link, page, or document to someone else by clicking "send to a friend." or relevant sharing icons in the ShopEagle platform. To do so, the user may be required to provide his or her email address, as well as the email address of the recipient. The user's email address is used only in the case of transmission errors and, of course, to let the recipient know who sent the email. The information is not used for any other purpose.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>c. POLLING</div>
                        <div className='txt font s16 c69'>We may offer interactive polls to users so they can easily share their opinions with other users and see what our audience thinks about important issues, services, and/or ShopEagle. Opinions or other responses to polls are aggregated and are not identifiable to any particular user. We may use a system to "tag" users after they have voted, so they can vote only once on a particular question. This tag is not correlated with information about individual users.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>d. SURVEYS</div>
                        <div className='txt font s16 c69'>We may conduct user surveys from time to time to better target our content to our ShopEagle users. We will not share individual responses from these surveys with any third party. We will share aggregate data with third party service providers, partners, and other third parties. We also will post aggregate data containing survey responses on ShopEagle; that data may be viewed and downloaded by other users of ShopEagle.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>D. Security</div>
                        <div className='txt font s16 c69'>We employ procedural and technological security measures, which are reasonably designed to help protect your personal information from unauthorized access or disclosure. The Company may use encryption, passwords, and physical security measures to help protect your personal information against unauthorized access and disclosure. No security measures, however, are 100% complete. Therefore, we do not promise and cannot guarantee, and thus you should not expect, that your personal information or private communications will not be collected and used by others. You should take steps to protect against unauthorized access to your password, phone, and computer by, among other things, signing off after using a shared computer, choosing a robust password that nobody else knows or can easily guess, and keeping your log-in and password private. The Company is not responsible for the unauthorized use of your information or for any lost, stolen, compromised passwords, or for any activity on your Account via unauthorized password activity.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>E. Disclosure</div>
                        <div className='txt font s16 c69'>We may share the information that we collect about you, including your personal information, as follows:</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>a. INFORMATION DISCLOSED TO PROTECT US AND OTHERS</div>
                        <div className='txt font s16 c69'>We may disclose your information including Personal Information if: (i) the Company reasonably believes that disclosure is necessary in order to comply with a legal process (such as a court order, search warrant, etc.) or other legal requirements of any governmental authority, (ii) disclosure would potentially mitigate our liability in an actual or potential lawsuit, (iii) reasonably necessary to enforce this Privacy Policy, our Terms of Use etc. (iv) disclosure is intended to help investigate or prevent unauthorized transactions or other illegal activities, or (v) necessary or appropriate to protect our rights or property, or the rights or property of any person or entity.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>b. INFORMATION DISCLOSED TO THIRD PARTY SERVICE PROVIDERS AND BUSINESS PARTNERS</div>
                        <div className='txt font s16 c69'>We may contract with various third parties for the provision and maintenance of ShopEagle and our business operations, and the Company may need to share your personal information and data generated by cookies and aggregate information (collectively, "information") with these vendors and service agencies. For example, we may provide your information to a credit card processing company to process your payment. The vendors and service agencies will not receive any right to use your personal information beyond what is necessary to perform its obligations to provide the services to you. If you complete a survey, we also may share your information with the survey provider; if we offer a survey in conjunction with another entity, we also will disclose the results to that entity.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>c. DISCLOSURE TO OTHER USERS OF SHOPEAGLE</div>
                        <div className='txt font s16 c69'>If you are a Seller, the information that you post (other than your payment information) is available to other users of ShopEagle. Comments that users post to ShopEagle also will be available to other visitors to ShopEagle (see our discussion of User Generated Content below). In addition, we will post the results (in aggregate form) of surveys to ShopEagle. </div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>d. INFORMATION DISCLOSED TO LAW ENFORCEMENT OR GOVERNMENT OFFICIALS</div>
                        <div className='txt font s16 c69'>We will disclose your information, including, without limitation, your name, city, state, telephone number, email address, user ID history, quoting and listing history, and fraud complaints, to law enforcement or other government officials if we are required to do so by law, regulation or other government authority or otherwise in cooperation with an investigation of governmental authority.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>e. IN THE EVENT OF A CHANGE OF CONTROL OR BANKRUPTCY</div>
                        <div className='txt font s16 c69'>In the event that the Company undergoes a change in control, including, without limitation, a merger or sale of all or substantially all of the Company's assets to which ShopEagle relates or other corporate reorganization in which the Company participates, and is thus merged with or acquired by a third party entity (a "Successor"), the Company hereby reserves the right to transfer the information we have collected from the users of ShopEagle to such Successor.</div>
                        <br></br>
                        <div className='txt font s16 c69'>In addition, in the event of the Company's bankruptcy, reorganization, receivership, or assignment for the benefit of creditors, or the application of laws or equitable principles affecting creditors' rights generally, the Company may not be able to control how your information is transferred, used, or treated and reserves the right to transfer the information we have collected from the users of ShopEagle to non-affiliated third parties in such event.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>f. INFORMATION DISCLOSED AT YOUR REQUEST</div>
                        <div className='txt font s16 c69'>We may share your personal information with other Registered Users to whom you explicitly ask us to send your information or if you explicitly consent to such disclosure upon receipt of a specific service. For instance, when you contract for a specific good with another Registered User, the Company will send that Registered User a notice that includes the personal information that you have chosen to allow the Company to reveal to users with whom you contract.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>F. Links to External Websites</div>
                        <div className='txt font s16 c69'>ShopEagle may contain links to other websites or resources over which the Company does not have any control. Such links do not constitute an endorsement by the Company of those external websites. You acknowledge that the Company is providing these links to you only as a convenience, and further agree that the Company is not responsible for the content of such external websites. We are not responsible for the protection and privacy of any information which you provide while visiting such external websites and such sites are not governed by this Policy. Your use of any external website is subject to the terms of use and privacy policy located on the linked external website.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>G. Updating, Deleting, and Correcting Your Personal Information</div>
                        <div className='txt font s16 c69'>You may choose to restrict the collection or use of your personal information in the following ways:</div>
                        <br></br>
                        <div className='txt font s16 c69'>You can review, correct, and delete your personal information by logging into ShopEagle. You must promptly update your personal information if it changes or is inaccurate. Typically, we will not manually alter your personal information because it is very difficult to verify your identity remotely. Nonetheless, upon your request, we will close your account and remove your personal information from view as soon as reasonably possible based on your account activity and in accordance with applicable law. We do retain information from closed accounts to comply with the law, prevent fraud, collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigations of any Registered User, enforce our Terms of Use, and take any other actions otherwise permitted by law that we deem necessary in our sole and absolute discretion. You should understand, however, that once you publicly post an Order, Feedback etc., or any other information onto ShopEagle, you may not be able to change or remove it. Once we have deleted or removed your Account, you agree that the Company shall not be responsible for any personal information that was not included within your deleted and/or removed Account that remains on ShopEagle.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>H. What Choices Do I Have Regarding Use of My Personal Information?</div>
                        <div className='txt font s16 c69'>We may send periodic promotional or informational emails to you. You may opt-out of such communications by following the opt-out instructions contained in the email. Please note that it may take up to 10 business days for us to process opt-out requests. If you opt-out of receiving emails about recommendations or other information we think may interest you, we may still send you emails about your Account or any services you have requested or received from us.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>I. Third-Party Ad Networks</div>
                        <div className='txt font s16 c69'>We participate in third-party ad networks that may display advertisements on other websites based on your visits to ShopEagle as well as other websites. This enables us and these third parties to target advertisements by displaying ads for products and services in which you might be interested. Third-party ad network providers, advertisers, sponsors and/or traffic measurement services may use cookies, JavaScript, web beacons (including clear GIFs), Flash LSOs and other technologies to measure the effectiveness of their ads and to personalize advertising content to you. These third party cookies and other technologies are governed by each third party's specific privacy policy, and not by this Policy. We may provide these third-party advertisers with information about your usage of ShopEagle and our services, as well as aggregate or non-personally identifiable information about visitors to ShopEagle and users of ShopEagle.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>J. Your Full Name and Use of Company Information</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>a. YOUR FULL NAME</div>
                        <div className='txt font s16 c69'>As a Registered User of ShopEagle, you will select a full name during the registration process. All of your activities on ShopEagle will be traceable to your full name. Certain other people, including other Registered Users with whom you have transacted business via ShopEagle, can see a large part of your activity on ShopEagle. If you book a good with a Registered User, cancel a scheduled good purchase with a Registered User, receive a response to your enquiry from a Registered User, the Company may send a notice to you or the appropriate Registered User that includes your full name. Thus, if you associate your real name with your full name, the people to whom you have revealed your name may be able to personally identify your activities.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>b. USING INFORMATION FROM THE COMPANY</div>
                        <div className='txt font s16 c69'>ShopEagle facilitates your sharing of personal information with others to negotiate, sell, and purchase the goods. If you agree to contract for a service with another Registered User, you may need to reveal your name, email, phone number, or personal address to that individual so that the goods may be delivered. Please respect the privacy of others. You agree to use the information of other users solely for the following purposes: (a) ShopEagle transaction-related purposes; and (b) using services offered through ShopEagle.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s18 b8 c000'>c. ACCOUNT PROTECTION</div>
                        <div className='txt font s16 c69'>Your password is the key to your Account. When creating your password you should use unique numbers, letters, special characters, and combinations thereof. In addition, DO NOT disclose your password to anyone. If you do share your password or your personal information with others, you are solely responsible for all actions taken via your Account. If you lose control of your password, you may lose substantial control over your personal information and be subject to legally binding actions taken on your behalf. Thus, IF YOUR PASSWORD HAS BEEN COMPROMISED FOR ANY REASON, YOU MUST IMMEDIATELY NOTIFY THE COMPANY TO CHANGE YOUR PASSWORD.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>K. User Generated Content</div>
                        <div className='txt font s16 c69'>We invite you to post content on ShopEagle, including your comments, feedback, pictures, and any other information that you would like to be available on ShopEagle. If you post content to ShopEagle, all of the information that you post will be available to all visitors to ShopEagle. If you post your content on ShopEagle, your posting may become public and the Company cannot prevent such information from being used in a manner that may violate this Policy, the law, or your privacy.</div>
                    </div>
                    <div id="" className="item">
                        <div className='lbl font s26 b8 c000'>L. Privacy Policy Updates</div>
                        <div className='txt font s16 c69'>THIS POLICY IS CURRENT AS OF THE EFFECTIVE DATE SET FORTH ABOVE. THE COMPANY MAY, IN ITS SOLE AND ABSOLUTE DISCRETION, CHANGE THIS POLICY FROM TIME TO TIME BY UPDATING THIS DOCUMENT. THE COMPANY WILL POST ITS UPDATED POLICY ON SHOPEAGLE ON THIS PAGE. THE COMPANY ENCOURAGES YOU TO REVIEW THIS POLICY REGULARLY FOR ANY CHANGES. YOUR CONTINUED USE OF SHOPEAGLE AND/OR CONTINUED PROVISION OF PERSONAL INFORMATION TO US WILL BE SUBJECT TO THE TERMS OF THE THEN-CURRENT POLICY.</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>

    );
}
 
export default PrivacyPolicy;