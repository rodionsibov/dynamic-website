import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './blocks.js'

const image = 'https://picsum.photos/400'

const text = `
Morbi et lorem at nisl sollicitudin vulputate vitae sit amet lorem. Quisque ac augue vel lacus rutrum maximus aliquam eu ligula. Quisque egestas dui vel augue pretium, non tempus est ultrices. Nulla <a href="#">pellentesque dictum odio, a convallis lorem </a>blandit ut. Suspendisse dapibus elit et magna commodo, sed feugiat nisl dictum. `

export const model = [
    new TitleBlock('Suspendisse ullamcorper sed diam in placerat', {
	tag: 'h2',
	styles: {
	    background: 'linear-gradient(to right, tomato, orange)',
	    color: '#222',
	    padding: '1.5rem',
	    'text-align': 'center'
	}
    }),
    new ImageBlock(image, {
	styles: {
	    padding: '2rem 0',
	    display: 'flex',
	    'justify-content': 'center'
	},
	imageStyles: {
	    width: '400px',
	    "border-radius": "5%",
	    height: 'auto'
	},
	alt: 'Image from picsum.photos'
    }),
    new ColumnsBlock([
	'Quisque ut pretium eros, a blandit augue. Nulla rutrum faucibus lectus, eget lobortis leo luctus. ',
	'Cras finibus, libero at cursus gravida, nisi neque bibendum urna, eu sodales dui diam nec.',
	'Pellentesque sodales, tortor a maximus rhoncus, tortor turpis pellentesque erat.'
    ], {
	styles: {
	    background: 'linear-gradient(to bottom, indigo, navy)',
	    padding: '2rem',
	    color: '#fff',
	    'font-weight': 'bold'
	}
    }),
    new TextBlock(text, {
	styles: {
	    background: 'linear-gradient(to left, tomato, orange)',
	    padding: '1rem',
	    'font-weight': 'bold'
	}
    })
]
