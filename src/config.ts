// This folder contains options for both the bridge and networking adapter.
// Environment files and .env files are available here. Set the value of any config option to process.env.<ENV name>

import { Config } from "./launcher_types.js";

export const config: Config = {
  adapter: {
    name: "EaglerProxy",
    bindHost: "0.0.0.0",
    bindPort: 8080,
    maxConcurrentClients: 20,
    
    // FIXED: Changed to false to prevent Node v24 from hanging on image libraries
    useNatives: false, 
    
    skinServer: {
      skinUrlWhitelist: undefined,
      cache: {
        useCache: true,
        folderName: "skinCache",
        skinCacheLifetime: 60 * 60 * 1000,
        skinCachePruneInterval: 10 * 60 * 1000,
      },
    },
    // FIXED: Static MOTD setup to bypass the Aternos firewall block
    motd: {
      iconURL: "motd.png", 
      l1: "§aMy Eaglercraft Server",
      l2: "§7Hosted via Render",
    }, 
    ratelimits: {
      lockout: 10,
      limits: {
        http: 100,
        ws: 100,
        motd: 100,
        skins: 1000, 
        skinsIp: 10000,
        connect: 100,
      },
    },
    origins: {
      allowOfflineDownloads: true,
      originWhitelist: null,
      originBlacklist: null,
    },
    server: {
      host: "USER16434.aternos.me",
      port: 25122 // Double-check your Aternos panel to make sure this port number is currently active!
    },
    tls: undefined,
  },
};
