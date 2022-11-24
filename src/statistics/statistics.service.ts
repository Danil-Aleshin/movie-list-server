import { Injectable } from '@nestjs/common'
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { MovieModel } from 'src/movie/movie.model'
import { UserModel } from 'src/user/user.model'

@Injectable()
export class StatisticsService {
	constructor(
		@InjectModel(MovieModel) private readonly movieModel: ModelType<MovieModel>,
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async getCountMovies() {
		return this.movieModel.find().count().exec()
	}

	async getCountUsers() {
		return this.userModel.find().count().exec()
	}

	async getMostPopularMovie() {
		return this.movieModel
			.find({ countOpened: { $gt: 0 } })
			.sort({ countOpened: -1 })
			.limit(1)
			.exec()
	}

	async views() {
		const views =  await this.movieModel.aggregate([
			{ $group: { _id: null, views: { $sum: '$countOpened' } } },
		])
		return views[0].views
	}
}

