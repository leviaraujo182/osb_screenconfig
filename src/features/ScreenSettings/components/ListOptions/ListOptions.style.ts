import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    listitemtext: {
        textAlign: 'center',

        "& .MuiListItemText-primary": {
            fontSize: 12,
            fontWeight: 400
        }
    }
})