import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

const Jobs = () => {

  const Data = [
    {
      id:1,
      title: 'Web Developer',
      time: 'Now',
      location: 'Canada',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequuntur dolores quos libero corporis alias ipsa provident quasi. Enim.',
    },
    {
      id:2,
      title: 'Software Engineer',
      time: 'Now',
      location: 'France',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequuntur dolores quos libero corporis alias ipsa provident quasi. Enim.',
    },
    {
      id:3,
      title: 'Full-Stack Developer',
      time: 'Now',
      location: 'Spain',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequuntur dolores quos libero corporis alias ipsa provident quasi. Enim.',
    },
    {
      id:4,
      title: 'Data Scientist',
      time: 'Now',
      location: 'Amsterdam',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequuntur dolores quos libero corporis alias ipsa provident quasi. Enim.',
    },
    {
      id:5,
      title: 'BI Analyst',
      time: 'Now',
      location: 'Morocco',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequuntur dolores quos libero corporis alias ipsa provident quasi. Enim.',
    },
    {
      id:6,
      title: 'Front-end Developer',
      time: 'Now',
      location: 'Canada',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequuntur dolores quos libero corporis alias ipsa provident quasi. Enim.',
    },
    {
      id:7,
      title: 'Back-end Developer',
      time: 'Now',
      location: 'Morocco',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequuntur dolores quos libero corporis alias ipsa provident quasi. Enim.',
    },
    {
      id:8,
      title: 'Business Developer',
      time: 'Now',
      location: 'France',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequuntur dolores quos libero corporis alias ipsa provident quasi. Enim.',
    },
  ]

  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

            {
              Data.map(({id,title,time,location,desc}) => {
                  return (

                    <div key ={id} className='group group/item singleJob w-[250px] p-[20px] bg-white 
            rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

              <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor
                     group-hover:text-white'>{title}</h1>
                    <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                    </span>
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>
              
              <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {desc}
              </p>

              <div className='company flex items-center gap-2'>
              
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
               hover:bg-white group-hover/item:text-textColor group-hover:text-white mt-4'>Apply Now</button>

              </div>
            </div>
                  )
                  

              }
              
              )
            }

      </div>
    </div>
  )
}

export default Jobs