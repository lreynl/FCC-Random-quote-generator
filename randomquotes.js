//provided by twitter
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
} (document, "script", "twitter-wjs"));

var rndArr = [];
var counter = 0;
//I checked all the sources...
var quotes = [
  ["I don't particularly like it when people put words in my mouth, either, by the way, unless I say it.", "https://georgewbush-whitehouse.archives.gov/news/releases/2007/11/20071110-2.html"],
  ["This is an impressive crowd. The haves and the have mores. Some people call you the elite. I call you my base.", "https://www.c-span.org/video/?c4506459/haves-mores"],
  ["They misunderestimated the fact that we love a neighbor in need. They [underestimated] the compassion of our country. I think they misunderestimated the will and determination of the commander in chief, too.","https://www.youtube.com/watch?v=G5uLz2c0ChI"],
  ["There's an old saying in Tennessee - I know it's in Texas, probably in Tennessee - that says, fool me once, shame on - shame on you. Fool me — you can't get fooled again.", "https://www.youtube.com/watch?v=Be6tunbRcs8"],
  ["So long as I'm the president, my measure of success is victory -- and success.", "http://www.washingtonpost.com/wp-dyn/content/article/2008/04/17/AR2008041702641.html"],
  ["I'm telling you there's an enemy that would like to attack America, Americans, again. There just is. That's the reality of the world. And I wish him all the very best.", "https://www.nytimes.com/2009/01/12/us/politics/12text-bush.html?pagewanted=all&_r=0"],
  ["I remember meeting a mother of a child who was abducted by the North Koreans right here in the Oval Office.", "https://georgewbush-whitehouse.archives.gov/news/releases/2008/06/20080626-9.html"],
  ["Removing Saddam Hussein was the right decision early in my presidency, it is the right decision now, and it will be the right decision ever.", "https://www.c-span.org/video/?204393-1/republican-congressional-fundraising-dinner"],
  ["This thaw -- took a while to thaw, it's going to take a while to unthaw.", "https://www.youtube.com/watch?v=Be6tunbRcs8"],
  ["And so the fact that they purchased the machine meant somebody had to make the machine. And when somebody makes a machine, it means there's jobs at the machine-making place.", "https://www.gpo.gov/fdsys/pkg/PPP-2008-book1/html/PPP-2008-book1-doc-pg729.htm"],
  ["And I, unfortunately, have been to too many disasters as president.", "https://georgewbush-whitehouse.archives.gov/news/releases/2008/06/20080617-1.html"],
  ["I can press when there needs to be pressed; I can hold hands when there needs to be -- hold hands.", "https://www.mirror.co.uk/news/uk-news/george-bushs-50-worst-bloopers-371035"],
  ["In terms of the economy, look, I inherited a recession, I am ending on a recession.", "http://latimesblogs.latimes.com/washington/2009/01/george-w-bush.html"],
  ["Wait a minute. What did you just say? You're predicting $4-a-gallon gas? ... That's interesting. I hadn't heard that.", "http://www.latimes.com/nation/la-na-gas29feb29-story.html"],
  ["This is my maiden voyage. My first speech since I was the president of the United States and I couldn't think of a better place to give it than Calgary, Canada.", "http://www.cbsnews.com/news/bush-speech-in-canada-met-with-protests/"],
  ["I've abandoned free market principles to save the free market system.", "https://www.youtube.com/watch?v=Tmi8cJG0BJo"],
  ["And so, General, I want to thank you for your service. And I appreciate the fact that you really snatched defeat out of the jaws of those who are trying to defeat us in Iraq.", "https://georgewbush-whitehouse.archives.gov/news/releases/2008/03/20080303-2.html"],
  ["Goodbye from the world's biggest polluter.", "https://www.telegraph.co.uk/news/worldnews/2277298/President-George-Bush-Goodbye-from-the-worlds-biggest-polluter.html"],
  ["Let me start off by saying that in 2000 I said, 'Vote for me. I'm an agent of change.' In 2004, I said, 'I'm not interested in change -- I want to continue as president.' Every candidate has got to say 'change.' That's what the American people expect.", "http://transcripts.cnn.com/TRANSCRIPTS/0803/05/cnr.04.html"],
  ["The German asparagus are fabulous.", "http://www.reuters.com/article/us-bush-asparagus-idUSL1166837220080611"],
  ["Anyone engaging in illegal financial transactions will be caught and persecuted.", "http://www.crossingwallstreet.com/archives/2008/09/bush-anyone-engaging-in-illegal-financial-transactions-will-be-caught-and-persecuted.html"],
  ["I think it was in the Rose Garden where I issued this brilliant statement: If I had a magic wand -- but the president doesn't have a magic wand. You just can't say, 'low gas.'", "http://www.cnn.com/TRANSCRIPTS/0807/18/se.01.html"],
  ["Let's make sure that there is certainty during uncertain times in our economy.", "http://www.presidency.ucsb.edu/ws/index.php?pid=77438"],
  ["One of the very difficult parts of the decision I made on the financial crisis was to use hardworking people's money to help prevent there to be a crisis.", "https://georgewbush-whitehouse.archives.gov/news/releases/2009/01/20090112.html"],
  ["I'm going to put people in my place, so when the history of this administration is written at least there's an authoritarian voice saying exactly what happened.", "http://www.foxnews.com/politics/2009/03/17/bush-obama-deserves-silence-wont-criticize-new-administration.html"],
  ["Afghanistan is the most daring and ambition mission in the history of NATO.", "http://www.presidency.ucsb.edu/ws/index.php?pid=76889"],
  ["One of the things important about history is to remember the true history.", "http://www.prnewswire.com/news-releases/interview-of-president-bush-by-gianni-riotta-rai-tv-italy-57415192.html"],
  ["Yesterday, you made note of my -- the lack of my talent when it came to dancing. But nevertheless, I want you to know I danced with joy. And no question Liberia has gone through very difficult times.", "https://georgewbush-whitehouse.archives.gov/news/releases/2008/10/20081022-1.html"],
  ["I guess it's OK to call the Secretary of Education here 'buddy.' That means friend.", "http://www.realclearpolitics.com/articles/2009/01/bush_celebrates_the_no_child_l.html"],
  ["I'm coming as the president of a friend, and I'm coming as a sportsman.", "https://www.gpo.gov/fdsys/pkg/WCPD-2008-08-04/html/WCPD-2008-08-04-Pg1061.htm"],
  ["We want people owning their home -- we want people owning a businesses.", "http://www.presidency.ucsb.edu/ws/?pid=76968"],
  ["Should the Iranian regime -- do they have the sovereign right to have civilian nuclear power? So, like, if I were you, that's what I'd ask me. And the answer is, yes, they do.", "https://www.gpo.gov/fdsys/pkg/WCPD-2008-07-14/html/WCPD-2008-07-14-Pg949.htm"],
  ["You know, I'm the President during this period of time, but I think when the history of this period is written, people will realize a lot of the decisions that were made on Wall Street took place over a decade or so, before I arrived in President, during I arrived in President.", "http://abcnews.go.com/WN/Politics/story?id=6356046&page=1"],
  ["There is no doubt in my mind when history was written, the final page will say: Victory was achieved by the United States of America for the good of the world.", "https://georgewbush-whitehouse.archives.gov/news/releases/2008/01/20080112-3.html"],
  ["There's no question this is a major human disaster that requires a strong response from the Chinese government, which is what they're providing, but it also responds a compassionate response from nations to whom -- that have got the blessings, good blessings of life, and that's us.", "https://georgewbush-whitehouse.archives.gov/news/releases/2008/06/20080606.html"],
  ["We got plenty of money in Washington. What we need is more priority.", "http://www.businesswire.com/news/home/20080602006225/en/Remarks-President-Meeting-Economy-Tax-Cuts"],
  ["There is some who say that perhaps freedom is not universal. Maybe it's only Western people that can self-govern. Maybe it's only, you know, white-guy Methodists who are capable of self-government. I reject that notion.", "https://georgewbush-whitehouse.archives.gov/news/releases/2008/06/20080616-1.html"],
  ["We're fixing to go down to Galveston and obviously are going to see a devastated part of this fantastic state.", "https://georgewbush-whitehouse.archives.gov/news/releases/2008/09/20080916-3.html"],
  ["We spent a lot of time talking about Africa, as we should. Africa is a nation that suffers from incredible disease.", "https://www.nytimes.com/2001/06/15/world/deep-us-europe-split-casts-long-shadow-on-bush-tour.html"],
  ["You teach a child to read, and he or her will be able to pass a literacy test.", "https://www.youtube.com/watch?v=uO46ii3W07U"],
  ["I am here to make an announcement that this Thursday, ticket counters and airplanes will fly out of Ronald Reagan Airport.", "http://www.pbs.org/newshour/updates/terrorism-july-dec01-bush_speech_10-2/"],
  ["Tribal sovereignty means that; it's sovereign. I mean, you're a -- you've been given sovereignty, and you're viewed as a sovereign entity. And therefore the relationship between the federal government and tribes is one between sovereign entities.", "https://www.youtube.com/watch?v=B5xVRXLgLxw"],
  ["You know, one of the hardest parts of my job is to connect Iraq to the war on terror.", "http://www.cbsnews.com/news/transcript-president-bush-part-2/"],
  ["I couldn't imagine somebody like Osama bin Laden understanding the joy of Hanukkah, or the joy of Christmas, or celebrating peace and hope.", "https://www.nytimes.com/2001/12/11/world/nation-challenged-evidence-later-video-bin-laden-may-be-public-this-week.html"],
  ["I think I was unprepared for war.", "https://www.youtube.com/watch?v=i-9nN-l8zXg"],
  ["I hear there's rumors on the Internets that we're going to have a draft.", "http://www.cnn.com/2004/ALLPOLITICS/10/08/debate.transcript/"],
  ["I know the human being and fish can coexist peacefully.", "https://www.c-span.org/video/?159527-1/energy-issues"],
  ["See, in my line of work you got to keep repeating things over and over and over again for the truth to sink in, to kind of catapult the propaganda.", "https://www.youtube.com/watch?v=VxnegxNEDAc"],
  ["I wish you'd have given me this written question ahead of time so I could plan for it...I'm sure something will pop into my head here in the midst of this press conference, with all the pressure of trying to come up with answer, but it hadn't yet...I don't want to sound like I have made no mistakes. I'm confident I have. I just haven't -- you just put me under the spot here, and maybe I'm not as quick on my feet as I should be in coming up with one.", "https://www.youtube.com/watch?v=lxM1d8KqsGg"],
  ["I just want you to know that, when we talk about war, we're really talking about peace.", "http://archives.hud.gov/remarks/martinez/speeches/presremarks.cfm"],
  ["Major combat operations in Iraq have ended. In the battle of Iraq, the United States and our allies have prevailed.", "http://www.cnn.com/2003/US/05/01/bush.transcript/"],
  ["I don't know where [bin Laden] is. I just don't spend that much time on him.", "https://www.youtube.com/watch?v=4PGmnz5Ow-o"],
  ["If this were a dictatorship, it'd be a heck of a lot easier -- just so long as I'm the dictator.", "https://www.youtube.com/watch?v=aD3xfT0c99g"],
  ["I'm the decider, and I decide what is best. And what's best is for Don Rumsfeld to remain as the Secretary of Defense.", "https://www.youtube.com/watch?v=E2Zv1T4Qdv4"],
  ["Too many OB-GYN's aren't able to practice their love with women all across this county.", "https://www.youtube.com/watch?v=OF48IghIN7c"],
  ["You work three jobs? ... Uniquely American, isn't it? I mean, that is fantastic that you're doing that.", "https://www.youtube.com/watch?v=kIjo-dWE1Jg"]
];

//Executes when page is loaded. The array arr is
//filled with digits 0 to quotes.length-1 then shuffled.
//The arr is stepped through and the quote with that
//index is pulled from the quotes array.
function buildRnd(arr, quotes) {
  for(var i = 0; i < quotes.length; ++i) {
    arr.push(i);
  }
  shuffle(arr);
  return arr;
}

//shuffle array
function shuffle(arr) {
  var curIndex = arr.length, tempValue, randIndex;
  while (curIndex !== 0) {
    randIndex = Math.floor(Math.random() * curIndex);
    curIndex--;
    tempValue = arr[curIndex];
    arr[curIndex] = arr[randIndex];
    arr[randIndex] = tempValue;
  }
  return arr;
}

function switchText(rndArr) {
  $("#getQuote").slideToggle("fast", function() {
    //insert quote
    document.getElementById('getQuote').innerHTML = quotes[rndArr[counter]][0];
    //insert source
    document.getElementById('getSource').innerHTML = "<a href='" + quotes[rndArr[counter]][1] + "\' target=\'_blank\'>" + quotes[rndArr[counter]][1] + "</a>";
    var twButton = makeTweetButton(quotes[rndArr[counter]][0]);
  document.querySelector('.pull-right').appendChild(twButton);
  document.querySelector('iframe').remove();
  //next index in shuffled array
  counter++;
  //loop to beginning of array
  if(counter > quotes.length - 1) {
    counter = 0;
  }
  twttr.widgets.load();
  });
  $("#getQuote").slideToggle("slow");
}

function makeTweetButton(quote) {
  //console.log(quote);
  var tweetButton = document.createElement('a');
  tweetButton.setAttribute('href', 'https://twitter.com/share');
  //set text to button
  tweetButton.setAttribute("data-text", quote + " -GWB");
  tweetButton.setAttribute('class', 'twitter-share-button');
  //how many times it has been tweeted
  tweetButton.setAttribute('data-count', 'horizontal');
  tweetButton.setAttribute('data-size', 'large');
  return tweetButton;
}
