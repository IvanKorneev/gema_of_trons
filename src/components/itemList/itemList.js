import React, {Component} from 'react';

import styled from "styled-components";

const ItemListUl = styled.ul`
       cursor: pointer;
       border-radius: 5px;
     
      li{
      cursor: pointer;
      };
      span{
      font-weight: bold;
      };
`
export default class ItemList extends Component {

    render() {
        return (
            <ItemListUl>

                <li className="list-group-item">
                    <span>John Snow</span>
                </li>
                <li className="list-group-item">
                    <span>Brandon Stark</span>
                </li>
                <li className="list-group-item">
                    <span>Dark</span>
                </li>
            </ItemListUl>
        );
    }
}