/* =========================================================
   SMART READING SKILLS HUB
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   LESSON ACCORDION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const lessons =
        document.querySelectorAll(".interactive-lesson");

    lessons.forEach(function (lesson) {

        const button =
            lesson.querySelector(".lesson-toggle");

        const content =
            lesson.querySelector(".lesson-content");

        const icon =
            lesson.querySelector(".lesson-arrow");

        if (!button || !content) return;

        lesson.classList.remove("open");
        content.style.display = "none";

        if (icon) {
            icon.textContent = "+";
        }

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                lesson.classList.contains("open");

            lessons.forEach(function (otherLesson) {

                otherLesson.classList.remove("open");

                const otherContent =
                    otherLesson.querySelector(".lesson-content");

                const otherIcon =
                    otherLesson.querySelector(".lesson-arrow");

                if (otherContent) {
                    otherContent.style.display = "none";
                }

                if (otherIcon) {
                    otherIcon.textContent = "+";
                }

            });

            if (!isOpen) {

                lesson.classList.add("open");

                content.style.display = "block";

                if (icon) {
                    icon.textContent = "−";
                }

            }

        });

    });

});


/* =========================================================
   /* =========================================================
   ACTIVITY PROGRESS
========================================================= */

function completeActivity(button) {

    /* Find the activity card */
    const activity =
        button.closest(".activity-card");

    if (!activity) return;

    /* Prevent counting the same activity twice */
    if (activity.classList.contains("activity-completed")) {
        return;
    }

    /* Mark this activity as completed */
    activity.classList.add("activity-completed");

    /* Change the button */
    button.textContent = "✓ Completed";
    button.disabled = true;

    /* Count completed activities */
    const completed =
        document.querySelectorAll(
            ".activity-card.activity-completed"
        ).length;

    /* There are 11 activities */
    const total = 11;

    /* Calculate percentage */
    const percentage =
        Math.round((completed / total) * 100);

    /* Update text */
    const progressText =
        document.getElementById("progressText");

    if (progressText) {
        progressText.textContent =
            completed + " of " + total + " completed";
    }

    /* Move progress bar */
    const progressFill =
        document.getElementById("progressFill");

    if (progressFill) {
        progressFill.style.width =
            percentage + "%";
    }

}
/* =========================================================
   MULTIPLE-CHOICE QUESTIONS
========================================================= */

function checkChoice(button, isCorrect) {

    const question =
        button.closest(".game-question") ||
        button.closest(".word-card") ||
        button.closest(".strategy-card") ||
        button.closest(".mystery-box") ||
        button.closest(".sequence-box");

    if (!question) {
        return;
    }


    const buttons =
        question.querySelectorAll(
            ".choice-button"
        );


    buttons.forEach(function (item) {

        item.classList.remove("selected");
        item.classList.remove("correct");
        item.classList.remove("incorrect");

    });


    button.classList.add("selected");


    const feedback =
        question.querySelector(".feedback");


    if (isCorrect === true) {

        button.classList.add("correct");


        if (feedback) {

            feedback.textContent =
                "✓ Correct! Well done.";

            feedback.className =
                "feedback correct-feedback";

        }


        /* Mark activity as completed */

        const activity =
            button.closest(
                "[data-activity]"
            );

        if (activity) {

            updateActivityProgress(
                activity.dataset.activity
            );

        }

    }

    else {

        button.classList.add("incorrect");


        if (feedback) {

            feedback.textContent =
                "✗ Not quite. Try again and look carefully at the passage.";

            feedback.className =
                "feedback incorrect-feedback";

        }

    }

}


/* =========================================================
   DETAIL HUNT
========================================================= */

function toggleDetail(button, isCorrect) {

    const container =
        button.closest(".detail-question") ||
        button.parentElement;


    if (container) {

        const choices =
            container.querySelectorAll(
                ".detail-choice"
            );

        choices.forEach(function (choice) {

            choice.classList.remove("selected");
            choice.classList.remove("correct");
            choice.classList.remove("incorrect");

        });

    }


    button.classList.add("selected");


    if (isCorrect === true) {

        button.classList.add("correct");

        const activity =
            button.closest(
                "[data-activity]"
            );

        if (activity) {

            updateActivityProgress(
                activity.dataset.activity
            );

        }

    }

    else {

        button.classList.add("incorrect");

    }

}


/* =========================================================
   RADIO BUTTONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const radios =
        document.querySelectorAll(
            'input[type="radio"]'
        );


    radios.forEach(function (radio) {

        radio.addEventListener(
            "change",
            function () {

                const name =
                    radio.getAttribute("name");

                if (!name) return;


                const group =
                    document.querySelectorAll(
                        'input[type="radio"][name="' +
                        name +
                        '"]'
                    );


                group.forEach(function (item) {

                    const label =
                        item.closest("label");

                    if (label) {
                        label.classList.remove(
                            "selected"
                        );
                    }

                    if (item.parentElement) {
                        item.parentElement.classList.remove(
                            "selected"
                        );
                    }

                });


                const selectedLabel =
                    radio.closest("label");

                if (selectedLabel) {

                    selectedLabel.classList.add(
                        "selected"
                    );

                }


                if (radio.parentElement) {

                    radio.parentElement.classList.add(
                        "selected"
                    );

                }

            }
        );

    });

});


/* =========================================================
   AUTOMATIC ACTIVITY DETECTION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const activities =
        document.querySelectorAll(
            ".activity-card, [id^='activity-']"
        );


    activities.forEach(function (activity, index) {

        if (!activity.hasAttribute("data-activity")) {

            activity.setAttribute(
                "data-activity",
                index + 1
            );

        }

    });

});


/* =========================================================
   CHECKBOX ACTIVITIES
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const checkboxes =
        document.querySelectorAll(
            'input[type="checkbox"]'
        );


    checkboxes.forEach(function (checkbox) {

        checkbox.addEventListener(
            "change",
            function () {

                const activity =
                    checkbox.closest(
                        "[data-activity]"
                    );

                if (!activity) return;


                const boxes =
                    activity.querySelectorAll(
                        'input[type="checkbox"]'
                    );


                const checked =
                    activity.querySelectorAll(
                        'input[type="checkbox"]:checked'
                    );


                if (
                    boxes.length > 0 &&
                    checked.length === boxes.length
                ) {

                    updateActivityProgress(
                        activity.dataset.activity
                    );

                }

            }
        );

    });

});


/* =========================================================
   TEXTAREA / WRITING ACTIVITIES
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const textareas =
        document.querySelectorAll(
            "textarea"
        );


    textareas.forEach(function (textarea) {

        textarea.addEventListener(
            "input",
            function () {

                const activity =
                    textarea.closest(
                        "[data-activity]"
                    );

                if (!activity) return;


                /* Count activity complete
                   when learner has written
                   at least 20 characters */

                if (
                    textarea.value.trim().length >= 20
                ) {

                    updateActivityProgress(
                        activity.dataset.activity
                    );

                }

            }
        );

    });

});


/* =========================================================
   STORY SELECTION
========================================================= */

function selectStory(button, storyName) {

    /* Remove previous selection */

    const container =
        button.parentElement;

    if (container) {

        container
            .querySelectorAll("button")
            .forEach(function (item) {

                item.classList.remove(
                    "selected"
                );

            });

    }


    /* Select story */

    button.classList.add("selected");


    /* Mark activity complete */

    const activity =
        button.closest(
            "[data-activity]"
        );

    if (activity) {
        
        updateActivityProgress(
            activity.dataset.activity
        );

    }

}


/* =========================================================
   COMPLETE ACTIVITY BUTTONS
========================================================= */

function completeActivity(activityNumber) {

    updateActivityProgress(
        activityNumber
    );

}function toggleStory(storyId) {
    const story = document.getElementById(storyId);

    if (!story) return;

    const isOpen = story.classList.contains("open");

    document.querySelectorAll(".story-content").forEach(function(item) {
        item.classList.remove("open");
    });

    if (!isOpen) {
        story.classList.add("open");

        story.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}function saveReadingReflection() {
    const reflection = document.getElementById("readingReflection");
    const message = document.getElementById("reflectionMessage");

    if (!reflection || !message) return;

    if (reflection.value.trim() === "") {
        message.textContent = "Please write your reflection first.";
        return;
    }

    message.textContent = "Great work! Your reading reflection has been recorded.";
}
