import React, { useState } from 'react'
import { Button } from '../../../../Button/Button'
import { Modal } from '../../../../Modal/Modal'
import { Tent } from '../../../module'
import { TentCardRentForm } from '../TentCardRentForm/TentCardRentForm'

interface Props {
  tent: Tent
}

export const TentCardRentAdd: React.FC<Props> = ({ tent }) => {
  const [isModalOpen, setModalState] = useState<Boolean>(false)
  const tentNumber = tent.id + 1

  return (
    <>
      <Button onClick={() => setModalState(true)}>Продлить</Button>
      {isModalOpen && (
        <Modal
          closeModal={() => setModalState(false)}
          title={`Продлить палатку №${tentNumber}`}
        >
          <TentCardRentForm tentId={tent.id} rentType={'ADD'} />
        </Modal>
      )}
    </>
  )
}

TentCardRentAdd.displayName = 'TentCardRentAdd'
