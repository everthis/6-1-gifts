const imgs = [{
	title: '风铃',
	images:['windbell.jpg']
},{
	title: '水母音乐盒',
	images:['jellyfish0.jpg','jellyfish1.jpg']
},{
	title: '日记印章',
	images:['diary0.jpg','diary1.jpg']
},{
	title: '字母灯',
	images:['light0.jpg','light1.jpg']
},{
		title: '便签夹手机座',
	images:['bj0.jpg','bj1.jpg', 'bj2.jpg']
}
].map(el => {
  el.images = el.images.map(item => `images/${item}`)
  return el
})

export default imgs
