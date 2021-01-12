const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/pronoun_sapper',
    {
        branch: 'master',
        repo: 'https://github.com/notionparallax/pronoun_sapper.git',
        user: {
            name: 'notionparallax',
            email: 'ben@notionparallax.co.uk'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)