// Callback based validation functions
function validateMovieSelection(movies,movieId,Callback){
    const selectedMovie=movies.find((movie)=>movie.id===movieId);
    if(!selectedMovie){
        return Callback("Invalid movie selection.Choose a valid movie movie ID.",null);
    }
    Callback(null,selectedMovie);
}

function validateTimeSelection(movies,selectedTime,Callback){
    const selectedShowTime=movie.showtimes.find((show)=>show.time.toLowerCase()===selectedTime.toLowerCase());
    if(!selectedShowTime){
        return Callback("Invalid time slot selection.Choose a valid time slot.",null);
    }
    Callback(null,selectedShowTime);
}
function validateSeatCount(seatCount,Callback){
    if(!isNaN(seatCount) || seatCount<=0){
        return Callback("Invalid seat count.Enter a valid seat count.",null);
    }
    Callback(null,seatCount);
}

// need to add seatcount for the above function

module.exports={
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
}