'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { addEntry } from '@/app/_actions'

import styles from './ContactForm.module.css'

const FormDataSchema = z.object({
  name: z.string(),
  subject: z
    .string()
    .min(1, { message: 'Subject must be at least 6 characters.' }),
  email: z
    .string()
    .min(6, { message: 'Message must be at least 6 characters.' }),
  message: z
    .string()
    .min(6, { message: 'Message must be at least 6 characters.' }),
})

type Inputs = z.infer<typeof FormDataSchema>

export default function ContactForm() {
  const [data, setData] = useState<Inputs>()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await addEntry(data)

    if (!result) {
      console.log('Something went wrong')
      return
    }

    if (result.error) {
      // set local error state
      console.log(result.error)
      return
    }

    reset()
    setData(result.data)
  }

  return (
    <section className={styles.formContainer}>
      <form
        onSubmit={handleSubmit(processForm)}
        className={styles.form}
      >
        <div className={styles.topFormInputs}>
          <input
            placeholder='name'
            className={styles.inputField}
            {...register('name')}
          />
          {errors.name?.message && (
            <p className={styles.errorText}>{errors.name.message}</p>
          )}

          <input
            placeholder='email'
            className={styles.inputField}
            {...register('email')}
          />
          {errors.email?.message && (
            <p className={styles.errorText}>{errors.email.message}</p>
          )}
        </div>




        <input
          placeholder='subject'
          className={styles.inputField}
          {...register('subject')}
        />
        {errors.subject?.message && (
          <p className={styles.errorText}>{errors.subject.message}</p>
        )}

        <input
          placeholder='message'
          className={styles.inputField}
          {...register('message')}
        />
        {errors.message?.message && (
          <p className={styles.errorText}>{errors.message.message}</p>
        )}

        <button className={styles.submitButton}>Submit</button>
      </form>

      {data && 
      <>
        <h2>Data ready to be sent on servers 📧🚀</h2>
      <div className={styles.resultContainer}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      </>
      }
    </section>
  )
}