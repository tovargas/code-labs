import Link from 'next/link'
import Script from 'next/script'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sendDummyClickAction() {
    // NRQL queries
    // Table with parsed JSON: SELECT count(*) AS 'Clicks' FROM PageAction WHERE actionName = 'hello-world-click' FACET result SINCE 30 days ago
    // Chart: SELECT count(*) AS 'Clicks' FROM PageAction FACET actionName TIMESERIES
    newrelic.addPageAction('hello-world-click', { result: 'success' });
    console.log('NR Page Action added!');
}

export default function NewRelicPlayground() {
    // console.log("Hello");
    // sleep(4000).then(() => { console.log("World!"); });
    return (
        <>
            <h1>New Relic Playground</h1>
            <h2>
                <Link href="/">
                    <a onClick={() => sendDummyClickAction()}>Trigger a Hello World Action!</a>
                </Link>
            </h2>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>


        </>
    )
}