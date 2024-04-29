console.log(process.env);
console.log(process.envci);
if(process.envci.branch.channel){

    var channel = process.branch.channel;
    if (channel){
        var tagFormat = "v${version}" + "-" + channel;
    }else{
        var tagFormat = "v${version}";
    }
}



module.exports = {
    branches : [
        "master",
        "main",
        {name: 'special/main', channel: 'special'},
        {name: 'test', prerelease: true}
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
