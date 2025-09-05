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

const codeSubmissionSchema = z.object({
    slug: z.string().min(1).max(256),
    language: z.string().min(1).max(32),
    code: z.string().min(1).max(10000),
    mode: z.enum(["prelim","test"]),
    }
);

export const judgeHandler = catchErrors(
    async (req, res) => {
        const request = codeSubmissionSchema.parse(req.body);
        const problem = await fetchProb(request.slug);

        const cases = request.mode === "prelim" ? problem.prelimCases : problem.testCases;

        const payload = {
            language: "python",
            code: "print('hi')",
            cases,
        }

        const response = await fetch('http://localhost:5001/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(payload),
        });


        // get the problem test cases using the slug (only send)
        // send everything through to microservice
        // get results
        // eval
        //send to frontend

    }
)

