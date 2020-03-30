import React from 'react';
import bioPic from '../resources/bioPic.png';

export default function Bio() {
    return (
        <div>
            <img
                src={bioPic}
                alt={'Bio Pic'}
                style={{
                    marginBottom: '16px'
                }}
            />
            <div
                id={'bioBody'}
            >
                <p>
                    Hello all, my name is Wes and I'm a self taught software engineer currently employeed at fortune one company Walmart. I started off with a desire to build my own video game, but quickly realized that there was much knowledge to be gained before being able to accomplish such a task. So I began my journey.
                </p>
                <p>
                    I quickly looked to the local community college (Northwest Arkansas Community College), but then life shifted and I had a family to support; which required me to be able to support my beautiful wife and soon to be son.
                </p>
                <p>
                    I performed some local labor occupations (mover, landscaper, etc.) and then I landed in a position as a car detailer at a new car lot, and this would start leading back down the path back to where I started. I made friends with lots of the salesmen there at the lot and started coming to the realization that they always seemed to be having fun working with people. I figured, hey, this sounds like a good thing to get into, and I'm in good with the bosses, so maybe I can get into a sales position.
                </p>
                <p>
                    This did not pan out at all like I expected. They said that they'd be looking into it in the spring. But at that time where actively hiring new salesmen, it just wasn't going to happen. During this time I became exceptionally good friends with a man named Jeremy Owens. Jeremy was exceptionally skilled at reading people, their situations, and how to get them to their goals (typically, but not limited to, getting them in a vehicle).
                </p>
                <p>
                    Towards the end of my stay, Jeremy moved on and shortly after, offered me my first sales job as a used car salesman. I quickly started taking lessons from Jeremy, how to analyze people and situations) and to wrap up deals quickly if need be. I started realizing that keeping tabs on all these people was going to become very cumbersome. I started to look back into when I started dabbling in java and thought that I could probably make some rudimentary "inventory management system of people" to keep tabs on them and what they were looking for. I started hitting the books again in the wee hours of the night. Turns out being a salesman takes up a lot of your waking hours honing your craft.
                </p>
                <p>
                    I started chipping away at the ice to get them little gems of knowledge. In all fairness I maybe accomplished MAYBE half of what I wanted to accomplish on this project. Then it came my time to move on to another opportunity at none other than Walmart. I spent some time in the contact center resolving issues that store associates where having. During this time there was often down times that I could start leveraging to continue growning my knowledge. So I started with learning VBA, because one of the most commonly used tools there was excel. I started stringing together multiple sheets that had isolated bits of information into a single string and I learned some of the basic programming patterns to accomplish some more complicated tasks.
                </p>
                <p>
                    I found an opening in a more technical area of Walmart in Field Support. This space provided support to Walmart stores, and Sam's Clubs registers and register infrastructure. During ths time I put more use of my VBA scripting skills to get some more nitty gritty reports put together. During this time I come to the realization that there was not very much visibility to the the miscellaneous devices in the stores and clubs. So I began building out a basic html webpage with a NodeJS backend. The NodeJS backend would perform multiple Linux based tasks that a technician would typically perform to gather data, and then return it to the front end for easy dissection for analyzing the situation at the store and how it could correlate the reported issue(s). This greatly improved the time to gather necessary information, but it still wasn't good enough.
                </p>
                <p>
                    Continuing down this track of logic, I would start laying down the ground work for what I would eventually hand off to my successor to take on as a task. I moved on and finally moved on to a software engineering position in the department's "Automation Team". Over the last year I've overseen the growth and maturation of my visibbility project as it was handed from my successor to his successor, mentoring each of them along the way and directing the path of growth for it to be as successful as performant, and scalable as possible. The project is now capable of going through all of Walmart's and Sam's Club's 5,000+ sites looking for, cataloging, and analyzing 200,000+ devices within a single datastore. There's now plans to use this dataset as a launching platform for AI and Machine Learning. The idea is to become able to perform more preventative maintenance rather than reactive maintenance.
                </p>
                <p>
                    Meanwhile of the continued growth of my former project and active oversight; I continued my growth in knowledge and practice of NodeJS,  ReactJS, and React-Native. I have been working on a desktop website and mobile app that supports on average 2,500+ concurrent users at any given time with even more during holiday times. Implementing all that I have learned from my prior project I implement as much scalability as possible within this platform's backends and responsiveness on the front end without any side effects. This is me, my journey, and where I'm currently at. Feel free to reach out to me as I'm always welcoming new friends and connections!
                </p>
                <p>
                    On the side, I'm currently looking to get more into becoming involved in some open source work of some sort. I've starting putting some simple pieces on my public Github account, but in all honesty, I still have some work to do. But what I do have are some simple shell scripts, one of which is a set of scripts to aid in the creation and deployment of Minecraft servers. One of my favorite games!
                </p>
            </div>
        </div>
    );
}
