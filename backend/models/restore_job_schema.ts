import mongoose from 'mongoose'


const Schema = mongoose.Schema

const restore_job = new Schema(
    {
        _id:{type: Schema.Types.ObjectId,
            index: true,
            required: true,
            auto: true},
        job_body:{ type: Array, require: true }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('restore_job',restore_job)
