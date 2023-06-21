declare module 'react-chat-engine' {
    export function ChatEngine(props: ChatEngineProps): JSX.Element;
    export function MessageFormSocial(props: any): JSX.Element;  // Update this if you know the shape of props for MessageFormSocial
}

interface ChatEngineProps {
    height: string;
    projectID: string;
    userName: string;
    userSecret: string;
    renderNewMessageForm: () => JSX.Element;
}
