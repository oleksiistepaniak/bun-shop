const server = Bun.serve({
    port: 3000,
    fetch(_request: Request): Response | Promise<Response> {
        return new Response("BUN IS WORKING!")
    }
})

console.log(`Server was successfully started on the port: ${server.port}!`)