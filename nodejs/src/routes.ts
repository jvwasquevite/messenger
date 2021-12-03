import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController'
import { ProfileUserController } from './controllers/ProfileUserController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

/**
 * Routes to authenticate, create new messages, get last messages and profile data
 *
 * @POST '/authenticate'      authenticate user with Github API
 * @POST '/messages'          create a new massage
 * @GET '/messages/last3'     get three last messages
 * @GET '/profile'            get profile data from Github API
 */

router.post('/authenticate', new AuthenticateUserController().handle)

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
)

router.get('/messages/last3', new GetLast3MessagesController().handle)

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { router }
