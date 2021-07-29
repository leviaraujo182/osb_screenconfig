import React from 'react'
import { Container } from '@material-ui/core'

export const PageContainer : React.FC = ({ children }) => {
    return (
        <Container maxWidth="xs">
            {children as React.ReactChildren}
        </Container>
    )
}