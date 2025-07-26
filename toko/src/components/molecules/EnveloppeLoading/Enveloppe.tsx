import './envelope.css' // si tu n’utilises pas Tailwind

export const Envelope = () => (
    <div className="envelope-wrapper">
        <svg className="envelope" viewBox="0 0 100 80" width="60" height="60">
            {/* Corps de l'enveloppe */}
            <rect x="10" y="30" width="80" height="40" fill="#8b5cf6" rx="4" />

            {/* Flap */}
            <polygon className="flap" points="10,30 50,0 90,30" fill="#a78bfa" />
        </svg>
    </div>
)
