import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { FastifyCookieOptions } from 'fastify-cookie'
import { Server, IncomingMessage, ServerResponse, request } from 'http'
import mongoos from "mongoose"
import restore_job_schema from './models/restore_job_schema'
import { establishConnection } from './plugins/mongodb'
import restore_job_route  from './routes/restore_job_route'
import { FastifyPort, EnvConfigRepoImpl, RuntimeEnv } from '../repo/config-repo'

// Require the framework and instantiate it


const server = fastify({
  logger: {prettyPrint : true}
})


const startFastify:(port: FastifyPort) => FastifyInstance<Server, IncomingMessage, ServerResponse> = (port) => {
  server.register(require('fastify-cors'),{})
  server.listen(port, (err, _) =>{
    if(err){
      console.error(err)
      process.exit(0)
    }
    establishConnection()
  })
  

  server.register(restore_job_route)
  //server.register(job_state_route)
  return server
}
export{startFastify}