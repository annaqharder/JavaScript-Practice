// strings = core data types in JS

function urlify(blogTitle) {
    const punctuation = /[.,/#!$%^&*;:{}+=\-_`~()'"]/g;
    // const punctuation = new RegExp("regex")
    const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
    return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!!!"))
console.log(urlify("I Got A New Job!"))