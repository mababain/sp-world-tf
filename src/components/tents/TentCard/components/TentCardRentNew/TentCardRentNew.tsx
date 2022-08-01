import React, { useState } from 'react'
import { Button } from '../../../../Button/Button'
import { Modal } from '../../../../Modal/Modal'
import { Tent } from '../../../module'
import { TentCardRentForm } from '../TentCardRentForm/TentCardRentForm'

interface Props {
  tent: Tent
}

export const TentCardRentNew: React.FC<Props> = ({ tent }) => {
  const [isModalOpen, setModalState] = useState<Boolean>(false)
  const tentNumber = tent.id + 1

  return (
    <>
      <Button onClick={() => setModalState(true)}>Арендовать</Button>
      {isModalOpen && (
        <Modal
          closeModal={() => setModalState(false)}
          title={`Арендовать палатку №${tentNumber}`}
        >
          <TentCardRentForm tentId={tent.id} rentType={'NEW'} />
        </Modal>
      )}
    </>
  )
}

TentCardRentNew.displayName = 'TentCardRentNew'
