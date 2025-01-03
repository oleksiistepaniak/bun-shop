import type {Server} from "bun";

export let server: Server;

export function startServer() {
    server = Bun.serve({
        port: 3000,
        fetch(): Response | Promise<Response> {
            return new Response("BUN IS WORKING!");
        }
    });

    console.log(`Server was successfully started on the port: ${server.port}!`);
}

startServer();