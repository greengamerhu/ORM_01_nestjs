import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { DanceCourse } from './dancecourse.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private dataSource : DataSource) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/api/courses')
   listCourses() {
    const danceRepo = this.dataSource.getRepository(DanceCourse);
    return danceRepo.find();
  }
  @Post('/api/courses')
  newCourse(@Body() course : DanceCourse) {
      course.id = undefined;
      const danceRepo = this.dataSource.getRepository(DanceCourse);
      danceRepo.save(course)
  }
  @Delete('/api/courses/:id') 
  async deleteCourse(@Param('id') id : number) {
    const danceRepo = this.dataSource.getRepository(DanceCourse);
    if(await danceRepo.exist() == true) {
      danceRepo.delete(id)
    }
    else {

    }
  } 
}
