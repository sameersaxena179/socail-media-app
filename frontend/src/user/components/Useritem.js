
import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
       {/* className="user-item__image">
                    <img src={props.image} alt={props.name} />
                </div> */}

        <Link to={`/${props.id}/places`}>
          {/* Now we won't render a link with a regular boring anchor tag though because instead, we again want to

leverage react-router-dom and make sure that we don't have a real link which would try to load a brand

new page and therefore would reload our existing page but that instead the React routing package,

react-router-dom can step in before a navigation happens, before a page reload happens and block that default

action from happening and instead have a look at our configured routes here and load the appropriate

React component,  */}
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
