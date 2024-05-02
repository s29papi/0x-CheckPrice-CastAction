import { NextRequest, NextResponse } from 'next/server';
import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';

type ActionFrame = {
    type: string;
    frameUrl: string;
}

type Message = {
    message: string;
}

const HOST = process.env["HOST"] || "https://yoink.terminally.online";

export async function getResponsePOST(req: NextRequest): Promise<NextResponse> {
    const body: FrameRequest = await req.json();
    const { isValid } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

    if (!isValid) {
        return new NextResponse('Message not valid', { status: 500 });
    }

    let actionFrame: ActionFrame = {
        type: "frame",
        frameUrl: "https://drakula-view.vercel.app/frame"
    }

    // "https://drakula-view.vercel.app/frame"

    let message: Message = {
        message: 'At that time'
    }

    return NextResponse.json({ type: "frame", frameUrl: "https://drakula-view.vercel.app/api/frame" });
}

