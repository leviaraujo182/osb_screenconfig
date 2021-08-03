import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    listitemtext: {
        textAlign: 'center',

        "& .MuiListItemText-primary": {
            fontSize: 12,
            fontWeight: 401,
            paddingBottom: 2
        },
    },

    listmain: {
        paddingBottom: 0
    }
})