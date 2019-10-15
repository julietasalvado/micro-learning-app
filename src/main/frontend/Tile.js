import React from "react"
import ReactDOM from "react-dom"
import { Card, Icon} from 'semantic-ui-react'

function Tile(props) {
    return (
        <Card color='teal' href={props.url}>
            <Card.Content header={props.header} />
            <Card.Content description={props.body} />
            <Card.Content extra>
                <Icon name='file alternate outline' />Article
            </Card.Content>
        </Card>
    )
}

export default Tile