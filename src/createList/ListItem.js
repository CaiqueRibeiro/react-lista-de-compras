import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

import CustomCard from '../common/CustomCard'
import ListItemFooter from './ListItemFooter'


class ListItem extends React.Component {

        render() {
            return (
                <CustomCard
                    link="#"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvj7-ApFLUcwB9Slczr6dal1raDUB2VqIJ43YVUiubP9yhMVC"
                    containerClass="list-item"
                    footer= { <ListItemFooter deleteProduct={this.props.deleteProduct} item={this.props.item}/> }
                >
                    <div>
                        <div className="list-item-header">
                            <Typography variant="subtitle1" component="h2">{this.props.item.product}</Typography>
                            <Checkbox onClick={() => this.props.toggleProduct(this.props.item.id)} checked={this.props.item.checked}/>
                        </div>
                        <Typography component="p">{this.props.item.quantity} Unidade</Typography>
                        <Typography component="p">{this.props.item.price && `R$ ${this.props.item.price}`}</Typography>
                    </div>
                </CustomCard>
            )
        }
}

export default ListItem