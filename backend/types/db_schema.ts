
export enum state{
    success = 'SUCCESS',
    fail = 'FAIL'
}

export interface job_state{
    readonly _id?: string
    readonly job_id: number
    readonly job_status: string
    readonly job_name: string
    readonly job_start_time: Date
    readonly job_end_time: Date
    readonly message: string
    readonly modifier: string
    readonly modify_time: Date
    readonly mark: string
}

export interface restore_job{
    readonly _id?: string
    job_body: Array<string>
}
