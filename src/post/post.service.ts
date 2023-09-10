import { Injectable, NotFoundException } from "@nestjs/common"
import { PrismaService } from "prisma/prisma.service"
import { Post } from "@prisma/client"

@Injectable()
export class PostService {
	constructor(private readonly prisma: PrismaService) {}

	async create({ title, text }: { title: string; text: string }): Promise<Post> {
		return this.prisma.post.create({ data: { title, text } })
	}

	async findUniqueByID({ postID }: { postID: string }): Promise<Post> {
		const post: Post | null = await this.prisma.post.findUnique({ where: { id: postID } })
		if (!post) throw new NotFoundException("Post not found")
		return post
	}

	async findManyByTitle({ title }: { title: string }): Promise<Post[]> {
		const posts: Post[] | null = await this.prisma.post.findMany({ where: { title } })
		if (!posts) throw new NotFoundException("Any posts weren't found")
		return posts
	}

	async updateOne({
		postID,
		title,
		text
	}: {
		postID: string
		title?: string
		text?: string
	}): Promise<Post> {
		await this.findUniqueByID({ postID })
		return this.prisma.post.update({ where: { id: postID }, data: { title, text } })
	}

	async deleteOne({ postID }: { postID: string }): Promise<Post> {
		await this.findUniqueByID({ postID })
		return this.prisma.post.delete({ where: { id: postID } })
	}
}
