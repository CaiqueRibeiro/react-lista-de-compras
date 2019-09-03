import React from 'react'
import CustomCard from '../common/CustomCard'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import ListItem from './ListItem'
import ListFooter from './ListFooter'

import './List.css'

const List = (props) => (
    <CustomCard containerClass="list-container" footer={<ListFooter total={props.total}/>} link="/lista">
        <div>
            <p className="title">{props.list}</p>
            <div className="list-card-body">
                <ListItem icon={faShoppingBasket} text={`${props.opened} Item(s) restante(s)`}/>
                <ListItem icon={faCheck} text={`${props.closed} Item(s) comprado(s)`}/>
            </div>
        </div>
    </CustomCard>
)

export default List