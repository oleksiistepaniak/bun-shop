import {expect, test, describe} from "bun:test"
import {server} from "../../index.ts";

describe("root api test", () => {
    test("should return BUN IS WORKING!", async () => {
        const resp = await server.fetch("/");
        const text = await resp.text();

        expect(resp.status).toBe(200);
        expect(text).toBe("BUN IS WORKING!");
    })
});