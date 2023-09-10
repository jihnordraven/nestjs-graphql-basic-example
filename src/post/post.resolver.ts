import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { PostType } from "./post.type"
import { PostService } from "./post.service"
import { Post } from "@prisma/client"

@Resolver((of) => PostType)
export class PostResolver {
	constructor(private readonly postService: PostService) {}

	@Mutation((returns) => PostType)
	createPost(@Args("title") title: string, @Args("text") text: string) {
		return this.postService.create({ title, text })
	}

	@Query((returns) => PostType)
	getPostByID(@Args("postID") postID: string): Promise<Post> {
		return this.postService.findUniqueByID({ postID })
	}

	@Query((returns) => [PostType])
	getPostsByTitle(@Args("title") title: string): Promise<Post[]> {
		return this.postService.findManyByTitle({ title })
	}

	@Mutation((returns) => PostType)
	updatePost(
		@Args("postID") postID: string,
		@Args("title") title: string,
		@Args("text") text: string
	): Promise<Post> {
		return this.postService.updateOne({ postID, title, text })
	}
}
