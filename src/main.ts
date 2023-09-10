import { blue, red } from "colorette"
import { INestApplication, InternalServerErrorException, Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

const bootstrap = async () => {
	const logger: Logger = new Logger(bootstrap.name)
	// example
	const HOST = "localhost"
	const PORT = 4200
	const STATUS = "development"
	// example
	try {
		const app = await NestFactory.create<INestApplication>(AppModule)

		app.enableCors({ credentials: true })
		app.setGlobalPrefix("api")

		await app.listen(4200)
		logger.log(blue(`Server is running on ${HOST}:${PORT} with status: ${STATUS}`))
	} catch (err: unknown) {
		logger.log(red("Something went wrong..."))
		throw new InternalServerErrorException(err)
	}
}

bootstrap()
