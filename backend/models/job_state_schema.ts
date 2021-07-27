import  mongoose  from "mongoose";

const Schema = mongoose.Schema

const job_state = new Schema(
    {
        job_id: { type: Number , require: true , unique: true},
        job_status: { type: String, require: true },
        job_name: { type: String, require: true },
        job_start_time: { type: Date, require: true },
        job_end_time: { type: Date, require: true },
        message: { type: String, require: true },
        modifer_time:{ type: Date, require: true},
        modifier: { type: String, require: true },
        mark: { type: String, require: true }
    },
    {
        timestamps: true
    }
)
export default mongoose.model('job_state',job_state)