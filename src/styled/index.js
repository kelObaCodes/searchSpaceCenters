import styled , {keyframes} from 'styled-components'
import rocketImage from '../images/assets/icons/rocket.png';
import activeMapIcon from '../images/assets/icons/active-marker.png';
import inActiveMapIcon from '../images/assets/icons/pointer.png';
import spaceImage from '../images/assets/icons/space_image.png';

const SlideIn = keyframes`
0% { -webkit-transform: translateY(100%); opacity: 1 }
100% { -webkit-transform: translateY(0); opacity: 1  }
`;


export const ParentDiv = styled.div`

`
export const NotificationBar = styled.div`
top:80%;
left:70%;
min-height:30px;
padding:20px;
position:fixed;
border-radius:20px;
background-color:#fff;
display:flex;
align-items:center;
animation: ${SlideIn} .6s;
z-index:120;
@media (max-width: ${591}px) {
    padding:5px;
    font-size:12px;
    min-width:200px;
    left:30%;
    top:60%;
    justify-content:center;
   }  
`
export const MenuBar = styled.div`
display: flex;
min-height: 80px;
background-color:#fff;
position:sticky;
top:0px;
z-index:20;
`
export const PageHeaderDiv = styled.div`
flex-basis: 30%;
display: flex;
align-items: center;
justify-content: flex-start;
box-shadow: 0px 2px 4px rgb(48 53 91 / 15%);
z-index: 2;
background-color:#fff;

@media (max-width: ${591}px) {
    flex-basis:40% ;
    font-size:10px;
   }  
`
export const HeaderText = styled.h3`
letter-spacing: 5px;
padding-left: 30px;
@media (max-width: ${591}px) {
    padding-left: 20px;
   }  
`
export const SpaceName = styled.h5`

`
export const MenuBarSearch = styled.div`
flex-basis:70% ;
background-color: #000;
display: flex;
align-items: center;
@media (max-width: ${591}px) {
    flex-basis:60% ;
   }  
`
export const ListSection = styled.div`
display: flex;
@media (max-width: ${991}px) {
   flex-direction:column
  }   
`
export const FlexDiv = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
`
export const ListSectionSideBar = styled.div`
flex-basis: 30%;
display: flex;
flex-direction: column;
height: 90vh;
overflow: hidden;
scroll-behavior: smooth;
overflow-y: scroll;

@media (max-width: ${991}px) {
    order:  1;
    flex-direction:row;
    overflow-x:scroll;
   }   
`
export const SingleListCover = styled.div`
margin: 20px 30px;
@media (max-width: ${991}px) {
 margin:10px;
 margin-top:20px;
 min-width:320px
   }   
`
export const SingleListWhiteBg = styled.div`
min-height: 120px;
color:#000;
background-color: #fff;
padding: 20px;
box-shadow: 0px 2px 4px rgb(48 53 91 / 15%);

`

export const RocketImg = styled.img.attrs({
    src: `${rocketImage}`
  })`
  `;
export const SpaceImage = styled.img.attrs({
    src: `${spaceImage}`
  })`
  `;
export const ActiveMapIcon = styled.img.attrs({
    src: `${activeMapIcon}`
  })`
  `;
export const InActiveMapIcon = styled.img.attrs({
    src: `${inActiveMapIcon}`
  })`
  `;

export const Ptag = styled.p`

`
export const HfourTag = styled.h4`

`
export const ListSideBarMap = styled.div`
flex-basis: 70%;

@media (max-width: ${991}px) {
    order:  0;
   }   
`
export const MapBtn = styled.button`
border: none;
  background-color: transparent;
  cursor: pointer;
`
export const PopUpDiv = styled.div`
text-align:center;
`
export const SingleListFlight = styled.div`
background-color: #333;
min-height: 50px;
box-shadow: 0px 2px 4px rgb(48 53 91 / 15%);
display: flex;
color: #D8D8D8;
align-items: center;
justify-content: center;
`

