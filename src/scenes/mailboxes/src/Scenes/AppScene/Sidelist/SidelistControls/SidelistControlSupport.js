import React from 'react'
import { Icon } from '@material-ui/core'
import SidelistControl from './SidelistControl'
import { TOUR_STEPS } from 'stores/settings/Tour'
import teal from '@material-ui/core/colors/teal'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = {
  icon: {
    color: teal[600],
    fontSize: '24px',
    marginLeft: -3,
    height: 48,
    width: 48,
    lineHeight: '48px',
    '&:hover': {
      color: teal[200]
    }
  }
}

@withStyles(styles)
class SidelistControlSupport extends React.Component {
  /* **************************************************************************/
  // Rendering
  /* **************************************************************************/

  render () {
    const {classes} = this.props
    return (
      <SidelistControl
        className={`WB-SidelistControlSupport`}
        onClick={() => { window.location.hash = '/settings/support' }}
        tooltip={`Help, Support & FAQs`}
        tourStep={TOUR_STEPS.SUPPORT_CENTER}
        tourTooltip={(
          <div>
            Click here to get support, find answers to<br />
            the most commonly asked questions and get<br />
            involved with the Wavebox community
          </div>
        )}
        icon={(
          <Icon className={classNames(classes.icon, 'far fa-fw fa-question-circle')} />
        )} />
    )
  }
}

export default SidelistControlSupport
