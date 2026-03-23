import { Redis } from '@upstash/redis';

// Initialize Redis using env variables from .env.development.local
const redis = Redis.fromEnv();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // Increment visitor count
      const count = await redis.incr("visits");
      return res.status(200).json({ value: count });
    }

    if (req.method === "GET") {
      // Get current visitor count (default 0 if not set)
      const count = (await redis.get("visits")) || 0;
      return res.status(200).json({ value: count });
    }

    // Method not allowed
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });

  } catch (error) {
    console.error("Redis Error:", error.message);
    return res.status(500).json({ error: "Failed to fetch visits" });
  }
}

// import { kv } from "@vercel/kv";

// export default async function handler(req, res) {
//   try {
//     // Increment visitor count
//     const count = await kv.incr("visits");

//     // Send response
//     res.status(200).json({ value: count });
//   } catch (error) {
//     console.error("KV Error:", error);
//     res.status(500).json({ error: "Failed to fetch visits" });
//   }
// }
