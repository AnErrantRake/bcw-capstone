class Socket {
    setIO(io) {
        this.io = io
        this.rooms = {}

        //Server listeners go into the callback

        io.on("connection", socket => {
            this.newConnection(socket)
            socket.on("join", data => {
                this.joinRoom(socket, data)
            })
        })

    }
    newConnection(socket) {
        socket.emit("CONNECTED", {
            socket: socket.id,
            message: "Successfully Connected"
        })
    }
    joinRoom(socket, { roomID }) {
        socket.join(roomID)
    }
    leaveRoom({ roomID }) {
        this.io.leave(roomID)
    }
    notifyAddVote(data) {

        this.io.to(data._id).emit('addVote', data)
    }

}

const socket = new Socket()

module.exports = socket