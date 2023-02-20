import { useState } from "react";
import style from "../../assets/styles/profile-box.module.css";

const ProfileBox = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl = `url(${user.avatar_url})`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      key={user.id}
      className={style.card}
      style={{
        background: imageUrl,
        backgroundRepeat: "no-repeat",
        backgroundPosition: isHovered ? "left center" : "center",
        backgroundSize: isHovered ? "600px" : "300px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={style.border}>
        <h2>
          {user.id} - {user.login}
        </h2>
      </div>
    </li>
  );
};

export default ProfileBox;
