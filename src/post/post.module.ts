import { PostResolver } from "./post.resolver"
import { Module } from "@nestjs/common"
import { PostService } from "./post.service"

@Module({
	providers: [PostResolver, PostService]
})
export class PostModule {}
