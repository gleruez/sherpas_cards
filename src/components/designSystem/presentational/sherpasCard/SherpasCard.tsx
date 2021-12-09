import { VFC } from 'react'
import { useIntl } from 'react-intl'
import { CardContent } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'

import BasicCard from '@Components/designSystem/components/basicCard/BasicCard'
import BodyTitle from '@Components/designSystem/components/bodyTitle/BodyTitle'
import Button from '@Components/designSystem/components/button/Button'
import HeaderTitle from '@Components/designSystem/components/headerTitle/HeaderTitle'
import { Mode } from '@Components/designSystem/components/mea/Mea.types'
import Separator from '@Components/designSystem/components/separator/Separator'
import Services from '@Components/designSystem/components/services/Services'

import * as styles from './styles'

export type SherpasCardProps = {
  date: string
  degree: string
  endHour: string
  mode: Mode
  startHour: string
  title: string
  url: string
  acceptBooking: () => void
  cancelBooking: () => void
  updateBooking: () => void
}

const SherpasCard: VFC<SherpasCardProps> = ({
  date,
  degree,
  endHour,
  mode,
  startHour,
  title,
  url,
  acceptBooking,
  cancelBooking,
  updateBooking,
}) => {
  const { formatMessage } = useIntl()

  const getBorderColor = () => {
    switch (mode) {
      case 'ACCEPTED':
        return '#5EC69B'
      case 'REFUSED':
        return '#F00011'
      case 'IN_PROGRESS':
      default:
        return undefined
    }
  }

  return (
    <BasicCard borderColor={getBorderColor()} css={styles.card}>
      {mode === 'IN_PROGRESS' && <HeaderTitle />}
      <CardContent css={styles.cardContent}>
        <BodyTitle date={date} mode={mode} title={title} />
        <Separator />
        <Services date={date} degree={degree} startHour={startHour} endHour={endHour} url={url} />
        <Separator />
        <div css={styles.buttons}>
          {mode === 'REFUSED' && (
            <Button css={styles.buttonDeleted} onClick={cancelBooking}>
              <DeleteIcon />
            </Button>
          )}
          <Button css={styles.buttonUpdated} onClick={updateBooking}>
            {formatMessage({ id: 'buttonUpdated' })}
          </Button>
          {mode === 'IN_PROGRESS' && (
            <Button css={styles.buttonAccepted} onClick={acceptBooking}>
              {formatMessage({ id: 'buttonAccepted' })}
            </Button>
          )}
        </div>
      </CardContent>
    </BasicCard>
  )
}

export default SherpasCard
