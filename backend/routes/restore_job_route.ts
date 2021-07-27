import { restore_job }  from "../types/db_schema"
import restore_job_schema from "../models/restore_job_schema"
import restore_job_imp from "../repo/restore_job_repo"
import { FastifyInstance, RouteShorthandOptions, FastifyReply } from 'fastify'

const restore_job_route =  (server: FastifyInstance, opts: RouteShorthandOptions, done: (error?: Error) => void) => {
    const restore_repo:restore_job_imp = restore_job_imp.of()

    type Err = {
        code: number
        msg: string
      }

    const ErrOf: (code: number, msg: string) => Err = (code, msg) => ({
        code: code,
        msg: msg
      })

    server.get('/restore_job', opts, async (request, reply) => {
        try {
            const job: Array<restore_job> = await restore_repo.getjob()
            return reply.status(200).send({ job })
        } catch (error) {
            console.error(`GET /job Error: ${error}`)
            return reply.status(500).send(`[Server Error]: ${error}`)
        }
    })

    server.post('/restore_job', opts, async (request, reply) => {
        try {
            const job_body: restore_job = request.body as restore_job
            const job: restore_job = await restore_repo.addjob(job_body)
            return reply.status(201).send({ job })
        } catch (error) {
            console.error(`POST /job Error: ${error}`)
            return reply.status(500).send(`[Server Error]: ${error}`)
        }
    })
}
export default restore_job_route