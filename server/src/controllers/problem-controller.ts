import z from "zod";
import catchErrors from "../utils/catchErrors.js";
import { fetchAllProbs, fetchProb } from "../services/problem-service.js";

export const fetchAllHandler = catchErrors(
    async (req, res) => {
        return res.json(await fetchAllProbs()).status(200);
    }
);

const slugSchema = z.object({slug: z.string().min(1)});

export const fetchOneHandler = catchErrors(
    async (req, res) => {

        const request = slugSchema.parse(req.params);

        return res.json(await fetchProb(request.slug)).status(200);
    }
)

