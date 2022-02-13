import dbConnect from '../../../../utils/dbConnect';

var pengeboran = require('../../../../models/Pengeboran');

dbConnect();

async function Pengeboran(req, res) {
    const { method } = req;

    switch(method) {
        case 'GET' :
            try{
                const pengeboranSumur = await pengeboran.find({});

                res.status(200).json({status: 200, data: pengeboranSumur});
            } catch(error) {
                res.status(405).json({status: 405, message: 'We only support GET'});
            }
            break;
        case 'POST' :
            try{
                const addDataPengeboran = await pengeboran.create(req.body);
                res.status(201).json({status: 201, data: addDataPengeboran});
            } catch(error) {
                res.status(405).json({status: 400, message: 'We only support POST'});
            }
            break;
        default: 
            res.status(500).json({success: false, message: 'The Server is unconnected'});
            break;
    }
}

export default Pengeboran;