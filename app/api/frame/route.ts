import { NextRequest, NextResponse } from "next/server";
import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';


export async function POST(req: NextRequest) {
    const body: FrameRequest = await req.json();
    
    const imageUrl = "https://drakula-view.vercel.app/submain.png";
    let fid = body.untrustedData.fid
    const postUrl = `https://drakula-view.vercel.app/frame/pre-redirect/?fid=${fid}`;
    
  return new NextResponse(
    `<!DOCTYPE html><html><head>
    <title>View on Drakula</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="of:accepts:xmtp" content="2024-02-01" /> 
    <meta property="og:image" content="${imageUrl}"/>
    <meta property="fc:frame:image" content="${imageUrl}"/>
    <meta property="fc:frame:button:1" content="View" />
    <meta property="fc:frame:button:1:action" content="post_redirect"/>
    <meta property="fc:frame:button:2" content="Trending" />
    <meta property="fc:frame:button:2:action" content="post_redirect"/>
    <meta property="fc:frame:post_url" content="${postUrl}"/>
    </head></html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    },
  );
}

export const GET = POST;



