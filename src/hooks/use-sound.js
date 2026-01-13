import { useRef } from "react";

export const useSound = (url, volume = 0.5) => {
    const audioRef = useRef(new Audio(url));

    const play = () => {
        audioRef.current.volume = volume;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
            // Ignore errors if audio can't play (e.g. user hasn't interacted with page)
        });
    };

    return { play };
};
