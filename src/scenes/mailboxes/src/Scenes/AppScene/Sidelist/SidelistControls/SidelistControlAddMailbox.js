import React from 'react'
import SidelistControl from './SidelistControl'
import { TOUR_STEPS } from 'stores/settings/Tour'
import blueGrey from '@material-ui/core/colors/blueGrey'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  icon: {
    color: blueGrey[400],
    '&:hover': {
      color: blueGrey[200]
    }
  }
}

@withStyles(styles)
class SidelistControlAddMailbox extends React.Component {
  /* **************************************************************************/
  // Rendering
  /* **************************************************************************/

  render () {
    const { classes } = this.props
    return (
      <SidelistControl
        className={`WB-SidelistControlAddMailbox`}
        onClick={() => { window.location.hash = '/mailbox_wizard/add' }}
        tooltip='Add Account'
        tourStep={TOUR_STEPS.ADD_ACCOUNT}
        tourTooltip={(
          <div>
            Click here to add your next account and take<br />
            full advantage of everything Wavebox has to offer
          </div>
        )}
        icon={(<AddCircleIcon className={classes.icon} />)} />
    )
  }
}

export default SidelistControlAddMailbox
