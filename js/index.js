// Rust 1.5.0 was released on 2015-12-10
const epochDate = moment.utc("2015-12-10");
const epochRelease = 5;
const dateFormat = "MMMM do YYYY";

const newReleases = Math.floor(moment.utc().diff(epochDate, "weeks") / 6);

const addRelease = (kind, incr, tools_week) => {
    const releaseNumber = epochRelease + newReleases + incr;
    const releaseDate = epochDate.clone().add((newReleases + incr) * 6, "weeks");
    const releaseVersion = `1.${releaseNumber}`

    document.querySelector(`#${kind}-version`).textContent = releaseVersion
    document.querySelector(`#${kind}-release-date`).textContent = releaseDate.format(dateFormat)

    if (tools_week === true) {
        const noBreakagesTo = releaseDate.clone().day(2);
        const noBreakagesFrom = noBreakagesTo.clone().subtract(1, 'week');
        const timespan = `${noBreakagesFrom.format(dateFormat)} → ${noBreakagesTo.format(dateFormat)}`;

        document.querySelector(`#${kind}-cycle`).textContent = releaseVersion;
        document.querySelector(`#${kind}-timespan`).textContent = timespan;
    }
};

// Only run the code if we're on the correct page.
if (document.querySelector('#stable-version')) {
    addRelease("stable", 0, false);
    addRelease("beta", 1, true);
    addRelease("nightly", 2, true);
}
