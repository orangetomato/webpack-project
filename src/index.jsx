import * as $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';

import Post from '@models/post';
import './babel';

import json from './assets/json';
import xml from './assets/xml.xml';
import csv from './assets/csv.csv';
import WebpackLogo from '@/assets/logo.png';

import './styles/styles.css';
import './styles/less.less';
import './styles/sass.scss';

alert('Start script');

const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').addClass('code').html(post.convertIntoString());

console.log('Post in string format:', post.convertIntoString());
console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);

const App = () => (
    <div className="container">
        <h1>Webpack Project</h1>
        <hr />
        <div className="logo" />
        <hr />
        <pre />
        <hr />
        <div className="less">
            <h2>Less</h2>
            <div className="text">
                <p>This is "Less".</p>
                <span>less</span>
            </div>
        </div>
        <hr />
        <div className="sass">
            <h2>Sass</h2>
            <div className="text">
                <p>This is "Sass".</p>
                <span>sass</span>
            </div>
        </div>
    </div>
)

render(<App />, document.getElementById('app'));