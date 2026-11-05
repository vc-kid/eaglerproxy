import { EaglerProxyConfig } from "./src/proxy/Protocol";

export const config: EaglerProxyConfig = {
    // The IP/Host and Port of the proxy itself
    bindHost: "0.0.0.0",
    bindPort: 8080,
    
    // Max players allowed to connect to the proxy concurrently
    maxPlayers: 20,
    
    // The message of the day (MOTD) displayed on the Eaglercraft multiplayer menu
    motd: {
        icon: "server-icon.png", // Must be in the root directory, or leave empty
        l1: "§6§lEaglerProxy Server§r",
        l2: "§aHosted on Render!"
    },

    // The BACKEND Minecraft server the proxy connects to
    server: {
        host: "antelope.aternos.host",
        port: 25122
    },

    // Security and severe network level settings
    security: {
        // Rate limiting to prevent crash attempts / spams
        maxConnectionsPerIp: 3,
        clientTimeout: 10000
    },

    // Native performance optimizations
    adapter: {
        useNatives: false // Set to false for environments like Render to prevent crashes
    }
};
