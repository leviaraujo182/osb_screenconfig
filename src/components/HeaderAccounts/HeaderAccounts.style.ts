import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    list: {
        padding: 0
    },

    iconmargin: {
        marginRight: 10,
    },
    
    listitem: {
        display: 'flex',
        alignItems: 'center',
        
        "& .MuiListItemText-primary": {
            fontWeight: 500,
            fontSize: 13
        },

        "& .MuiListItemText-secondary": {
            fontWeight: 401,
            fontSize: 12
        },

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