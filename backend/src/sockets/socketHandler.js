import Notes from "../models/notesModel.js";

export const initializeSocket=(io)=>{

    io.on("connection",(socket)=>{
    console.log(`User connected: ${socket.id}`);

socket.on("join-room", (roomId) => {

  if (!roomId) return;

  socket.join(roomId);

  console.log(
    `${socket.id} joined room ${roomId}`
  );

});
socket.on("leave-room",(roomId)=>{

if (!roomId) return;

socket.leave(roomId);

console.log(`socket id ${socket.id} left room ${roomId}`);

})

socket.on("join-note", (noteId) => {

  if (!noteId) return;

  socket.join(noteId);

  console.log(
    `${socket.id} joined note ${noteId}`
  );

});



socket.on("leave-note", (noteId) => {

  if (!noteId) return;

  socket.leave(noteId);

  console.log(
    `${socket.id} left note ${noteId}`
  );

});




socket.on("add-contribution", async ({ noteId, content }) => {

  const note = await Notes.findByIdAndUpdate(
    noteId,
    {
      $push: {
        content: {
          text: content
        }
      }
    },
    { new: true }
  );

  io.to(noteId).emit(
    "new-contribution",
    note.content[note.content.length - 1]
  );

});
socket.on("remove-contribution",async({noteId,contributionId})=>{
    const note=await Notes.findByIdAndUpdate(noteId,{
    $pull:{
        content:{
            _id:contributionId
        }
    }
    });

   

    io.to(noteId).emit('contribution-removed',{contributionId});
     
})

    socket.on("disconnect",()=>{
        console.log(`User disconnected: ${socket.id}`);
    })
})


}