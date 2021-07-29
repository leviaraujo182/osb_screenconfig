import React from 'react'
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";
import { useStyles } from './HeaderAccounts.style'


interface HeaderAccountsProps {
    title: string,
    subtitle: string,
    icon: string
}

export const HeaderAccounts : React.FC<HeaderAccountsProps> = ({title, subtitle, icon}) => {
    const style = useStyles()
    return (
            <List className={style.list}>
                <ListItem button className={style.listitem}>
                    <ListItemAvatar>
                        <img src={icon} className={style.iconmargin}/>
                    </ListItemAvatar>
                    <ListItemText primary={title} secondary={subtitle} />
                </ListItem>
            </List>
    )
}