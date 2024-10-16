import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 

const Result = ({score, calculatedScore, handleHome}) => {

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold m-3 mt-0">Quiz Completed!</h1>
                    <div className="flex space-x-3 m-3">
                        <h1 className="bg-blue-700 rounded-lg text-lg px-5 py-2">Total Questions: 10</h1>
                        <h1 className="bg-yellow-600 rounded-lg text-lg  px-5 py-2">Correct Answers: {score}</h1>
                    </div>
                    <div className="w-40 h-40 my-4 flex items-center justify-center">
                        <CircularProgressbar
                            value={calculatedScore}
                            text={`${calculatedScore}%`}
                            styles={buildStyles({
                                textColor: '#000',
                                pathColor: '#F59E0B',
                                trailColor: '#FEE2E2',
                                strokeLinecap: 'round',
                                pathTransitionDuration: 0.5,
                            })}
                        />
                    </div>
                    <h1 className="text-2xl font-semibold">Your Score</h1>
                    <button className="bg-red-700 rounded-lg text-lg px-5 py-1 mt-3 hover:scale-102 active:scale-[0.98] transition-all duration-300" onClick={() => {handleHome()}}>Home</button>
                </div>
        </div>
    )
}

export default Result