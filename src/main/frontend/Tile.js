import React from "react"
import ReactDOM from "react-dom"
import { Card, Icon} from 'semantic-ui-react'

function Tile() {
    return (
        <Card color='teal' href="https://dzone.com/articles/everything-react-tutorials-for-beginners-and-exper">
            <Card.Content header='Everything React: Tutorials for Beginners and Experts Alike' />
            <Card.Content description="Released by Facebook in 2013, React has steadily become an industry-standard library for front-end development. Per Stack Overflow's most recent Developer Survey, React sits at the top of the list for both developer's most loved and wanted web library/framework of 2019. This ..."/>
            <Card.Content extra>
                <Icon name='file alternate outline' />Article
            </Card.Content>
        </Card>
    )
}

export default Tile