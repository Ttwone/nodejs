const getGoals =(req, res) => {
    res.status(200).json({
        message: "get goals"
    })
}
const setGoal =(req, res) => {
    res.status(200).json({
        message: "set goals"
    })
}