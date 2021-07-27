import axios, { AxiosResponse } from 'axios'
import { restore_job } from '../../backend/types/db_schema'

const getjob_ = async(): Promise<AxiosResponse<Array<restore_job>>> =>{
    try {
        const job = await axios.get('/api/job')
        return job
    } catch (error) {
        console.error(`GET /api/job ERROR: ${error}`)
        throw new Error(error)
    }
}
const addjob_ = async (jobBody: restore_job): Promise<AxiosResponse<restore_job>> => {
    try {
        const newjob = {
            ...jobBody
        }
        const job = await axios.post('/api/job', newjob)
        return job
    } catch (error) {
        console.error(`POST /api/job ERROR: ${error}`)
        throw new Error(error)
    }
}
export {getjob_, addjob_}