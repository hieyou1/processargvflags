module.exports = {
    parse: function (noFlagStringKey) {
        if (!noFlagStringKey) noFlagStringKey = "str";
        var arr = process.argv.toString();//.replace(/-/g, "");
        arr = arr.substring(arr.split(",", 2).join(",").length + 1).split(",");
        var json = {};
        for (var i = 0; i < arr.length; i += 2) {
            if (arr[i + 1] != undefined) {
                if (arr[i + 1].indexOf("-") == 0) {
                    json[arr[i]] = true;
                } else {
                    json[arr[i]] = arr[i + 1];
                }
            } else {
                json[noFlagStringKey] = arr[i];
            }
        }
        return JSON.parse(JSON.stringify(json).replace(/-/g, ""));
    }
};