import { FastifyInstance } from 'fastify';

export interface Router {
  registerRoutes(app: FastifyInstance): void;
}
