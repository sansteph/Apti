document.addEventListener("DOMContentLoaded", function () {
    const htmlCode = document.getElementById("htmlCode");
    const cssCode = document.getElementById("cssCode");
    const jsCode = document.getElementById("jsCode");
    const output = document.getElementById("output").contentWindow.document;

    function updateOutput() {
        output.open();
        output.writeln(`
            <style>${cssCode.value}</style>
            ${htmlCode.value}
            <script>${jsCode.value}<\/script>
        `);
        output.close();
    }

    htmlCode.addEventListener("input", updateOutput);
    cssCode.addEventListener("input", updateOutput);
    jsCode.addEventListener("input", updateOutput);

    // Prevent Copy-Paste
    document.addEventListener("copy", (e) => e.preventDefault());
    document.addEventListener("paste", (e) => e.preventDefault());

    // Tab Switch Detection
    let disqualified = false;
    document.addEventListener("visibilitychange", function () {
        if (document.hidden && !disqualified) {
            disqualified = true;
            sessionStorage.setItem("disqualified", "true"); // Store disqualification status
            window.location.href = "index.html"; // Redirect to disqualification page
        }
    });
});
