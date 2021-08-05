import { makeStyles } from '@material-ui/core'
import { textColors } from '_config/themes'

export const useStyles = makeStyles({
    list: {
        padding: 0,

        "& .MuiListItem-gutters": {
            paddingLeft: 8
        }
    },

    iconmargin: {
        marginRight: 10,
    },
    
    listitem: {
        display: 'flex',
        alignItems: 'center',
        
        "& .MuiListItemText-primary": {
            fontWeight: 500,
            fontSize: 13,
            color: textColors.gray
        },

        "& .MuiListItemText-secondary": {
            fontWeight: 400,
            fontSize: 12,
            color: textColors.gray
            
        },

    },

    imgright: {
        width: 25,
        height: 25
    },

    iconbutton: {
        padding: 0,
        paddingRight: 5
    },

    itemavatar: {
        marginRight: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    }

})