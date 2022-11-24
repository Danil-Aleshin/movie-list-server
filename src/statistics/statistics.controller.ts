import { Controller, Get } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/Auth.decorator'
import { StatisticsService } from './statistics.service'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticService: StatisticsService) {}

	@Get('movies-count')
	@Auth('admin')
	async getCountMovies() {
		return this.statisticService.getCountMovies()
	}

	@Get('users-count')
	@Auth('admin')
	async getCountUsers() {
		return this.statisticService.getCountUsers()
	}

	@Get('most-popular-movie')
	@Auth('admin')
	async getMostPopularMovie() {
		return this.statisticService.getMostPopularMovie()
	}

	@Get('views')
	@Auth('admin')
	async views() {
		return this.statisticService.views()
	}

}
