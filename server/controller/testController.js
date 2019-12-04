var testcontroller = {}

testcontroller.find = async (req,res) =>{
    try {
        res.status(200).json({message: "status ok"})        
    } catch (error) {
        res.sataus(400).json({message: error})
    }
}

testcontroller.buttonone = async (req,res) =>{
    try {
        res.status(200).json({message: "button 1"})  
    } catch (error) {
        res.sataus(400).json({message: error})
    }
}

testcontroller.buttontwo = async (req,res) =>{
    try {
        res.status(200).json({message: "status 2"})  
    } catch (error) {
        res.sataus(400).json({message: error})
    }
}

module.exports = testcontroller;