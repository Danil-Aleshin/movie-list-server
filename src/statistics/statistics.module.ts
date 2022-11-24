import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { MovieModel } from 'src/movie/movie.model'
import { UserModel } from 'src/user/user.model'
import { StatisticsController } from './statistics.controller'
import { StatisticsService } from './statistics.service'

@Module({
	controllers: [StatisticsController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: MovieModel,
				schemaOptions: {
					collection: 'MovieModel Statistics',
				},
			},
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'UserModel Statistics',
				},
			},
		]),
		MovieModel,
		UserModel,
	],
	providers: [StatisticsService],
	exports: [StatisticsService],
})
export class StatisticsModule {}
