import express from 'express' 
import Incidents from '../controllers/Incidents';
import Ong from '../controllers/Ongs';

const routes = express();

routes.use('/api/ong',Ong)
routes.use('/api/ong/incident',Incidents)

export default routes;