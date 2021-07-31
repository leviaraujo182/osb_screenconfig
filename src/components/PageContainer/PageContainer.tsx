import React from 'react'
import { Container } from '@material-ui/core'
import { styles } from './PageContainer.style'

export const PageContainer : React.FC = ({ children }) => {
    const useStyles = styles()
    return (
        <Container maxWidth="xs" className={useStyles.container}>
            {children as React.ReactChildren}
        </Container>
    )
}