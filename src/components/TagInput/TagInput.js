import React from 'react';

import Tags from "@yaireo/tagify/dist/react.tagify" // React-wrapper file
import "@yaireo/tagify/dist/tagify.css" // Tagify CSS
import "./TagInput.css";


/*
 * Creates an input box in the Bootstrap form that only accepts whitelisted tags.
 * The whitelist should be a list of JavaScript objects containing a value field (the tag text)
 * and an image field (the source of the image). If the image field is left blank, no image will be shown.
 */
const TagInput = ({ placeholder, whitelist }) => {

    // Adapted from https://yaireo.github.io/tagify/#section-extra-properties 
    const templates = {
        tag: function (tagData) {
            try {
                return `<tag title='${tagData.value}' contenteditable='false' spellcheck="false" class='tagify__tag ${tagData.class ? tagData.class : ""}' ${this.getAttributes(tagData)}>
                            <x title='remove tag' class='tagify__tag__removeBtn'></x>
                                <div>
                                    ${tagData.image ?
                        `<img onerror="this.style.visibility='hidden'" src='${tagData.image}' style="height: 1em; margin-right: 0.2em;">`
                        : ''
                    }
                                    <span class='tagify__tag-text'>${tagData.value}</span>
                                </div>
                        </tag>`;
            }
            catch (err) { }
        },

        dropdownItem: function (tagData) {
            try {
                return `<div class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}' tagifySuggestionIdx="${tagData.tagifySuggestionIdx}">
                            <img onerror="this.style.visibility = 'hidden'" src='${tagData.image}' style="height: 1em; margin-right: 0.2em;">
                            <span>${tagData.value}</span>
                        </div>`;
            }
            catch (err) { }
        }
    };

    return <Tags className="form-control tagifyBootstrap"
        settings={{ whitelist: whitelist, enforceWhitelist: true, templates: templates, editTags: false }}
        placeholder={placeholder}
    />;
};

export default TagInput;


