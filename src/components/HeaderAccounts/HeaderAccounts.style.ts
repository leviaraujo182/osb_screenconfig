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
            fontWeight: 500
        },

        "& .MuiListItemText-secondary": {
            fontWeight: 400
        }


    },

})