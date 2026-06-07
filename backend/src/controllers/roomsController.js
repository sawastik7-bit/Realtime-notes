import Rooms from '../models/roomsModel'
import {nanoid} from 'nanoid';
export const createRoom = async (req, res) => {
  const { roomName } = req.body;

  try {
    const roomId = nanoid(8);

    const room = await Rooms.create({
      roomId,
      roomName: roomName || "general",
    });

    return res.status(201).json({
      success: true,
      message: "Room created successfully",
      room,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const getRooms=async(req,res)=>{

    try{


        const rooms=await Rooms.find();

        return res.status(200).json({
            message:"Data is sent successfully",
            rooms,
        });


    }catch(error){
        return res.status(500).json({
            message:"Internal server error"
        });
    }

};




export const getRoom=async(req,res)=>{

    const id=req.params.id;

    try{


        const room=await Rooms.findOne({roomId:id});

        if(!room){
            return res.status(404).json({
                message:"No room found!"
            });
        }

        return res.status(200).json({
            message:"Data is sent successfully",
            room,
        });


    }catch(error){
        return res.status(500).json({
            message:"Internal server error"
        });
    }

};











