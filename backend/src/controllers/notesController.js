import Notes from "../models/notesModel.js";
import Rooms from "../models/roomsModel.js";


export const  createNote=async(req,res)=>{


    const {title,content,roomId}=req.body;

    if (!roomId) {
  return res.status(400).json({
    message: "Room ID is required",
    success: false
  });
}

        try{
const searchedRoom=await Rooms.findOne({roomId});

if(!searchedRoom){
    return res.status(404).json({
        message:"Room was not found !",
        success:false
    });
};

const note=await Notes.create({
    title,
    content,
    room:searchedRoom._id,
});


return res.status(201).json({
    message:"Note created successfully",
    success:true,
    note
});


        }catch(error){
            console.log(error);
            return res.status(500).json({
                success:false,
                message:"Internal server error"
            })
        };
};




export const fetchNotes=async(req,res)=>{

    const roomId=req.params.roomId;
    try{

    if(!roomId){
        success: false
        return res.status(400).json({
            message:"room Id is required!",
        });
    }
const room=await Rooms.findOne({roomId});
 if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found!",
      });
    }


    const notes=await Notes.find({room:room._id});

    return res.status(200).json({
        success:true,
        message:"Notes fetched successfully",
        notes
    });
}catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Internal server error",
    });
}

}
export const deleteNote=async(req,res)=>{

    const notesId=req.params.id;
    try{

  const note = await Notes.findByIdAndDelete(notesId);
if (!note) {
  return res.status(404).json({
    success: false,
    message: "Note not found"
  });
}
    return res.status(200).json({
        success:true,
        message:"Notes deleted successfully",
        note
    });
}catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Internal server error",
    });
}

}


export const getNote = async (req, res) => {
    const noteId = req.params.id;

    try {
        const note = await Notes.findById(noteId);

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        return res.status(200).json({
            success: true,
            note
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};







