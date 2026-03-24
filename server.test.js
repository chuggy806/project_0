const request = require("supertest")
const app = require("./server")
const Test = require("supertest/lib/test");
const expectCookies = require("supertest/lib/cookies");

test("POST /companies returns success text", async () => {
    const response = await request(app)
    .post("/companies")
    .send({ id: "Company1id",
            name: "company1",
            isActive: true
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe("Request Successful")
});