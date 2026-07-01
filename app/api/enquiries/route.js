import dbConnect from '../../../lib/db';
import Enquiry from '../../../models/Enquiry';

// GET - Fetch all enquiries
export async function GET() {
  try {
    await dbConnect();
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
    return Response.json({ success: true, data: enquiries });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}

// POST - Create a new enquiry
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    if (!body.name || !body.email || !body.message) {
      return Response.json({ 
        success: false, 
        error: 'Name, email, and message are required' 
      }, { status: 400 });
    }
    
    const enquiry = await Enquiry.create(body);
    return Response.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}