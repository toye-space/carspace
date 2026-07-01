import dbConnect from '../../../lib/db';
import Car from '../../../models/Car';

export async function GET() {
  try {
    const conn = await dbConnect();
    console.log('Database connected:', !!conn);
    
    const cars = await Car.find({}).sort({ createdAt: -1 });
    return Response.json({ success: true, data: cars });
  } catch (error) {
    console.error('GET /api/cars error:', error);
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 400 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    if (!body.name || !body.price) {
      return Response.json({ 
        success: false, 
        error: 'Name and price are required' 
      }, { status: 400 });
    }
    
    const car = await Car.create(body);
    return Response.json({ success: true, data: car }, { status: 201 });
  } catch (error) {
    console.error('POST /api/cars error:', error);
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 400 });
  }
}