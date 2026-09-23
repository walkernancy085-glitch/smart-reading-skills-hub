/* =========================================================
   SMART READING SKILLS HUB
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   LESSONS
   Click a lesson to open or close it
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const lessonButtons = document.querySelectorAll(".lesson-toggle");

    lessonButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const lesson = button.closest(".interactive-lesson");

            if (!lesson) {
                return;
            }

            lesson.classList.toggle("open");

        });

    });

});


/* =========================================================
   READING LIBRARY
   FULL STORIES
========================================================= */

function openLessonStory(storyName) {

    const display = document.getElementById("lessonStoryDisplay");

    if (!display) {
        return;
    }


    const stories = {

        community: {
            title: "Community Reading Club",

            text: [
                "Every Saturday morning, Ama and her classmates meet at the community centre in their town to read together. The reading club was started by their teacher, Mr. Mensah, because he wanted the children to develop a love for books and improve their reading skills.",

                "The community centre is close to the school and has a small reading area with tables, chairs and shelves. Although there are not many books, the learners share the available books and take turns reading. Some of the books contain stories about Ghanaian families, traditional festivals, farming, wildlife and life in different communities.",

                "One Saturday, the group read a story about a farmer in the Eastern Region who planted cocoa, plantain and vegetables. After reading the story, the learners discussed the main idea and identified new words. Ama explained the meaning of some difficult words to her friends, while Kojo used a dictionary to find the meanings of others.",

                "At the end of the lesson, Mr. Mensah asked the learners to explain what they had learnt. The children agreed that reading together made learning more enjoyable. They also decided to visit the community centre every Saturday so that they could continue improving their reading skills."
            ]
        },


        cocoa: {
            title: "The Cocoa Farmer’s Morning",

            text: [
                "Kofi is a cocoa farmer who lives with his family in a small village in the Eastern Region of Ghana. He enjoys farming because it provides food and income for his family. Every morning, Kofi wakes up early before the sun becomes too hot.",

                "After eating breakfast, Kofi prepares his farming tools. He carries a cutlass, a small basket and a bottle of water. His son, Kwame, sometimes joins him on the farm during weekends and holidays.",

                "When Kofi arrives at the farm, he first walks around the cocoa trees. He checks the plants carefully to make sure they are healthy. He removes weeds growing around the trees and clears dry leaves from the paths. He also looks for ripe cocoa pods that are ready to be harvested.",

                "Later in the morning, Kofi and Kwame collect the ripe cocoa pods. They place them carefully in baskets so that the pods do not get damaged. Kofi teaches his son that a good farmer must be patient and take proper care of the farm.",

                "By midday, the work is finished. Kofi and Kwame return home tired but happy. Kofi knows that although farming requires hard work, caring for the farm can provide a better future for the family."
            ]
        },


        market: {
            title: "Ama’s Visit to the Market",

            text: [
                "One Saturday morning, Ama went to the market with her mother. They needed to buy tomatoes, onions, garden eggs, pepper and some fruits for the family. Ama was excited because she enjoyed visiting the market and seeing the different things people sold.",

                "When they arrived, the market was already busy. Traders were arranging vegetables, fruits, clothes and other goods on their tables. Some traders called out to customers while others were weighing food for their buyers.",

                "Ama stayed close to her mother as they moved from one stall to another. Her mother reminded her to be careful because there were many people moving around. Ama watched carefully as her mother compared the prices of different vegetables before choosing what to buy.",

                "At one stall, Ama noticed a woman selling fresh oranges. The woman smiled and allowed Ama to choose some of the oranges. Ama selected the ones that looked fresh and placed them carefully into the shopping bag.",

                "After buying everything they needed, Ama helped her mother carry a small bag. On their way home, Ama told her mother that she had learnt something important from the visit. She had learnt that shopping in a busy market requires patience, careful observation and good planning."
            ]
        },


        homowo: {
            title: "The Homowo Celebration",

            text: [
                "Kojo's community was preparing for the Homowo celebration. The festival was an important time for families and community members to come together. A few days before the celebration, people began cleaning their homes, streets and other community spaces.",

                "Kojo helped his grandmother sweep around their house. His grandmother explained that keeping the surroundings clean was an important part of preparing for the celebration. Other families were also busy preparing food and getting their homes ready to receive visitors.",

                "On the day of the celebration, many people gathered in the community. Children dressed in colourful clothes watched the activities with excitement. Music and drumming could be heard as people took part in the celebration.",

                "Kojo enjoyed spending time with his relatives and friends. His grandmother told him stories about how the festival had been celebrated by earlier generations. She explained that festivals help communities remember their history and pass important traditions from older people to younger people.",

                "At the end of the day, Kojo felt happy because he had learnt more about his culture. He understood that young people have an important role to play in learning about and respecting the traditions of their communities."
            ]
        },


        classmate: {
            title: "The Helpful Classmate",

            text: [
                "One morning, Abena noticed that her classmate Yaw was having difficulty with a reading activity. Yaw could read the passage aloud, but he did not understand some of the difficult words.",

                "Abena decided to help him. She sat beside Yaw and asked him which words he did not understand. Together, they read the sentences again slowly. Abena showed him how to look at the words around an unfamiliar word for clues about its meaning.",

                "Yaw found the word “community” difficult. Abena explained that a community is a group of people who live in the same area or share a place. She then gave him an example from their own community.",

                "After practising several more words, Yaw tried the questions again. This time, he was able to answer most of them correctly. He was happy because he had understood the passage better.",

                "Yaw thanked Abena for helping him. Their teacher noticed what had happened and praised both learners. She reminded the class that learners can support one another when someone is having difficulty.",

                "From that day, Abena and Yaw often studied together. They discovered that sharing ideas and helping one another could make learning easier and more enjoyable."
            ]
        },


        environment: {
            title: "Protecting Our Environment",

            text: [
                "The learners at a basic school noticed that some parts of their school compound had become untidy. Plastic bags, pieces of paper and empty bottles could be seen near some of the classrooms.",

                "Their teacher, Mrs. Owusu, decided to organise an environmental clean-up. She divided the learners into groups and gave each group a different area to clean. Some learners collected rubbish while others swept the compound.",

                "The learners placed the rubbish into bins. They also separated some materials that could be reused or recycled. Mrs. Owusu explained that throwing rubbish on the ground can make the environment dirty and may cause problems such as blocked drains.",

                "After the clean-up, the learners discussed ways of keeping their school clean. They agreed not to throw rubbish on the ground. They also decided to remind their friends to use the bins properly.",

                "The school compound looked much cleaner after the activity. The learners felt proud of their work because they had worked together to improve their surroundings.",

                "Mrs. Owusu reminded them that protecting the environment should not happen only during a clean-up exercise. Everyone should help care for the environment every day. The learners agreed to make cleanliness a regular part of their school life."
            ]
        }

    };


    const selectedStory = stories[storyName];


    if (!selectedStory) {

        display.innerHTML = `
            <div class="lesson-story-card">
                <h3>Story not found</h3>
                <p>Please choose another story.</p>
            </div>
        `;

        return;
    }


    /* Create the story paragraphs */

    let paragraphs = "";

    selectedStory.text.forEach(function (paragraph) {

        paragraphs += `<p>${paragraph}</p>`;

    });


    /* Display the story */

    display.innerHTML = `

        <div class="lesson-story-card">

            <div class="lesson-story-header">

                <span>📖 READING PASSAGE</span>

                <h3>
                    ${selectedStory.title}
                </h3>

            </div>


            <div class="lesson-story-text">

                ${paragraphs}

            </div>


            <div class="lesson-story-task">

                <strong>
                    💭 Think About It
                </strong>

                <p>
                    What is the main lesson or message you get
                    from this story?
                </p>

                <textarea
                    placeholder="Write your answer here..."
                ></textarea>

            </div>

        </div>

    `;


    /* Move the learner to the story */

    display.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   LEARNING ACTIVITIES
========================================================= */


/* Multiple-choice questions */

function checkChoice(button, correct) {

    const feedback =
        button.parentElement.nextElementSibling;

    const buttons =
        button.parentElement.querySelectorAll(
            ".choice-button"
        );


    buttons.forEach(function (item) {

        item.disabled = true;

    });


    if (correct) {

        button.classList.add("correct");

        if (feedback) {

            feedback.textContent =
                "Correct! Well done. 🎉";

            feedback.className =
                "feedback correct-feedback";

        }

    } else {

        button.classList.add("incorrect");

        if (feedback) {

            feedback.textContent =
                "Not quite. Read the question and passage again.";

            feedback.className =
                "feedback incorrect-feedback";

        }

    }

}


/* True or False / detail questions */

function toggleDetail(button, correct) {

    const feedback =
        button.parentElement.nextElementSibling;


    if (correct) {

        button.classList.add("correct");

        if (feedback) {

            feedback.textContent =
                "Correct! You found the right detail. ✓";

            feedback.className =
                "feedback correct-feedback";

        }

    } else {

        button.classList.add("incorrect");

        if (feedback) {

            feedback.textContent =
                "Try again. Look carefully at the passage.";

            feedback.className =
                "feedback incorrect-feedback";

        }

    }

}


/* Complete activity */

function completeActivity(button) {

    const card =
        button.closest(".activity-card");


    if (!card) {
        return;
    }


    card.classList.add("completed");


    button.textContent =
        "✓ Activity Completed";


    button.disabled = true;


    updateActivityProgress();

}


/* Writing feedback */

function showWritingFeedback(button) {

    const card =
        button.closest(".activity-card");


    if (!card) {
        return;
    }


    const textarea =
        card.querySelector("textarea");


    const feedback =
        card.querySelector(".feedback");


    if (!textarea || !feedback) {
        return;
    }


    if (textarea.value.trim() === "") {

        feedback.textContent =
            "Write your answer before checking.";

        feedback.className =
            "feedback incorrect-feedback";

        return;

    }


    feedback.textContent =
        "Good effort! Check your answer against the lesson and improve it if necessary.";

    feedback.className =
        "feedback correct-feedback";

}


/* =========================================================
   ACTIVITY PROGRESS
========================================================= */

function updateActivityProgress() {

    const completed =
        document.querySelectorAll(
            ".activity-card.completed"
        ).length;


    const total =
        document.querySelectorAll(
            ".activity-card"
        ).length;


    const progressText =
        document.querySelector(".activity-progress");


    if (progressText) {

        progressText.textContent =
            `${completed} of ${total} completed`;

    }

}


/* =========================================================
   READING LIBRARY ON ACTIVITIES PAGE
========================================================= */

function selectStory(button, storyName) {

    const selectedStory =
        document.getElementById("selectedStory");


    if (!selectedStory) {
        return;
    }


    const stories = {

        "Community Reading Club": {
            title: "Community Reading Club",

            text: `Every Saturday morning, Ama and her classmates meet at the community centre in their town to read together. The reading club was started by their teacher, Mr. Mensah, because he wanted the children to develop a love for books and improve their reading skills.

The community centre is close to the school and has a small reading area with tables, chairs and shelves. Although there are not many books, the learners share the available books and take turns reading. Some of the books contain stories about Ghanaian families, traditional festivals, farming, wildlife and life in different communities.

One Saturday, the group read a story about a farmer in the Eastern Region who planted cocoa, plantain and vegetables. After reading the story, the learners discussed the main idea and identified new words. Ama explained the meaning of some difficult words to her friends, while Kojo used a dictionary to find the meanings of others.

At the end of the lesson, Mr. Mensah asked the learners to explain what they had learnt. The children agreed that reading together made learning more enjoyable. They also decided to visit the community centre every Saturday so that they could continue improving their reading skills.`
        },


        "The Cocoa Farmer’s Morning": {
            title: "The Cocoa Farmer’s Morning",

            text: `Kofi is a cocoa farmer who lives with his family in a small village in the Eastern Region of Ghana. He enjoys farming because it provides food and income for his family. Every morning, Kofi wakes up early before the sun becomes too hot.

After eating breakfast, Kofi prepares his farming tools. He carries a cutlass, a small basket and a bottle of water. His son, Kwame, sometimes joins him on the farm during weekends and holidays.

When Kofi arrives at the farm, he first walks around the cocoa trees. He checks the plants carefully to make sure they are healthy. He removes weeds growing around the trees and clears dry leaves from the paths. He also looks for ripe cocoa pods that are ready to be harvested.

Later in the morning, Kofi and Kwame collect the ripe cocoa pods. They place them carefully in baskets so that the pods do not get damaged. Kofi teaches his son that a good farmer must be patient and take proper care of the farm.

By midday, the work is finished. Kofi and Kwame return home tired but happy. Kofi knows that although farming requires hard work, caring for the farm can provide a better future for the family.`
        },


        "Ama’s Visit to the Market": {
            title: "Ama’s Visit to the Market",

            text: `One Saturday morning, Ama went to the market with her mother. They needed to buy tomatoes, onions, garden eggs, pepper and some fruits for the family. Ama was excited because she enjoyed visiting the market and seeing the different things people sold.

When they arrived, the market was already busy. Traders were arranging vegetables, fruits, clothes and other goods on their tables. Some traders called out to customers while others were weighing food for their buyers.

Ama stayed close to her mother as they moved from one stall to another. Her mother reminded her to be careful because there were many people moving around. Ama watched carefully as her mother compared the prices of different vegetables before choosing what to buy.

At one stall, Ama noticed a woman selling fresh oranges. The woman smiled and allowed Ama to choose some of the oranges. Ama selected the ones that looked fresh and placed them carefully into the shopping bag.

After buying everything they needed, Ama helped her mother carry a small bag. On their way home, Ama told her mother that she had learnt something important from the visit. She had learnt that shopping in a busy market requires patience, careful observation and good planning.`
        },


        "The Homowo Celebration": {
            title: "The Homowo Celebration",

            text: `Kojo's community was preparing for the Homowo celebration. The festival was an important time for families and community members to come together. A few days before the celebration, people began cleaning their homes, streets and other community spaces.

Kojo helped his grandmother sweep around their house. His grandmother explained that keeping the surroundings clean was an important part of preparing for the celebration. Other families were also busy preparing food and getting their homes ready to receive visitors.

On the day of the celebration, many people gathered in the community. Children dressed in colourful clothes watched the activities with excitement. Music and drumming could be heard as people took part in the celebration.

Kojo enjoyed spending time with his relatives and friends. His grandmother told him stories about how the festival had been celebrated by earlier generations. She explained that festivals help communities remember their history and pass important traditions from older people to younger people.

At the end of the day, Kojo felt happy because he had learnt more about his culture. He understood that young people have an important role to play in learning about and respecting the traditions of their communities.`
        },


        "The Helpful Classmate": {
            title: "The Helpful Classmate",

            text: `One morning, Abena noticed that her classmate Yaw was having difficulty with a reading activity. Yaw could read the passage aloud, but he did not understand some of the difficult words.

Abena decided to help him. She sat beside Yaw and asked him which words he did not understand. Together, they read the sentences again slowly. Abena showed him how to look at the words around an unfamiliar word for clues about its meaning.

Yaw found the word "community" difficult. Abena explained that a community is a group of people who live in the same area or share a place. She then gave him an example from their own community.

After practising several more words, Yaw tried the questions again. This time, he was able to answer most of them correctly. He was happy because he had understood the passage better.

Yaw thanked Abena for helping him. Their teacher noticed what had happened and praised both learners. She reminded the class that learners can support one another when someone is having difficulty.

From that day, Abena and Yaw often studied together. They discovered that sharing ideas and helping one another could make learning easier and more enjoyable.`
        },


        "Protecting Our Environment": {
            title: "Protecting Our Environment",

            text: `The learners at a basic school noticed that some parts of their school compound had become untidy. Plastic bags, pieces of paper and empty bottles could be seen near some of the classrooms.

Their teacher, Mrs. Owusu, decided to organise an environmental clean-up. She divided the learners into groups and gave each group a different area to clean. Some learners collected rubbish while others swept the compound.

The learners placed the rubbish into bins. They also separated some materials that could be reused or recycled. Mrs. Owusu explained that throwing rubbish on the ground can make the environment dirty and may cause problems such as blocked drains.

After the clean-up, the learners discussed ways of keeping their school clean. They agreed not to throw rubbish on the ground. They also decided to remind their friends to use the bins properly.

The school compound looked much cleaner after the activity. The learners felt proud of their work because they had worked together to improve their surroundings.

Mrs. Owusu reminded them that protecting the environment should not happen only during a clean-up exercise. Everyone should help care for the environment every day. The learners agreed to make cleanliness a regular part of their school life.`
        }

    };


    const story =
        stories[storyName];


    if (!story) {
        return;
    }


    const paragraphs =
        story.text
            .split("\n\n")
            .map(function (paragraph) {

                return `<p>${paragraph}</p>`;

            })
            .join("");


    selectedStory.innerHTML = `

        <div class="selected-story-inner">

            <span class="lesson-badge">
                READING PASSAGE
            </span>

            <h3>
                ${story.title}
            </h3>

            <div class="story-text">

                ${paragraphs}

            </div>

            <div class="story-mission">

                <strong>
                    💭 Your Reading Mission
                </strong>

                <p>
                    Read the story carefully. Try to identify the
                    main idea, important details and new words.
                </p>

            </div>

        </div>

    `;


    selectedStory.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   STARTUP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    updateActivityProgress();

});