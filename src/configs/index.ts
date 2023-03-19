const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

export const config = {
  serviceName: process.env.SERVICE_NAME || 'project',
  port: process.env.PORT || 3000,
  grpcPort: process.env.GRPC_PORT || 5000,
  grpcUrl: process.env.GRPC_URL || 'localhost:5000',
};
