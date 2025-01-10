import { useState } from "react";
import { Lock, ChevronDown, ChevronUp } from "lucide-react";
import suspects from "./data";
import reveal from "./assets/reveal.wav";
import click from "./assets/click.wav";
// import success from "./assets/success.wav";
import error from "./assets/error.wav";
import win from "./assets/win.ogg";
import loss from "./assets/game_over.wav";
// import { Alert, AlertDescription } from "@/components/ui/alert";

const CriminalGuessGame = () => {
    const [gameState, setGameState] = useState("investigation");
    const [userGuesses, setUserGuesses] = useState(3);
    const [selectedSuspect, setSelectedSuspect] = useState("");
    const [revealedClues, setRevealedClues] = useState([]);
    const [expandedClue, setExpandedClue] = useState(null);
    const [gameMessage, setGameMessage] = useState("");
    const [expandedSuspect, setExpandedSuspect] = useState(null);

    // Audio elements
    const playSound = (type) => {
        // if (!soundEnabled) return;
        const sounds = {
            click: new Audio(click),
            success: new Audio(win),
            error: new Audio(error),
            reveal: new Audio(reveal),
            // win: new Audio(win),
            loss: new Audio(loss),
        };
        sounds[type]?.play();
    };

    const clueTypes = {
        location: {
            label: "Location Analysis",
            icon: "🌍",
            description:
                "GPS tracks, movement patterns, and frequented locations",
        },
        communication: {
            label: "Communication Patterns",
            icon: "📱",
            description:
                "Call records, messaging patterns, and contact networks",
        },
        financial: {
            label: "Financial Transactions",
            icon: "💰",
            description:
                "Money movements, account activities, and payment patterns",
        },
        digital: {
            label: "Digital Footprint",
            icon: "💻",
            description: "Online activities, software usage, and cyber traces",
        },
        social: {
            label: "Social Connections",
            icon: "👥",
            description: "Relationships, social media, and public interactions",
        },
        physical: {
            label: "Physical Surveillance",
            icon: "👁️",
            description: "Physical appearance, behavior, and movement patterns",
        },
    };

    const toggleClue = (clueType) => {
        playSound("reveal");

        if (!revealedClues.includes(clueType)) {
            setRevealedClues([...revealedClues, clueType]);
        }
        setExpandedClue(expandedClue === clueType ? null : clueType);
    };

    const toggleSuspect = (suspectId) => {
        playSound("click");
        setExpandedSuspect(expandedSuspect === suspectId ? null : suspectId);
    };

    const makeGuess = () => {
        if (!selectedSuspect) {
            playSound("error");

            setGameMessage("Please select a suspect first!");
            return;
        }

        if (userGuesses > 0) {
            const suspect = suspects.find(
                (s) => s.id === parseInt(selectedSuspect)
            );
            setUserGuesses((prev) => prev - 1);

            if (suspect.isTarget) {
                playSound("success");

                setGameMessage(
                    "Excellent detective work! You've caught the perpetrator!"
                );
                setGameState("won");
            } else {
                setGameMessage(
                    `Incorrect! ${userGuesses - 1} guesses remaining.`
                );
                if (userGuesses === 1) {
                    setGameState("lost");
                    playSound("loss");
                } else {
                    playSound("error");
                }
            }
        }
        alert(gameMessage);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Fixed Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm z-50 p-4 border-b border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-2xl sm:text-3xl font-bold">
                        Cyber Detective
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="inline-flex items-center space-x-2 p-2 bg-blue-900 rounded">
                            <Lock className="text-blue-400" />
                            <span>Guesses: {userGuesses}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-4">
                {/* Clues Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {Object.entries(clueTypes).map(([type, info]) => (
                        <button
                            key={type}
                            onClick={() => toggleClue(type)}
                            className={`p-4 rounded-lg transition-all ${
                                revealedClues.includes(type)
                                    ? "bg-blue-800"
                                    : "bg-gray-800 hover:bg-gray-700"
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl mr-2">
                                        {info.icon}
                                    </span>
                                    <span className="text-lg font-semibold">
                                        {info.label}
                                    </span>
                                </div>
                                {revealedClues.includes(type) &&
                                    (expandedClue === type ? (
                                        <ChevronUp size={20} />
                                    ) : (
                                        <ChevronDown size={20} />
                                    ))}
                            </div>
                            <p className="text-sm text-gray-300 mt-2">
                                {info.description}
                            </p>
                        </button>
                    ))}
                </div>

                {/* Revealed Clues Analysis - Accordion Style */}
                {revealedClues.map((clueType) => (
                    <div
                        key={clueType}
                        className={`mb-4 transition-all ${
                            expandedClue === clueType
                                ? "bg-gray-800"
                                : "bg-gray-800/50"
                        } rounded-lg overflow-hidden`}
                    >
                        <button
                            onClick={() => toggleClue(clueType)}
                            className="w-full p-4 flex items-center justify-between"
                        >
                            <div className="flex items-center">
                                <span className="text-2xl mr-2">
                                    {clueTypes[clueType].icon}
                                </span>
                                <span className="text-lg font-semibold">
                                    {clueTypes[clueType].label}
                                </span>
                            </div>
                            {expandedClue === clueType ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </button>

                        {expandedClue === clueType && (
                            <div className="p-4 border-t border-gray-700">
                                <div className="space-y-4">
                                    {suspects.map((suspect) => (
                                        <div
                                            key={suspect.id}
                                            className="bg-gray-700 rounded-lg overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    toggleSuspect(suspect.id)
                                                }
                                                className="w-full p-4 flex items-center justify-between text-left"
                                            >
                                                <span className="font-medium">
                                                    {suspect.name}
                                                </span>
                                                {expandedSuspect ===
                                                suspect.id ? (
                                                    <ChevronUp size={16} />
                                                ) : (
                                                    <ChevronDown size={16} />
                                                )}
                                            </button>
                                            {expandedSuspect === suspect.id && (
                                                <div className="p-4 border-t border-gray-600 bg-gray-750">
                                                    <pre className="text-sm whitespace-pre-wrap overflow-x-auto">
                                                        {JSON.stringify(
                                                            suspect.clues[
                                                                clueType
                                                            ].data,
                                                            null,
                                                            2
                                                        )}
                                                    </pre>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Sticky Footer for Suspect Selection */}
                <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 p-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <select
                                className="flex-grow p-2 bg-gray-700 rounded text-white"
                                value={selectedSuspect}
                                onChange={(e) =>
                                    setSelectedSuspect(e.target.value)
                                }
                            >
                                <option value="">Select the Culprit</option>
                                {suspects.map((suspect) => (
                                    <option key={suspect.id} value={suspect.id}>
                                        {suspect.name}
                                        {/* - {suspect.profile} */}
                                    </option>
                                ))}
                            </select>
                            <button
                                className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition whitespace-nowrap"
                                onClick={makeGuess}
                                disabled={
                                    !selectedSuspect ||
                                    gameState === "won" ||
                                    gameState === "lost"
                                }
                            >
                                Make Final Guess
                            </button>
                        </div>
                    </div>
                </div>

                {/* Game Messages */}
                {gameMessage && (
                    <div className="fixed top-20 left-0 right-0 px-4 z-50">
                        <div className="max-w-6xl mx-auto"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CriminalGuessGame;
