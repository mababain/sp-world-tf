import React from 'react'
import { Formik } from 'formik'
import classes from './TentCardRentForm.module.css'
import { Button } from '../../../../Button/Button'
import { useUser } from '../../../../../store/hooks'
import { RentType, serverAPI } from '../../../../../store/services/ServerApi'
import { getPriceByDays } from '../../../utils'

interface Props {
  tentId: number
  rentType: RentType
}

export const TentCardRentForm: React.FC<Props> = ({ tentId, rentType }) => {
  const [user] = useUser()
  const [getPaymentLink] = serverAPI.useGetPaymentLinkMutation()

  return (
    user && (
      <Formik
        initialValues={{ countDays: '' }}
        validate={({ countDays }) => {
          const errors: Record<string, any> = {}
          if (!countDays) {
            errors.countDays = 'Введите количество дней'
          } else if (+countDays <= 0) {
            errors.countDays = 'Введите положительное значение'
          }
          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const { countDays } = values

          try {
            const paymentLink = await getPaymentLink({
              tentId,
              countDays: +countDays,
              rentType,
            }).unwrap()
            window.location.assign(paymentLink)
          } catch (e) {
            console.log(e)
          }

          setSubmitting(false)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.inputRow}>
              <span className={classes.inputText}>Количество дней:</span>
              <input
                className={classes.numberInput}
                type={'number'}
                max={999}
                min={1}
                name={'tentCardRentFormNumber'}
                onChange={handleChange('countDays')}
                onBlur={handleBlur}
                value={values.countDays}
              />
            </div>
            {errors.countDays ? (
              <div className={classes.errorText}>{errors.countDays}</div>
            ) : (
              <div className={classes.priceWrapper}>
                Стоимость:{' '}
                <span className={classes.price}>
                  {getPriceByDays(+values.countDays, user.streak)} AP
                </span>
              </div>
            )}
            <Button
              className={classes.formButton}
              type={'submit'}
              disabled={isSubmitting}
            >
              Оплатить
            </Button>
          </form>
        )}
      </Formik>
    )
  )
}

TentCardRentForm.displayName = 'TentCardRentForm'
