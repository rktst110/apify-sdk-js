import { runActor } from '@apify/scraper-tools';
import { CrawlerSetup } from './internals/crawler_setup.js';
import { Apify } from 'apify';

runActor(CrawlerSetup);

//const Apify = require('dfdfk/apify');

Apify.main(async () => {
    const run = await Apify.call('apify/hello-world', { greeting: 'Hello sir!' });
    console.log('Apify.call() result:');
    console.dir(run);
});
