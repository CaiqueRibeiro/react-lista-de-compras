import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom'

import './CustomCard.css'

const CustomCard = (props) => (
    <div className={props.containerClass}>
        <Link to={props.link}>
            <Card className="card">
                <CardActionArea className="card-action-area">
                    {props.image &&
                    <CardMedia
                        component="img"
                        className="card-img"
                        height="100"
                        image={ props.image }
                        title="image"
                    />}
                    <CardContent className="card-content">
                        <div>
                            {props.children}
                        </div>
                    </CardContent>
                </CardActionArea>
                {props.footer && (
                    <div>
                        <Divider />
                        <CardActions className="card-footer">

                            {props.footer}

                        </CardActions>
                    </div>
                )}
            </Card>
        </Link>
    </div>
)

CustomCard.propTypes = {
    containerClass: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
    footer: PropTypes.element,
    image: PropTypes.string
}

export default CustomCard