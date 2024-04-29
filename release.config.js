if(process.env.channel){
    var channel = process.env.channel;
    if (channel){
        var versionMeta = "-" + channel;
    }else{
        var versionMeta = "";
    }
}



module.exports = {
    branches : [
        "master",
        "main",
        {name: 'special/main', channel: 'special'},
        {name: 'test', prerelease: true}
    ],
    tagFormat: "v${version}" + versionMeta,
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
