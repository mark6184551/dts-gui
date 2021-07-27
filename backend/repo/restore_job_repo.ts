import { restore_job }  from "../types/db_schema"
import restore_job_schema from "../models/restore_job_schema"
import * as TE from 'fp-ts/TaskEither'
import * as O from 'fp-ts/lib/Option'

interface restore_job_interface{
    getjob(): Promise<Array<restore_job>>
    addjob(job_body: restore_job): Promise<restore_job>

}

class restore_job_imp implements restore_job_interface{
    private conststructor(){

    }

    static of(): restore_job_imp{
        return new restore_job_imp
    }
    getjob(): Promise<Array<restore_job>>{
        return restore_job_schema.find()
    }

    addjob(job_body: restore_job): Promise<restore_job>{
        return restore_job_schema.create(job_body)
    }
}

export default restore_job_imp