import React from 'react'

const TaskList = () => {
  return (
    <div className='flex justify-between gap-5  pt-5 screen'>
<div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
<h2 className='text-3xl font-semibold'>12</h2>
<h3 className='text-xl font-medium'>New Task </h3>

</div>
<div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
<h2 className='text-3xl font-semibold'>100</h2>
<h3 className='text-xl font-medium'>Upcoming Task </h3>

</div>
<div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
<h2 className='text-3xl font-semibold'>50</h2>
<h3 className='text-xl font-medium'>Completed Task </h3>

</div>
<div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
<h2 className='text-3xl font-semibold'>20</h2>
<h3 className='text-xl font-medium'>InProgess Task </h3>

</div>
    </div>
  )
}

export default TaskList