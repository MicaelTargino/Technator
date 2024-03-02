export default function PlayingPage({params}: any) {
    const {sessionId} = params;
    return (
        <section>
            Home {sessionId}
        </section>
    )
}