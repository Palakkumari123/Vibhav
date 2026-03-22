import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  try {
    // Increment visitor count
    const count = await kv.incr("visits");

    // Send response
    res.status(200).json({ value: count });
  } catch (error) {
    console.error("KV Error:", error);
    res.status(500).json({ error: "Failed to fetch visits" });
  }
}
