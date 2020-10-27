module.exports = async function (context, req) {
    context.log('Generating Nonsense...');
    let now = new Date();
    context.res = {
        body: "This is the date and time: " + now.toISOString() + "T" + now.toTimeString()
    };
};