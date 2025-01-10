export const resetRemainingGuessCounts = () => {
    localStorage.setItem("guesses-left", "3");
};

export const getRemainingGuessCounts = () => {
    const savedGuesses = localStorage.getItem("guesses-left");
    if (savedGuesses) {
        return Number(savedGuesses); // Convert string to number
    } else {
        // If guesses-left does not exist, create it in localStorage
        localStorage.setItem("guesses-left", "3");
        return 3;
    }
};

export const setRemainingGuessCounts = (counts) => {
    // const savedGuesses = localStorage.getItem("guesses-left");
    localStorage.setItem("guesses-left", counts);
};

export const getGameStatus = () => {
    const savedStatus = localStorage.getItem("game-status");
    if (savedStatus) {
        return savedStatus;
    } else {
        // If game-status does not exist, create it in localStorage
        localStorage.setItem("game-status", "playing");
        return "playing";
    }
};

export const setGameStatus = (status) => {
    localStorage.setItem("game-status", status);
};
