import fastify from 'fastify'
import { randomUUID } from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  /* const transaction = await knex('transactions')
    .insert({
      id: randomUUID(),
      title: 'Transação de Teste',
      value: 1000,
    })
    .returning('*') */

  // const transactions = await knex('transactions').select('*')

  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
