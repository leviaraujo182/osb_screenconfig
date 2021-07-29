import React from 'react'
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { useStyles } from './HeaderAccounts.style'



interface HeaderAccountsProps {
    title: string,
    subtitle: string,
    icon: string,
    iconRight: string
}

export const HeaderAccounts : React.FC<HeaderAccountsProps> = ({title, subtitle, icon, iconRight}) => {
    const style = useStyles()
    return (
            <List className={style.list}>
                <ListItem button className={style.listitem}>
                    <ListItemAvatar>
                        <img src={icon} className={style.iconmargin}/>
                    </ListItemAvatar>
                    <ListItemText primary={title} secondary={subtitle} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end">
                            <img src={iconRight} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
    )
}