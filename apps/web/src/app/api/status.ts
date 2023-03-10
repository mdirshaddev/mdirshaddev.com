import type { NextApiRequest, NextApiResponse } from 'next';

export default async function Status(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json({
        status: 'Server is up and running'
      });
    } else {
      return res.status(403).json({
        status: 'Only Get Request allowed'
      });
    }
  } catch (e) {
    res.status(500).json({
      status: '',
      errorMessage: e
    });
  }
}
