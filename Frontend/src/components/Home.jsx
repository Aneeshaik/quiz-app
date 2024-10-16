import { useEffect, useState } from "react"
import Result from "./Result";

const Home = () => {
    const [data, setData] = useState([]);
    const [qnData, setQnData] = useState([])
    const [selectCategory, setSelectCategory] = useState(false)
    const [score, setScore] = useState(0)
    const [user, setUser] = useState()
    const [isQuizCompleted, setIsQuizCompleted] = useState(false)
    const [showQns, setShowQns] = useState(false)
    const [currentQnIndex, setCurrentQnIndex] = useState(0); // Track the current question index
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [answered, setAnswered] = useState(false)
    const [selectedCat, setSelectedCat] = useState();
    const [calculatedScore, setCalculatedScore] = useState(0)

    const categories = [
        'General Knowledge',
        'Books',
        'Films',
        'Sports',
        'History',
        'Animals'
    ]

    const categoriesColors = [
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-red-500',
        'bg-purple-500',
        'bg-orange-500'
    ]

    const questionsData = async() => {
        const response =await fetch('https://quiz-app-bv7l.onrender.com/mockdata/');
        const jsonData = await response.json();
        setData(jsonData);
    }
    useEffect(() => {
        questionsData();
    },[])

    const shuffleAnswers = (option1, options) => {
        const answers = [option1, ...options]
        for(let i = answers.length - 1; i > 0; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1))
            const temp = answers[i];
            answers[i] = answers[randomIndex];
            answers[randomIndex] = temp;
            }
        return answers
    }

    const handleClick = async(index) => {
        const response = await fetch(`https://quiz-app-bv7l.onrender.com/mockdata/${index}`)
        const jsonData = await response.json()
        setSelectedCat(categories[index - 1])
        console.log(selectedCat);
        
        setShowQns(true);
        setQnData(jsonData)
        console.log(jsonData[0]);
        setSelectCategory(true)
        if (jsonData.length > 0) {
            const firstQuestion = jsonData[0]; // Assuming you want to shuffle answers for the first question initially
            const shuffled = shuffleAnswers(firstQuestion.correct_answer, firstQuestion.incorrect_answers);
            
            setShowQns(!showQns);
            setQnData(jsonData);
            setShuffledAnswers(shuffled); // Set shuffled answers right here
        }
    
        console.log('Question Data:', jsonData);
    }

    useEffect(() => {
        if (qnData.length > 0) {
          const currentQn = qnData[currentQnIndex];
          const shuffled = shuffleAnswers(currentQn.correct_answer, currentQn.incorrect_answers);
          setShuffledAnswers(shuffled);
        }
    }, [qnData, currentQnIndex]);

    const handleNext = async () => {
        setSelectedAnswer(null)
        setAnswered(false)
        if (currentQnIndex < qnData.length - 1){
            setCurrentQnIndex(currentQnIndex + 1)
        } else {
            if (!isQuizCompleted) {
            setIsQuizCompleted(true)
            calculateScore(10, score);
            const response = await fetch('https://quiz-app-bv7l.onrender.com/results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: user,
                    category: selectedCat,
                    score: score
                }),
            })
            await response.json();
        }
        }
    }

    const handleBack = () => {
        setSelectCategory(false)
    }

    const handleHome = () => {
        setSelectCategory(false)
        setIsQuizCompleted(false)
    }

    const handleAnswerClick = (selectedOption) => {
        setSelectedAnswer(selectedOption);
        setAnswered(true)
        const currentQn = qnData[currentQnIndex];
        if (selectedOption === currentQn.correct_answer) {
            setScore(score + 1); // Increment score if the selected answer is correct
        }
    };

    const getOptionClass = (option) => {
        let className= 'text-left cursor-pointer p-5 my-2 rounded-lg hover:scale-101 active:scale-[0.99] transition-all duration-300'
        
        if (!answered) {
            // If not answered, keep default color
            className += " bg-blue-300";
        } else {
            // If the question is answered, check the conditions
            if (option === qnData[currentQnIndex].correct_answer) {
                // Green for the correct answer
                className += " bg-green-500";
            } else if (option === selectedAnswer) {
                // Red for the selected wrong answer
                className += " bg-red-500";
            } else {
                // Default color for other options
                className += " bg-blue-300";
            }
        }
    return className;
    };

    const calculateScore = (totalQuestions, correctAnswers) => {
        if (totalQuestions === 0) {
          setCalculatedScore(0);
        }
        setCalculatedScore( Number(((correctAnswers * 100) / totalQuestions).toFixed(2)) );
    };
    useEffect(() => {
        const getUserName = async () => {
            const response = await fetch(`https://quiz-app-bv7l.onrender.com/users/${localStorage.getItem('userId')}`);
            const data = await response.json();
            // console.log(data);
            setUser(data.name);
        }
        getUserName();
    },[])


    return (
        <div className="flex items-center justify-center overflow-y-auto bg-slate-300 dark:bg-white/15 backdrop-blur-sm p-1 py-4 lg:p-5 rounded-2xl w-full lg:w-4/5 mx-auto">
        <div className="w-full">
            <div className="w-full mx-auto">
                {!selectCategory && <div className="w-full">
                    <p className="font-semibold text-3xl">Select a Quiz Category</p>
                    <ul className="flex flex-wrap justify-center items-center m-3">
                        {categories.map((cat, index) => (
                            <button key={index} onClick={() => handleClick(index + 1)} className={`${categoriesColors[index]} text-lg text-center flex items-center justify-center p-1 lg:p-5 mt-3 rounded-lg w-2/5 sm:w-1/4 h-28 m-2 lg:m-5 hover:scale-102 transition-all duration-300 active:scale-[0.97] shrink-0`}>{cat}</button>
                        ))}
                    </ul>
                </div>}
            </div>
            {!isQuizCompleted && selectCategory && showQns && qnData.length > 0 && (
                <div className="flex items-center justify-center p-2 py-0 lg:p-0">
                    <div className="w-full">
                        <h1 className="text-left text-2xl font-semibold my-3 w-full">{qnData[currentQnIndex].question}</h1>
                        <ul className="list-none w-full">
                            {shuffledAnswers.map((option, index) => (
                                <li
                                    key={index}
                                    className={`${getOptionClass(option)}`}
                                    onClick={() => !answered && handleAnswerClick(option)} // Only allow click if not yet answered
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between">
                            <button className="px-5 py-2 ml-0 m-2 rounded-lg bg-blue-500 hover:scale-102 active:scale-[0.98] transition-all duration-300" onClick={() => handleBack()}>Categories</button>
                            <button className="px-5 py-2 mr-0 m-2 rounded-lg bg-blue-500 hover:scale-102 active:scale-[0.98] transition-all duration-300" onClick={() => handleNext()}> {currentQnIndex < qnData.length - 1 ? 'Next' : 'Submit'} </button>
                        </div>
                    </div>
                </div>
            )}
            {isQuizCompleted && (
                <div>
                    <Result score={score} calculatedScore={calculatedScore} handleHome={handleHome}/>
                </div>
            )}
        </div>
        </div>
    )
}

export default Home