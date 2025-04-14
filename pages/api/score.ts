import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { url } = req.body;

    // Placeholder for the AI scoring logic
    const result = {
      url,
      aiDisplacementScore: 0.42, // sample value
      message: 'Scoring logic will go here.'
    };

    res.status(200).json(result);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
