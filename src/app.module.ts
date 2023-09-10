import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { GraphQLModule } from "@nestjs/graphql"
import { Module } from "@nestjs/common"
import { PostModule } from "./post/post.module"
import { PrismaModule } from "prisma/prisma.module"

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true
		}),
		PrismaModule,
		PostModule
	]
})
export class AppModule {}
