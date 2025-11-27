import { TextInput } from "@repo/ui/input";

export default function Chatroom() {
    return <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection:"column"
    }}>
        
        <div>
chat room
        </div>
        <div>
<TextInput size="big" placeholder="Message..."></TextInput>
        </div>
    </div>
}