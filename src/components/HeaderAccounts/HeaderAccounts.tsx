import React from 'react'
import 
{ 
List, 
ListItem, 
ListItemText, 
ListItemAvatar, 
ListItemSecondaryAction, 
IconButton,

} from "@material-ui/core";
import { useStyles } from './HeaderAccounts.style'

interface HeaderAccountsProps {
    title: string,
    subtitle: string,
    icon: string,
    iconRight: string,
    bank: string
    
}

export const HeaderAccounts : React.FC<HeaderAccountsProps> = ({title, subtitle, icon, iconRight, bank}) => {
    const style = useStyles()

    return (
            <List className={style.list}>
                <ListItem button className={style.listitem}>
                    <ListItemAvatar className={style.itemavatar}>
                        <img src={icon} className={style.iconmargin} alt="imgleft"/>
                    </ListItemAvatar>
                    <ListItemText primary={title} secondary={
                        <div>
                            <div>{subtitle}</div>
                            <div>{bank}</div>
                        </div>
                    } />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" className={style.iconbutton}>
                            <img src={iconRight} alt="imgright" className={style.imgright}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                
            </List>
    )
}