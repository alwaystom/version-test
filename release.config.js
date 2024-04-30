const { execSync } = require('child_process');
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const prefix = branch.toString().trim().split('/')[0]
let tagFormat = "v${version}";

if(prefix !== branch){
    tagFormat = tagFormat + "-" + prefix;
}

module.exports = {
    branches : [
        "master",
        "main",
        { name: '*/main', prerelease: false},
        {name: 'test', prerelease: true},
        {name: '*/test', prerelease: true}
    ],
    tagFormat: tagFormat,
    plugins: [
        "@semantic-release/commit-analyzer",
        [
            "@semantic-release/release-notes-generator",
            {
                "linkReferences": false
            }
        ],

        "@semantic-release/github",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "docs/CHANGELOG.md"
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": ["docs/CHANGELOG.md"]
            }
        ]
    ]
}
