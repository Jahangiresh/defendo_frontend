import React from "react";
import { useSelector } from "react-redux";
import vekilPng from "../assets/images/vekilPng.png";
import "../assets/css/advocatecard.scss";
import { Link } from "react-router-dom";
import HeaderDown from "./header/HeaderDown";
import mapPng from "../assets/images/mapSvg.svg";
import phonePng from "../assets/images/phoneSvg.svg";
import messagePng from "../assets/images/messageSvg.svg";
const AdvocateCard = () => {
  const { items, status } = useSelector((state) => state.advocates);
  // console.log(items);

  return status === "pending" ? (
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam
      natus libero voluptatem id impedit sit, nostrum quidem earum ad cupiditate
      temporibus quibusdam voluptates deserunt placeat, nesciunt dolorem
      assumenda molestiae.z
    </h1>
  ) : (
    <div className="advocatecard__slider__card__row row">
      {items &&
        items.map((item) => (
          <Link
            to={`/team/${item.id}`}
            key={item.id}
            className="advocatecard__slider__card team__links col-3"
          >
            <div className="advocatecard__slider__card__image">
              <img src={vekilPng} alt="" />
              <ul className="advocatecard__slider__card__image__ul">
                <li>
                  <img src={mapPng} alt="" /> Ak. Həsən Əliyev 82F
                </li>
                <li>
                  <img src={phonePng} alt="" /> +994 50 555-55-55
                </li>
                <li>
                  <img src={messagePng} alt="" /> officedefendo@gmail.com
                </li>
              </ul>
            </div>
            <div className="advocatecard__slider__card__name">
              {item.firstName}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default AdvocateCard;
// return (
//   <>
//     <div className="advocatecard__slider__card__row row">
//       {status === "pending" ? (
//         <h1>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex
//           nostrum debitis maiores?
//         </h1>
//       ) : (
//         items &&
//         items.map((item) => (
//           <Link
//             to={`/team/${item.id}`}
//             key={item.id}
//             className="advocatecard__slider__card team__links col-3"
//           >
//             <div className="advocatecard__slider__card__image">
//               <img src={vekilPng} alt="" />
//             </div>
//             <div className="advocatecard__slider__card__name">
//               {item.name}
//             </div>
//           </Link>
//         ))
//       )}
//     </div>
//   </>
// )
