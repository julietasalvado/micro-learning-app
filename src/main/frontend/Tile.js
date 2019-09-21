import React from "react"
import ReactDOM from "react-dom"
import { Card, Icon} from 'semantic-ui-react'

function Tile(props) {
    return (
        <Card color='teal' href={props.content.url}>
            <Card.Content header={props.content.header} />
            <Card.Content description={props.content.body} />
            <Card.Content extra>
                <Icon name='file alternate outline' />Article
            </Card.Content>
        </Card>
    )
}

export default Tile