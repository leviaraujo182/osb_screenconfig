import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './ListOptions.style'

export const ListOptions : React.FC = () => {
    const styles = useStyles()
    return (
       <List className={styles.listmain}>
           <ListItem button divider>
               <ListItemText className={styles.listitemtext}>
                   Informações Pessoais
               </ListItemText>
           </ListItem>
           <ListItem button divider className={styles.listitemtext}>
               <ListItemText>
                   Gerenciar Contas
               </ListItemText>
           </ListItem>
           <ListItem button divider className={styles.listitemtext}>
               <ListItemText>
                   Gerenciar Cartões
               </ListItemText>
           </ListItem>
           <ListItem button divider className={styles.listitemtext}>
               <ListItemText>
                   Ajuda
               </ListItemText>
           </ListItem>

           <ListItem button className={styles.listitemtext}>
               <ListItemText>
                   Sair da conta
               </ListItemText>
           </ListItem>
        
       </List>
    )
}