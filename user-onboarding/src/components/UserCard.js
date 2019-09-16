import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const UserCard = (props) => (
    <Card>
        <div className="card-item">
            <h2>{props.user.name}</h2>
            <hr />
            <p><Icon name='key' />: {props.user.password}</p>
            <p><Icon name='mail' />: {props.user.email}</p>
            <p><Icon name="briefcase" />: {props.user.role} </p>
        </div>
    </Card>
)

export default UserCard