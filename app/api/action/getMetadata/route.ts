import { NextRequest, NextResponse } from 'next/server';
import { getResponsePOST } from '@/app/postAction';
import { getResponseGET } from '@/app/getAction';

/**
 * 
 * url_add_castAction: https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Fdrakula-view.vercel.app%2Fapi%2Faction%2FgetMetadata
 * 
*/
async function getResponse(req: NextRequest): Promise<NextResponse> {
   if (req.method == 'GET') {
        return getResponseGET(req)
   }
   if (req.method == 'POST') {
        return getResponsePOST(req)
   }

   return getResponsePOST(req) 
}


export async function GET(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}
  
export const dynamic = 'force-dynamic';

