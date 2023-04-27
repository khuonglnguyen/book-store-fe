import styled from "styled-components";
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { GiRotaryPhone } from 'react-icons/gi';

function Footer(props) {
   return(
      <FooterBar>
         <div className="fContainer">
            <div className="aboutContent">
               <h2>About Us</h2>
               <p>A digital library created and developed in 2021, is called E-Library. with exceptional capabilities for managing both contemporary and older electronic libraries. E-Library is being successfully used in tens of thousands of institutions across the country.</p>
               <p>E-Library is based on cloud computing technology, thus users do not need to install anything in order to use the system anywhere. All they need is an Internet connection. This item is made to fully and optimally satisfy the demands of managers in library management. The System's features are created in accordance with standardized guidelines, completely satisfying the demands of the school library administration profession. A wide range of report forms are specifically provided by the library system, which successfully aids school administrators in the process of overseeing and administering the library.</p>
               <ul className="social-icon">
                  <li><a href="https://www.facebook.com/tang.weian.7"><FaFacebook className="iconAbout" /></a></li>
                  <li><a href=""><FaTwitter className="iconAbout" /></a></li>
                  <li><a href=""><AiFillInstagram className="iconAbout" /></a></li>
                  <li><a href=""><FaYoutube className="iconAbout" /></a></li>
               </ul>
            </div>

            <div className="contactContent">
               <h2>Contact</h2>
               <ul className="info">
                  <li>
                     <span><MdLocationOn className="iconContact" /></span>
                     <span>No. 160, Street 30/4, An Phu Ward, Ninh Kieu District, Can Tho City</span>
                  </li>

                  <li>
                     <span><GiRotaryPhone className="iconContact" /></span>
                     <p><a href="#">039 998 9631</a></p>
                  </li>

                  <li>
                     <span><MdEmail className="iconContact" /></span>
                     <p><a href="#">haonngcc19117@fpt.edu.vn</a></p>
                  </li>
               </ul>
            </div>
         </div>
      </FooterBar>
    );
}

export default Footer;

const FooterBar = styled.div`
   position: relative;
   width: 100%;
   height: auto;
   padding: 50px 100px;
   background: white;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;

   .fContainer{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;

      .content{
         margin-right: 30px;
      }
         
      .aboutContent{
         width: 60%;

         h2{
            position: relative;
            color: var(--color-dark);
            font-weight: bold;
            margin-bottom: 15px;

            &:before{
               content: '';
               position: absolute;
               bottom: -5px;
               left: 0;
               width: 100%;
               height: 3px;
               background: black;
            }
         }

         p{
            color: var(--color-dark);
            text-align: justify;
            margin-top: 10px;
         }

         .social-icon {
            margin-top: 20px;
            display: flex;

            li {
               list-style: none;

               a {
                  display: inline-block;
                  width: 50px;
                  height: 50px;
                  background: white;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 10px;
                  text-decoration: none;
                  border-radius: 4px;

                  &:hover{
                     background: black;
                     color: white;
                     border: 1px solid;
                  }

                  .iconAbout {
                     width: 40px;
                     height: 40px;
                  }
               }
            }
         }
      }

      .contactContent {
         width: calc(35% - 60px);
         margin-right: 0;
         
         h2 {
            position: relative;
            color: var(--color-dark);
            font-weight: bold;
            margin-bottom: 15px;

            &:before{
               content: '';
               position: absolute;
               bottom: -5px;
               left: 0;
               width: 100%;
               height: 3px;
               background: black;
            }
         }

         .info {
            position: relative;

            li {
               display: flex;
               margin-bottom: 16px;

               span:nth-child(1) {
                  color: #fff;
                  font-size: 20px;
                  margin-right: 10px;
               }

               span{
                  color: var(--color-dark);
                  text-align: justify;

                  .iconContact {
                     color: var(--color-dark);
                     background-color: white;
                  }
               }

               p {
                  a {
                     color: var(--color-dark);
                     text-decoration: none;
                  }
               }
            }
         }
      }
   }

   @media  (max-width: 768px){
      padding: 40px;

      .container {
         flex-direction: column;

         .aboutContent{
            width: 100%;

            h2{
               &:before{
                  width: 100%;
               }
            }

            .social-icon {
               margin-top: 10px;
               margin-bottom: 25px;
            }
         }

         .contactContent {
            width: 100%;
            
            h2 {
               position: relative;
               color: var(--color-dark);
               font-weight: bold;
               margin-bottom: 15px;
            }
         }
      }
   }

   @media  (max-width: 600px){
      padding: 40px;

      .container {
         flex-direction: column;

         .aboutContent{
            width: 100%;
            

            .social-icon {
               margin-top: 10px;
               margin-bottom: 25px;
            }
         }

         .contactContent {
            width: 100%;
            
            h2 {
               position: relative;
               color: var(--color-dark);
               font-weight: bold;
               margin-bottom: 15px;
            }
         }
      }
   }
`;