import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Menu.css";
import IconButton from "../IconButton/IconButton";

const hasGroupChildren = (item) => {
  return item.children && item.children.some((child) => child.children);
};

const Menu = ({ items }) => {
  const [displayChildren, setDisplayChildren] = useState({ Main: true });

  return (
    <ul className="menu-container">
      {items.map((item) => {
        const isGroupWithChildren = hasGroupChildren(item);

        return (
          <li key={item.title}>
            <div className="menu-item">
              <Link to={`/${item.id}`}>
                <span>{item.title}</span>
              </Link>
              {isGroupWithChildren && (
                <IconButton
                  className="menu-fold-btn"
                  onClick={() => {
                    setDisplayChildren({
                      ...displayChildren,
                      [item.title]: !displayChildren[item.title],
                    });
                  }}
                >
                  {displayChildren[item.title] ? (
                    <CiCircleMinus size={20} />
                  ) : (
                    <CiCirclePlus size={20} />
                  )}
                </IconButton>
              )}
            </div>

            {displayChildren[item.title] && isGroupWithChildren && (
              <Menu items={item.children.filter((child) => child.children)} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
