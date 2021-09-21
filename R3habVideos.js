// {Name: R3habVideos}
// {Description: play videos}
// {Visibility: Admin}

const videos = [
  {
    "title": "R3HAB x THRDL!FE ft Olivia Holt - Wrong Move (Lyric Video)",
    "cleanTitle": "Wrong Move",
    "youtubeLink": "https://youtube.com/watch?v=dp3Q3eADLpo"
  },
  {
    "title": "R3HAB - EDC Las Vegas 2018 - Recap",
    "cleanTitle": "EDC Las Vegas 2018",
    "youtubeLink": "https://youtube.com/watch?v=sNHpM0QLX8A"
  },
  {
    "title": "Kiiara - Messy (R3HAB Remix)",
    "cleanTitle": "Kiara Messy Rehab Remix",
    "youtubeLink": "https://youtube.com/watch?v=nBQq2Ca-jqw"
  },
  {
    "title": "Calvin Harris & Dua Lipa - One Kiss (R3HAB x Skytech Trap Remix)",
    "cleanTitle": "One Kiss skytech Remix",
    "youtubeLink": "https://youtube.com/watch?v=XlTQr6EB6wA"
  },
  {
    "title": "R3HAB x Skytech - Let It Go (Official Video)",
    "cleanTitle": "Let It Go",
    "youtubeLink": "https://youtube.com/watch?v=UQ7iZS60Gkw"
  },
  {
    "title": "Calvin Harris & Dua Lipa - One Kiss (R3HAB Remix)",
    "cleanTitle": "One Kiss",
    "youtubeLink": "https://youtube.com/watch?v=0GWK3pEb6eM"
  },
  {
    "title": "R3HAB x Quinn Lewis - How You've Been (Official Video)",
    "cleanTitle": "How You have Been",
    "youtubeLink": "https://youtube.com/watch?v=TrtUwHFaxTI"
  },
  {
    "title": "R3HAB x Skytech - What You Do (Official Video)",
    "cleanTitle": "What You Do",
    "youtubeLink": "https://youtube.com/watch?v=X_4LLLQMXbQ"
  },
  {
    "title": "R3HAB - Live @ Electric Daisy Carnival Las Vegas 2018",
    "cleanTitle": "Live Electric Daisy Carnival Las Vegas 2018",
    "youtubeLink": "https://youtube.com/watch?v=wv2SDDcptfU"
  },
  {
    "title": "R3HAB x Lia Marie Johnson - The Wave (Crossnaders Remix)",
    "cleanTitle": "The Wave Crossnaders Remix",
    "youtubeLink": "https://youtube.com/watch?v=UdIuXllzHWc"
  },
  {
    "title": "R3HAB & Krewella - Ain't That Why (22 Bullets Remix)",
    "cleanTitle": "Ain't That Why Remix",
    "youtubeLink": "https://youtube.com/watch?v=ALhhpSLlM2k"
  },
  {
    "title": "R3HAB x Conor Maynard - Hold On Tight (Official Video)",
    "cleanTitle": "Hold On Tight",
    "youtubeLink": "https://youtube.com/watch?v=2BE6hOkOyrE"
  },
  {
    "title": "R3HAB x Lia Marie Johnson - The Wave (Waysons Remix)",
    "cleanTitle": "The Wave Waysons Remix",
    "youtubeLink": "https://youtube.com/watch?v=1ivTimJBKl8"
  },
  {
    "title": "R3HAB - Outro (Interlude)",
    "cleanTitle": "Outro",
    "youtubeLink": "https://youtube.com/watch?v=06BkH_6VgbI"
  },
  {
    "title": "R3HAB x Noah Neiman - We Do ft. Miranda Glory (Official Video)",
    "cleanTitle": "We Do",
    "youtubeLink": "https://youtube.com/watch?v=P3dbINIdTtU"
  },
  {
    "title": "Nina Nesbitt - Somebody Special (R3HAB Remix)",
    "cleanTitle": "Somebody Special",
    "youtubeLink": "https://youtube.com/watch?v=8xAmN2pkRAg"
  },
  {
    "title": "R3HAB x Skytech - HYPERSPACE (Official Video)",
    "cleanTitle": "hyperspace",
    "youtubeLink": "https://youtube.com/watch?v=-CDa4WG_43s"
  },
  {
    "title": "R3HAB - Sahara (Interlude)",
    "cleanTitle": "Sahara",
    "youtubeLink": "https://youtube.com/watch?v=rpKHsqkU04s"
  },
  {
    "title": "Greyson Chance - Low (R3HAB Remix)",
    "cleanTitle": "Low",
    "youtubeLink": "https://youtube.com/watch?v=M6bBUYIeRSg"
  },
  {
    "title": "Marshmello & Anne-Marie - Friends (R3HAB Remix)",
    "cleanTitle": "Friends",
    "youtubeLink": "https://youtube.com/watch?v=e0Hubvu3XpU"
  },
  {
    "title": "R3HAB x Krewella - Ain't That Why (Skytech Remix)",
    "cleanTitle": "Ain't That Why Skytech Remix",
    "youtubeLink": "https://youtube.com/watch?v=666Ek_2fR8Y"
  },
  {
    "title": "R3HAB - Burned (Interlude)",
    "cleanTitle": "Burned",
    "youtubeLink": "https://youtube.com/watch?v=32LhWWWB8BI"
  },
  {
    "title": "R3HAB - Hold Me (AmPm Remix)",
    "cleanTitle": "Hold Me AmPm Remix",
    "youtubeLink": "https://youtube.com/watch?v=x9QX0MSl7u0"
  },
  {
    "title": "Lauv - Getting Over You (R3HAB Remix)",
    "cleanTitle": "Getting Over You",
    "youtubeLink": "https://youtube.com/watch?v=NEvcq_uYtho"
  },
  {
    "title": "Rudimental - These Days ft. Jess Glynne, Macklemore & Dan Caplen (R3HAB Remix)",
    "cleanTitle": "These Days",
    "youtubeLink": "https://youtube.com/watch?v=LFhA3i0TUA0"
  },
  {
    "title": "R3HAB x Lia Marie Johnson - The Wave (Official Video)",
    "cleanTitle": "The Wave",
    "youtubeLink": "https://youtube.com/watch?v=F8CR9IP7Mog"
  },
  {
    "title": "R3HAB - Catch Me (Interlude)",
    "cleanTitle": "Catch Me",
    "youtubeLink": "https://youtube.com/watch?v=RwsBchwOWGc"
  },
  {
    "title": "R3HAB x Mike Williams - Lullaby (Official Video)",
    "cleanTitle": "Lullaby",
    "youtubeLink": "https://youtube.com/watch?v=9flXyzcSfT4"
  },
  {
    "title": "R3hab - Don't Stop (Interlude)",
    "cleanTitle": "Don't Stop",
    "youtubeLink": "https://youtube.com/watch?v=rlcxpR_bj30"
  },
  {
    "title": "R3HAB - Trouble (Intro)",
    "cleanTitle": "Trouble",
    "youtubeLink": "https://youtube.com/watch?v=7Jil3l3N8RU"
  },
  {
    "title": "R3HAB & Khrebto - You Could Be (Breathe Carolina Remix)",
    "cleanTitle": "You Could Be Breathe Carolina Remix",
    "youtubeLink": "https://youtube.com/watch?v=lbLEZuHmwyU"
  },
  {
    "title": "Thirty Seconds To Mars - Walk On Water (R3HAB Remix)",
    "cleanTitle": "Walk On Water",
    "youtubeLink": "https://youtube.com/watch?v=Y3zRLglUDwU"
  },
  {
    "title": "Matoma - Slow ft. Noah Cyrus (R3HAB Remix)",
    "cleanTitle": "Slow",
    "youtubeLink": "https://youtube.com/watch?v=SUW7DKVwOmU"
  },
  {
    "title": "R3HAB & Quintino - I Just Can't (Fabian Mazur Remix)",
    "cleanTitle": "I Just Can't Fabian Mazur Remix",
    "youtubeLink": "https://youtube.com/watch?v=QHhYo05ClwY"
  },
  {
    "title": "Rita Ora - Anywhere (R3HAB Remix)",
    "cleanTitle": "Anywhere",
    "youtubeLink": "https://youtube.com/watch?v=83JntHcdcyg"
  },
  {
    "title": "R3HAB & Krewella - Ain't That Why (Official Video)",
    "cleanTitle": "Ain't That Why",
    "youtubeLink": "https://youtube.com/watch?v=Re7xxoEREOo"
  },
  {
    "title": "R3HAB & KSHMR - Islands (Official Video)",
    "cleanTitle": "Islands",
    "youtubeLink": "https://youtube.com/watch?v=PQXb2P1LnhU"
  },
  {
    "title": "Sigrid - Strangers (R3hab Remix)",
    "cleanTitle": "Strangers",
    "youtubeLink": "https://youtube.com/watch?v=gtPUgrB9UfA"
  },
  {
    "title": "Jessie Ware - Alone (R3HAB Remix)",
    "cleanTitle": "Alone",
    "youtubeLink": "https://youtube.com/watch?v=t6-ATMqRzE4"
  },
  {
    "title": "R3HAB & Waysons - Shanghai (Official Video)",
    "cleanTitle": "Shanghai",
    "youtubeLink": "https://youtube.com/watch?v=Sl5dzZoOEFE"
  },
  {
    "title": "Dimitri Vegas & Like Mike vs David Guetta feat. Kiiara - Complicated (R3HAB Remix)",
    "cleanTitle": "Complicated",
    "youtubeLink": "https://youtube.com/watch?v=njR5pdGCn-o"
  },
  {
    "title": "R3HAB - Talking To You ft. Rynn (Official Video)",
    "cleanTitle": "Talking To You",
    "youtubeLink": "https://youtube.com/watch?v=Og_eB-QUGWc"
  },
  {
    "title": "R3HAB & Quintino  - I Just Can't (Official Video)",
    "cleanTitle": "I Just Can't",
    "youtubeLink": "https://youtube.com/watch?v=k0WRpQU9zK0"
  },
  {
    "title": "R3HAB & Khrebto - You Could Be (Lyric Video)",
    "cleanTitle": "You Could Be",
    "youtubeLink": "https://youtube.com/watch?v=e9XKztw4XmM"
  },
  {
    "title": "David Guetta ft. Justin Bieber - 2U (R3hab Remix)",
    "cleanTitle": "2 U",
    "youtubeLink": "https://youtube.com/watch?v=qyOywmD30TU"
  },
  {
    "title": "R3hab & Felix Cartal - Killing Time (Lyric Video)",
    "cleanTitle": "Killing Time",
    "youtubeLink": "https://youtube.com/watch?v=nC3QgSq4Vy8"
  },
  {
    "title": "R3HAB Live at Tomorrowland 2017",
    "cleanTitle": "Live at Tomorrowland 2017",
    "youtubeLink": "https://youtube.com/watch?v=leWuPaJDyuw"
  },
  {
    "title": "R3hab - Hold Me (Official Music Video)",
    "cleanTitle": "Hold Me",
    "youtubeLink": "https://youtube.com/watch?v=yQYfo0NPQGA"
  },
  {
    "title": "Alina Baraz - Electric ft. Khalid (R3hab Remix)",
    "cleanTitle": "Electric",
    "youtubeLink": "https://youtube.com/watch?v=s_m0WUKsr2g"
  },
  {
    "title": "Vote R3HAB for DJ Mag 2017",
    "cleanTitle": "Vote rehab for DJ Mag 2017",
    "youtubeLink": "https://youtube.com/watch?v=6ZyJSpd9m_M"
  },
  {
    "title": "Halsey - Now Or Never (R3hab Remix)",
    "cleanTitle": "Now Or Never",
    "youtubeLink": "https://youtube.com/watch?v=hN6PGnsAfUg"
  },
  {
    "title": "R3hab - Trouble VERITE (Mike Williams Remix)",
    "cleanTitle": "Trouble Mike Williams Remix",
    "youtubeLink": "https://youtube.com/watch?v=8dTk5P2EeYE"
  },
  {
    "title": "Kygo & Ellie Goulding - First Time (R3hab Remix)",
    "cleanTitle": "First Time",
    "youtubeLink": "https://youtube.com/watch?v=WJc7aN3-VnY"
  },
  {
    "title": "R3hab - Truth Or Dare ft. Little Daylight",
    "cleanTitle": "Truth Or Dare",
    "youtubeLink": "https://youtube.com/watch?v=RCu4Id1E-48"
  },
  {
    "title": "Ella Vos - You Don't Know About Me (R3hab Remix)",
    "cleanTitle": "You Don't Know About Me",
    "youtubeLink": "https://youtube.com/watch?v=VIWRFCa6-18"
  },
  {
    "title": "R3hab & Skytech - Marrakech",
    "cleanTitle": "Marrakech",
    "youtubeLink": "https://youtube.com/watch?v=NRQ2S8FAJPI"
  },
  {
    "title": "Bruno Mars - 24k Magic (R3hab Remix)",
    "cleanTitle": "24 k Magic",
    "youtubeLink": "https://youtube.com/watch?v=rL-hVcFbKxs"
  },
  {
    "title": "Clean Bandit - Symphony ft. Zara Larsson (R3HAB remix)",
    "cleanTitle": "Symphony",
    "youtubeLink": "https://youtube.com/watch?v=2yfJeXBoKZ4"
  },
  {
    "title": "Maroon 5 feat Future - Cold (R3hab & Khrebto Remix)",
    "cleanTitle": "Cold",
    "youtubeLink": "https://youtube.com/watch?v=ss4TuhSakRw"
  },
  {
    "title": "R3HAB - Hallucinations feat. R I T U A L (Lyric Video)",
    "cleanTitle": "Hallucinations",
    "youtubeLink": "https://youtube.com/watch?v=139x5NvOCPU"
  },
  {
    "title": "The Chainsmokers & Coldplay - Something Just Like This (R3hab Remix)",
    "cleanTitle": "Something Just Like This",
    "youtubeLink": "https://youtube.com/watch?v=yfdZhwkwpoE"
  },
  {
    "title": "R3HAB - Icarus (Waysons Remix)",
    "cleanTitle": "Icarus Waysons Remix",
    "youtubeLink": "https://youtube.com/watch?v=v_GrWiAmZZo"
  },
  {
    "title": "R3HAB - Trouble feat VERITE (Acoustic)",
    "cleanTitle": "Trouble Acoustic",
    "youtubeLink": "https://youtube.com/watch?v=pZ3crr8x2N8"
  },
  {
    "title": "Khrebto - After All ft. Aiaya",
    "cleanTitle": "After All",
    "youtubeLink": "https://youtube.com/watch?v=OiO5BEsMObU"
  },
  {
    "title": "R3HAB - Trouble ft. VERITE (it's different Remix)",
    "cleanTitle": "Trouble it's different Remix",
    "youtubeLink": "https://youtube.com/watch?v=ZpXg0hu4Ook"
  },
  {
    "title": "DJ Snake & Justin Bieber - Let Me Love You (R3hab Remix)",
    "cleanTitle": "Let Me Love You",
    "youtubeLink": "https://youtube.com/watch?v=QftN6jRJsAE"
  },
  {
    "title": "R3hab - Trouble feat VERITE",
    "cleanTitle": "Trouble featuring veritay",
    "youtubeLink": "https://youtube.com/watch?v=wZEmFDj8ml0"
  },
  {
    "title": "Ella Vos - White Noise (R3hab Remix)",
    "cleanTitle": "White Noise",
    "youtubeLink": "https://youtube.com/watch?v=tHwQ7ttabnw"
  },
  {
    "title": "Migos - Bad & Boujee (R3hab vs No Riddim & It's Different Remix)",
    "cleanTitle": "Bad and Boujee Rehab versus No Riddim It's Different Remix",
    "youtubeLink": "https://youtube.com/watch?v=0TzVbgUWqgY"
  },
  {
    "title": "Zara Larsson - I Would Like (R3hab Remix)",
    "cleanTitle": "I Would Like",
    "youtubeLink": "https://youtube.com/watch?v=I0CNwYLBTks"
  },
  {
    "title": "R3hab & Skytech - Everything (VIP Remix)",
    "cleanTitle": "Everything VIP Remix",
    "youtubeLink": "https://youtube.com/watch?v=ErtgARNV-KM"
  },
  {
    "title": "R3HAB & Skytech - Everything",
    "cleanTitle": "Everything",
    "youtubeLink": "https://youtube.com/watch?v=OckRBEojqho"
  },
  {
    "title": "R3HAB - Icarus (Ghost Loft Remix)",
    "cleanTitle": "Icarus Ghost Loft Remix",
    "youtubeLink": "https://youtube.com/watch?v=DoT9AH57BAY"
  },
  {
    "title": "R3HAB - Icarus (Black Caviar Remix)",
    "cleanTitle": "Icarus Black Caviar Remix",
    "youtubeLink": "https://youtube.com/watch?v=7hIXfTb_Lxc"
  },
  {
    "title": "R3HAB - Icarus (R3hab & Skytech Remix)",
    "cleanTitle": "Icarus rehab and Skytech Remix",
    "youtubeLink": "https://youtube.com/watch?v=HufgJMkbh_g"
  },
  {
    "title": "R3hab & Felix Snow - Care (ft. Madi) [Skytech Remix]",
    "cleanTitle": "Care Skytech Remix",
    "youtubeLink": "https://youtube.com/watch?v=sSn_RKum1aw"
  },
  {
    "title": "R3hab - Icarus (Official Music Video)",
    "cleanTitle": "Icarus Music Video",
    "youtubeLink": "https://youtube.com/watch?v=Pa1hDhBl8Ok"
  },
  {
    "title": "Major Lazer & Justin Bieber - Cold Water (R3hab vs Skytech Remix)",
    "cleanTitle": "Cold Water rehab versus Skytech Remix",
    "youtubeLink": "https://youtube.com/watch?v=SvCIrj_Ine0"
  },
  {
    "title": "R3hab - Icarus",
    "cleanTitle": "Icarus",
    "youtubeLink": "https://youtube.com/watch?v=VqAcqUhxZWw"
  },
  {
    "title": "Zara Larsson - Ain't My Fault (R3hab Remix)",
    "cleanTitle": "Ain't My Fault",
    "youtubeLink": "https://youtube.com/watch?v=mKsUDJorvb0"
  },
  {
    "title": "The Chainsmokers ft. Halsey - Closer (R3hab Remix)",
    "cleanTitle": "Closer",
    "youtubeLink": "https://youtube.com/watch?v=drQ-bKk7PJk"
  },
  {
    "title": "R3hab Live at Tomorrowland 2016",
    "cleanTitle": "Live at Tomorrowland 2016",
    "youtubeLink": "https://youtube.com/watch?v=YSiZKYZ5D44"
  },
  {
    "title": "Calvin Harris & Rihanna - This Is What You Came For (R3hab & Henry Fong Remix)",
    "cleanTitle": "This Is What You Came For rehab and Henry Fong Remix",
    "youtubeLink": "https://youtube.com/watch?v=BxmZovupVYU"
  },
  {
    "title": "R3hab - Sakura (Official Music Video)",
    "cleanTitle": "Sakura",
    "youtubeLink": "https://youtube.com/watch?v=w28bzYGEIO8"
  },
  {
    "title": "Rihanna - Kiss It Better (R3hab Remix)",
    "cleanTitle": "Kiss It Better",
    "youtubeLink": "https://youtube.com/watch?v=gitRCAYw_gc"
  },
  {
    "title": "Rihanna - Needed Me (R3hab Remix)",
    "cleanTitle": "Needed Me",
    "youtubeLink": "https://youtube.com/watch?v=iv3Gt7EOQ38"
  },
  {
    "title": "R3hab - Sakura (Available June 10)",
    "cleanTitle": "Sakura june 10",
    "youtubeLink": "https://youtube.com/watch?v=oKL-JCXY_Lk"
  },
  {
    "title": "R3hab & Felix Snow - Care (ft. Madi)",
    "cleanTitle": "Care",
    "youtubeLink": "https://youtube.com/watch?v=qUgc8npXuHk"
  },
  {
    "title": "Rihanna feat Drake - Work (R3hab & Quintino Remix)",
    "cleanTitle": "Work rehab and Quintino Remix",
    "youtubeLink": "https://youtube.com/watch?v=aiHdpRIPnyY"
  },
  {
    "title": "R3hab & Felix Snow - Care (ft. Madi) [Available April 29]",
    "cleanTitle": "Care April 29",
    "youtubeLink": "https://youtube.com/watch?v=mLGjLTeuuU0"
  },
  {
    "title": "Rihanna ft. Drake - Work (R3hab Remix)",
    "cleanTitle": "Work",
    "youtubeLink": "https://youtube.com/watch?v=YqZnsCkK1cU"
  },
  {
    "title": "R3hab & Quintino - Freak (Official Music Video)",
    "cleanTitle": "Freak",
    "youtubeLink": "https://youtube.com/watch?v=RKd2wB4Q4UU"
  },
  {
    "title": "R3HAB & Quintino - Freak ( Available March 11 )",
    "cleanTitle": "Freak March 11",
    "youtubeLink": "https://youtube.com/watch?v=Pcyvj3UiHw4"
  },
  {
    "title": "R3hab & Ciara - Get Up (KSHMR Remix) [Lyric Video]",
    "cleanTitle": "Get Up Kashmir Remix",
    "youtubeLink": "https://youtube.com/watch?v=lLmmu0LbhW0"
  },
  {
    "title": "R3hab & BURNS - Near Me (Official Music Video)",
    "cleanTitle": "Near Me",
    "youtubeLink": "https://youtube.com/watch?v=mls064dqQM4"
  },
  {
    "title": "R3HAB & Ciara - Get Up (KSHMR Remix ) ** Available Jan 29 **",
    "cleanTitle": "Get Up Kashmir remix January 29",
    "youtubeLink": "https://youtube.com/watch?v=jxSqyWgFBkg"
  },
  {
    "title": "R3hab - Hakuna Matata (Hardwell Edit) [OUT NOW!]",
    "cleanTitle": "Hakuna Matata",
    "youtubeLink": "https://youtube.com/watch?v=el8-T0fZH54"
  },
  {
    "title": "R3HAB & KSHMR - Strong (Official Music Video)",
    "cleanTitle": "Strong music video",
    "youtubeLink": "https://youtube.com/watch?v=X3sKF5gfvTA"
  },
  {
    "title": "R3hab & KSHMR - Strong",
    "cleanTitle": "Strong",
    "youtubeLink": "https://youtube.com/watch?v=wh0G5h-wSGM"
  },
  {
    "title": "R3hab & Headhunterz - Won't Stop Rocking (Official Music Video)",
    "cleanTitle": "Won't Stop Rocking",
    "youtubeLink": "https://youtube.com/watch?v=OWstA95iuL0"
  },
  {
    "title": "Rihanna - Bitch Better Have My Money (R3hab Remix)",
    "cleanTitle": "Bitch Better Have My Money",
    "youtubeLink": "https://youtube.com/watch?v=s3KfBhjQZFo"
  },
  {
    "title": "Calvin Harris & Disciples - How Deep Is Your Love (Calvin Harris & R3hab Remix)",
    "cleanTitle": "How Deep Is Your Love",
    "youtubeLink": "https://youtube.com/watch?v=Sodg2B07Ld4"
  },
  {
    "title": "R3hab & Headhunterz - Won't Stop Rocking (Available October 23)",
    "cleanTitle": "Won't Stop Rocking October 23",
    "youtubeLink": "https://youtube.com/watch?v=Rcg7R99HfTc"
  },
  {
    "title": "Axwell & Ingrosso - Sun Is Shining (R3hab Remix)",
    "cleanTitle": "Sun Is Shining",
    "youtubeLink": "https://youtube.com/watch?v=byO94eZhCf4"
  },
  {
    "title": "R3hab vs Skytech & Fafaq - Tiger (Official Music Video)",
    "cleanTitle": "Tiger",
    "youtubeLink": "https://youtube.com/watch?v=gHGgC4wrjg4"
  },
  {
    "title": "R3hab & Sander van Doorn - Phoenix (Official Music Video)",
    "cleanTitle": "Phoenix",
    "youtubeLink": "https://youtube.com/watch?v=1x6bq6I8bJw"
  },
  {
    "title": "R3HAB & KSHMR - Karate (Official Music Video)",
    "cleanTitle": "Karate",
    "youtubeLink": "https://youtube.com/watch?v=N0SYAT3bHdo"
  },
  {
    "title": "R3HAB & KSHMR - Karate (Available December 15)",
    "cleanTitle": "Karate December 15",
    "youtubeLink": "https://youtube.com/watch?v=bgjlT6xZzwQ"
  },
  {
    "title": "Calvin Harris & R3hab - Burnin' (Official Music Video)",
    "cleanTitle": "Burnin",
    "youtubeLink": "https://youtube.com/watch?v=mYgkp3rTLuk"
  },
  {
    "title": "Calvin Harris & John Newman - Blame (R3hab Remix)",
    "cleanTitle": "Blame",
    "youtubeLink": "https://youtube.com/watch?v=BN7Llhelnz0"
  },
  {
    "title": "R3hab & Trevor Guthrie - SoundWave (Official Music Video)",
    "cleanTitle": "SoundWave",
    "youtubeLink": "https://youtube.com/watch?v=Wkyrld1cuLg"
  },
  {
    "title": "John Legend - You And I (R3hab Remix)",
    "cleanTitle": "You And I",
    "youtubeLink": "https://youtube.com/watch?v=ke9UE_gBzY4"
  },
  {
    "title": "R3HAB & NERVO - Ready For The Weekend ft. Ayah Marar (Club Mix)",
    "cleanTitle": "Ready For The Weekend",
    "youtubeLink": "https://youtube.com/watch?v=qcc0DpCNy_Q"
  },
  {
    "title": "R3HAB @ SZIGET FESTIVAL 2014 SITDOWN",
    "cleanTitle": "rehab at sziget Festival 2014 sitdown",
    "youtubeLink": "https://youtube.com/watch?v=V-ZOe4IRk7A"
  },
  {
    "title": "R3HAB & NERVO ft. Ayah Marar - Ready For The Weekend (Official Music Video)",
    "cleanTitle": "Ready For The Weekend",
    "youtubeLink": "https://youtube.com/watch?v=Xh4ogaJ-Xow"
  },
  {
    "title": "R3hab & VINAI - How We Party (Official Music Video)",
    "cleanTitle": "How We Party",
    "youtubeLink": "https://youtube.com/watch?v=2v8n0jy70yk"
  },
  {
    "title": "R3hab feat. Eva Simons - Unstoppable (Will Sparks Remix)",
    "cleanTitle": "Unstoppable will sparks remix",
    "youtubeLink": "https://youtube.com/watch?v=Olz6Uf-nmEQ"
  },
  {
    "title": "R3hab feat. Eva Simons - Unstoppable (Wildstylez Remix)",
    "cleanTitle": "Unstoppable Wildstylez Remix",
    "youtubeLink": "https://youtube.com/watch?v=wfu0DQ70awo"
  },
  {
    "title": "R3hab feat. Eva Simons - Unstoppable (VINAI Remix)",
    "cleanTitle": "Unstoppable vinai Remix",
    "youtubeLink": "https://youtube.com/watch?v=8cWQm1P4Lao"
  },
  {
    "title": "R3hab feat. Eva Simons - Unstoppable (Blinders Remix)",
    "cleanTitle": "Unstoppable Blinders Remix",
    "youtubeLink": "https://youtube.com/watch?v=sa4MV3hI7IM"
  },
  {
    "title": "Calvin Harris - Summer (R3hab & Ummet Ozcan Remix)",
    "cleanTitle": "Summer",
    "youtubeLink": "https://youtube.com/watch?v=QlclVBuh1EM"
  },
  {
    "title": "R3hab feat. Eva Simons - Unstoppable (Will Sparks Remix )",
    "cleanTitle": "Unstoppable Will Sparks Remix",
    "youtubeLink": "https://youtube.com/watch?v=e3mmdTv3EHQ"
  },
  {
    "title": "Tiësto - Wasted (R3hab Remix)",
    "cleanTitle": "Wasted",
    "youtubeLink": "https://youtube.com/watch?v=U111RJ0mFQU"
  },
  {
    "title": "R3hab ft. Eva Simons - 'Unstoppable' (From Pepsi Beats of the Beautiful Game)",
    "cleanTitle": "Unstoppable from Pepsi Beats",
    "youtubeLink": "https://youtube.com/watch?v=kng5E-ITyyU"
  },
  {
    "title": "R3hab ft. Eva Simons - 'Unstoppable' (Official Film Trailer)",
    "cleanTitle": "Unstoppable Film Trailer",
    "youtubeLink": "https://youtube.com/watch?v=0h5P2yuAD38"
  },
  {
    "title": "Rita Ora - I Will Never Let You Down (R3hab Remix)",
    "cleanTitle": "Rita Ora I Will Never Let You Down   Remix",
    "youtubeLink": "https://youtube.com/watch?v=L3p1AJrUpRM"
  },
  {
    "title": "R3hab & Deorro - Flashlight (Original Mix)",
    "cleanTitle": "Flashlight",
    "youtubeLink": "https://youtube.com/watch?v=rz5-X1EsY_8"
  },
  {
    "title": "R3hab - Androids (Available February 25)",
    "cleanTitle": "Androids February 25",
    "youtubeLink": "https://youtube.com/watch?v=uMNsGsC7s8Y"
  },
  {
    "title": "R3hab - Samurai (Go Hard) (Original Mix)",
    "cleanTitle": "Samurai Go Hard",
    "youtubeLink": "https://youtube.com/watch?v=r4yC6DtHtSo"
  },
  {
    "title": "R3hab - Samurai (Go Hard) [Official Video]",
    "cleanTitle": "Samurai Go Hard Video",
    "youtubeLink": "https://youtube.com/watch?v=O94u0F3hzIU"
  },
  {
    "title": "R3hab & Lucky Date - Rip It Up (Original Mix)",
    "cleanTitle": "Rip It Up",
    "youtubeLink": "https://youtube.com/watch?v=D2l443rbKGw"
  },
  {
    "title": "R3HAB & NERVO & Ummet Ozcan - Revolution (Official Music Video)",
    "cleanTitle": "Revolution",
    "youtubeLink": "https://youtube.com/watch?v=6vL0JOwpMvI"
  },
  {
    "title": "R3hab & Lucky Date - Rip It Up (Nicky Romero Edit) (OUT NOW)",
    "cleanTitle": "Rip It Up Nicky Romero Edit",
    "youtubeLink": "https://youtube.com/watch?v=9QzMgqIFyB4"
  },
  {
    "title": "Steve Aoki & R3hab - Flight (Original Mix)",
    "cleanTitle": "Flight",
    "youtubeLink": "https://youtube.com/watch?v=R3OE8f4dOiU"
  },
  {
    "title": "R3HAB - 1 Million [FREE DOWNLOAD]",
    "cleanTitle": "1 Million",
    "youtubeLink": "https://youtube.com/watch?v=B94dWLUY6Mk"
  },
  {
    "title": "R3HAB & NERVO & Ummet Ozcan - Revolution (Instrumental Mix)",
    "cleanTitle": "Revolution Instrumental Mix",
    "youtubeLink": "https://youtube.com/watch?v=wrdvzLiBbBE"
  },
  {
    "title": "R3HAB DJ MAG 2013 THANK YOU",
    "cleanTitle": "Dj Mag 2013 thank you",
    "youtubeLink": "https://youtube.com/watch?v=Xr9_B9EuLdM"
  },
  {
    "title": "Rihanna - What Now (R3hab Remix)",
    "cleanTitle": "What Now",
    "youtubeLink": "https://youtube.com/watch?v=TSGXLGcgucw"
  },
  {
    "title": "Diplo Express Yourself (R3hab & Diplo Remix)",
    "cleanTitle": "Express Yourself",
    "youtubeLink": "https://youtube.com/watch?v=-67hQejk0rU"
  },
  {
    "title": "R3hab & Bassjackers - Raise Those Hands (Official Video)",
    "cleanTitle": "Raise Those Hands",
    "youtubeLink": "https://youtube.com/watch?v=fAUpBFLki54"
  },
  {
    "title": "R3hab & Bassjackers - Raise Those Hands [PREVIEW]",
    "cleanTitle": "Raise Those Hands Preview",
    "youtubeLink": "https://youtube.com/watch?v=CIc2yO8UTiw"
  },
  {
    "title": "Calvin Harris & Ellie Goulding - I Need Your Love (R3hab Remix)",
    "cleanTitle": "I Need Your Love",
    "youtubeLink": "https://youtube.com/watch?v=LvbMrhqjQ88"
  },
  {
    "title": "NERVO - Hold On (R3hab & Silvio Ecomo Remix)",
    "cleanTitle": "Hold On",
    "youtubeLink": "https://youtube.com/watch?v=ZddfWRDOxcI"
  },
  {
    "title": "R3hab Miami  2013 Aftermovie",
    "cleanTitle": "Miami 2013 Aftermovie",
    "youtubeLink": "https://youtube.com/watch?v=REpt80LztR4"
  },
  {
    "title": "R3HAB joins Hakkasan Las Vegas!",
    "cleanTitle": "rehab joins Hakkasan Las Vegas",
    "youtubeLink": "https://youtube.com/watch?v=3EejJggwnNo"
  },
  {
    "title": "David Guetta & Ne-Yo - Play Hard (R3hab Remix)",
    "cleanTitle": "Play Hard",
    "youtubeLink": "https://youtube.com/watch?v=hC1JKuJeTvY"
  },
  {
    "title": "R3hab - Live at Ultra Music Festival 2013",
    "cleanTitle": "Live at Ultra Music Festival 2013",
    "youtubeLink": "https://youtube.com/watch?v=XDpZnc1GGyU"
  },
  {
    "title": "R3hab & David Solano - Do It (Life In Color Anthem 2013)",
    "cleanTitle": "Do It Life In Color Anthem 2013",
    "youtubeLink": "https://youtube.com/watch?v=t-Cfgx1vBH0"
  },
  {
    "title": "Example - Perfect Replacement (R3hab & Hard Rock Sofa Remix)",
    "cleanTitle": "Perfect Replacement",
    "youtubeLink": "https://youtube.com/watch?v=0HQDf__kCp4"
  },
  {
    "title": "Tiesto - Chasing Summers (R3hab & Quintino Remix) [OFFICIAL VIDEO]",
    "cleanTitle": "Chasing Summers",
    "youtubeLink": "https://youtube.com/watch?v=cdt_X_w3FFg"
  },
  {
    "title": "R3hab Miami 2013 Teaser - Ultra Music Festival / National Hotel / Myntlounge / WMC",
    "cleanTitle": "Miami 2013 Teaser Ultra Music Festival",
    "youtubeLink": "https://youtube.com/watch?v=XBBbvwcJHq4"
  },
  {
    "title": "R3hab vs Nari & Milani vs MYNC - #MIAMIBACKAGAIN [Preview]",
    "cleanTitle": "Miami Back again Preview",
    "youtubeLink": "https://youtube.com/watch?v=0yS-qv2-3VM"
  },
  {
    "title": "Tiesto - Chasing Summers (R3hab & Quintino Remix) [PREVIEW]",
    "cleanTitle": "Chasing Summers preview",
    "youtubeLink": "https://youtube.com/watch?v=peSCK_wOYvc"
  },
  {
    "title": "R3HAB is coming to Theatro Marrakech!",
    "cleanTitle": "rehab is coming to Theatro Marrakech",
    "youtubeLink": "https://youtube.com/watch?v=8vayYvXGiNo"
  },
  {
    "title": "R3HAB Tomorrowland 2012 Liveset",
    "cleanTitle": "Tomorrowland 2012 Liveset",
    "youtubeLink": "https://youtube.com/watch?v=C_vK3raOylQ"
  },
  {
    "title": "R3HAB - Australia Tour 2013",
    "cleanTitle": "Australia Tour 2013",
    "youtubeLink": "https://youtube.com/watch?v=F0nqjSA0i8Q"
  },
  {
    "title": "R3hab & ZROQ - Skydrop (Original Mix)",
    "cleanTitle": "Skydrop",
    "youtubeLink": "https://youtube.com/watch?v=pJMucWq8GeE"
  },
  {
    "title": "Priyanka Chopra - In My City (R3hab & ZROQ Remix)",
    "cleanTitle": "In My City",
    "youtubeLink": "https://youtube.com/watch?v=Yk5uv-S_97c"
  },
  {
    "title": "7Lions - Born 2 Run (R3hab Remix)",
    "cleanTitle": "Born 2 Run",
    "youtubeLink": "https://youtube.com/watch?v=sRRtrGqvTkg"
  },
  {
    "title": "Bruno Mars - Locked Out Of Heaven (R3hab Afterhour Remix)",
    "cleanTitle": "Locked Out Of Heaven",
    "youtubeLink": "https://youtube.com/watch?v=iEjUWCmJGG0"
  },
  {
    "title": "No Doubt - Looking Hot (R3hab Remix)",
    "cleanTitle": "Looking Hot",
    "youtubeLink": "https://youtube.com/watch?v=WNwOxILINWw"
  },
  {
    "title": "R3hab & ZROQ - Skydrop (Original Mix) [TEASER]",
    "cleanTitle": "Skydrop teaser",
    "youtubeLink": "https://youtube.com/watch?v=p1gDQ_pgKFc"
  },
  {
    "title": "R3hab - A Night In [EDC Orlando 2012 Anthem] (Available November 23)",
    "cleanTitle": "A Night In EDC Orlando 2012 Anthem",
    "youtubeLink": "https://youtube.com/watch?v=598-pQSA5CI"
  },
  {
    "title": "Shermanology & R3hab - Living 4 The City [Preview]",
    "cleanTitle": "Living 4 The City Preview",
    "youtubeLink": "https://youtube.com/watch?v=YCkA_UUDP90"
  },
  {
    "title": "Cherry Cherry Boom Boom - One And Only (R3hab Remix)",
    "cleanTitle": "One And Only",
    "youtubeLink": "https://youtube.com/watch?v=6796L5lr7FI"
  },
  {
    "title": "Meital & Sean Kingston - On Ya (R3hab Remix)",
    "cleanTitle": "On Ya",
    "youtubeLink": "https://youtube.com/watch?v=DxQRzgkgryw"
  },
  {
    "title": "Enrique Iglesias - Finally Found You (R3hab & ZROQ Remix)",
    "cleanTitle": "Finally Found You",
    "youtubeLink": "https://youtube.com/watch?v=xQ9zmUXtZUk"
  },
  {
    "title": "Far East Movement ft. Cover Drive - Turn Up the Love (R3hab Remix)",
    "cleanTitle": "Turn Up the Love",
    "youtubeLink": "https://youtube.com/watch?v=7Kii7s98Hh0"
  },
  {
    "title": "Taryn Manning - Send Me Your Love (R3hab Remix)",
    "cleanTitle": "Send Me Your Love",
    "youtubeLink": "https://youtube.com/watch?v=W8J_HK3wwXM"
  },
  {
    "title": "R3hab Tomorrowland 2012 Aftermovie",
    "cleanTitle": "Tomorrowland 2012 Aftermovie",
    "youtubeLink": "https://youtube.com/watch?v=d9nw99PTawQ"
  },
  {
    "title": "R3hab Miami 2012 Aftermovie",
    "cleanTitle": "Miami 2012 Aftermovie",
    "youtubeLink": "https://youtube.com/watch?v=uX8ATxI6VnY"
  },
  {
    "title": "Adam Lambert - Never Close Our Eyes (R3hab Oldskool Bounce Remix)",
    "cleanTitle": "Never Close Our Eyes",
    "youtubeLink": "https://youtube.com/watch?v=CAa1AjLhwiU"
  },
  {
    "title": "Usher - Scream (R3hab Remix)",
    "cleanTitle": "Scream",
    "youtubeLink": "https://youtube.com/watch?v=zyfzGNS9XhI"
  },
  {
    "title": "Havana Brown ft. R3hab & Prophet - Big Banana",
    "cleanTitle": "Big Banana",
    "youtubeLink": "https://youtube.com/watch?v=I-pbex0W3gc"
  },
  {
    "title": "Jay Sean - I'm All Yours (R3hab Remix)",
    "cleanTitle": "I'm All Yours",
    "youtubeLink": "https://youtube.com/watch?v=kXYL1z8tGyU"
  },
  {
    "title": "R3hab at Mezz, Breda (Hometown Gig Invited by Tiesto) [Aftermovie]",
    "cleanTitle": "rehab at Mezz Breda Aftermovie",
    "youtubeLink": "https://youtube.com/watch?v=4-sdf8pZh3c"
  },
  {
    "title": "Madonna - Turn Up The Radio (R3hab Remix)",
    "cleanTitle": "Turn Up The Radio",
    "youtubeLink": "https://youtube.com/watch?v=hqTvJU4XvlA"
  },
  {
    "title": "R3HAB - I NEED R3HAB 001",
    "cleanTitle": "I NEED rehab",
    "youtubeLink": "https://youtube.com/watch?v=_p1XP-7rLLI"
  },
  {
    "title": "R3hab - Spraying Champagne At Escapade Music Festival Ottawa [RAW FOOTAGE]",
    "cleanTitle": "Spraying Champagne At Escapade Music Festival Ottawa",
    "youtubeLink": "https://youtube.com/watch?v=QJn0D_mPRa4"
  },
  {
    "title": "Calvin Harris & Example - We'll Be Coming Back (R3hab Remix)",
    "cleanTitle": "We'll Be Coming Back",
    "youtubeLink": "https://youtube.com/watch?v=iaJXhgaEtSo"
  },
  {
    "title": "Calvin Harris & Example - We'll Be Coming Back (R3hab EDC Vegas Remix)",
    "cleanTitle": "We'll Be Coming Back rehab edc vegas remix",
    "youtubeLink": "https://youtube.com/watch?v=Bqpxw6hyboc"
  },
  {
    "title": "R3hab @ Dayglow, Tampa 18th of February 2012 [Aftermovie]",
    "cleanTitle": "rehab at Dayglow Tampa 18th of February 2012 Aftermovie",
    "youtubeLink": "https://youtube.com/watch?v=_80rsqa7QcA"
  },
  {
    "title": "Afrojack & Shermanology - Cant Stop Me Now (R3hab & Dyro Remix)",
    "cleanTitle": "Cant Stop Me Now",
    "youtubeLink": "https://youtube.com/watch?v=rptaqMP0Fxg"
  },
  {
    "title": "R3hab @ Playhouse, Hollywood 19th of May 2012 [Aftermovie]",
    "cleanTitle": "rehab at Playhouse Hollywood 19th of May 2012 Aftermovie",
    "youtubeLink": "https://youtube.com/watch?v=h0l5zWWBhl4"
  },
  {
    "title": "Calvin Harris & Example - We'll Be Coming Back (R3hab Remix) [PREVIEW]",
    "cleanTitle": "We'll Be Coming Back preview",
    "youtubeLink": "https://youtube.com/watch?v=0pFGeC1WkYw"
  },
  {
    "title": "R3hab & Swanky Tunes vs Hard Rock Sofa & Swanky Tunes - Sending My Love vs The Edge (R3hab Bootleg)",
    "cleanTitle": "Sending My Love",
    "youtubeLink": "https://youtube.com/watch?v=zBqQArr7uEA"
  },
  {
    "title": "R3hab & Calvin Harris vs Axwell & Dirty South - Bounce vs Open Your Heart (R3hab Bootleg)",
    "cleanTitle": "Bounce versus Open Your Heart",
    "youtubeLink": "https://youtube.com/watch?v=si6js2LTCC8"
  },
  {
    "title": "R3hab & Calvin Harris - Chainsaw The Night vs Flashback (R3hab vs Panic City & Miles Medina Bootleg)",
    "cleanTitle": "Chainsaw The Night versus Flashback",
    "youtubeLink": "https://youtube.com/watch?v=c5AczywCZBo"
  },
  {
    "title": "R3hab & Swanky Tunes vs Axwell & Ingrosso - Sending My Love vs Tonight (R3hab Bootleg)",
    "cleanTitle": "Sending My Love versus Tonight",
    "youtubeLink": "https://youtube.com/watch?v=K93wwbKixlU"
  },
  {
    "title": "Pitbull - Back In Time (R3hab Remix)",
    "cleanTitle": "Back In Time",
    "youtubeLink": "https://youtube.com/watch?v=PHW1MjR8j6M"
  },
  {
    "title": "R3hab interview by JustDoHits",
    "cleanTitle": "rehab interview by Just Do Hits",
    "youtubeLink": "https://youtube.com/watch?v=LLMESFI-o9k"
  },
  {
    "title": "Sebastian Ingrosso & Alesso - Calling (R3hab & Swanky Tunes Remix)",
    "cleanTitle": "Calling",
    "youtubeLink": "https://youtube.com/watch?v=li6Y4_dcG1w"
  },
  {
    "title": "Sebastian Ingrosso & Alesso - Calling (R3hab & Swanky Tunes Chainsaw Madness Mix)",
    "cleanTitle": "Calling Madness Mix",
    "youtubeLink": "https://youtube.com/watch?v=gv0bVBzNR7E"
  },
  {
    "title": "R3hab - Electric Daisy Carnival 2012, New York - USA",
    "cleanTitle": "Electric Daisy Carnival 2012 New York USA",
    "youtubeLink": "https://youtube.com/watch?v=PwWEnl78NFw"
  },
  {
    "title": "Eva Simons - I Don't Like You (R3hab Remix)",
    "cleanTitle": "I Don't Like You",
    "youtubeLink": "https://youtube.com/watch?v=UeK2SOp1WVo"
  },
  {
    "title": "Afrojack & Shermanology - Cant Stop Me Now (R3hab & Dyro Remix) [PREVIEW]",
    "cleanTitle": "Can't Stop Me Now preview",
    "youtubeLink": "https://youtube.com/watch?v=D__33TIC6Hk"
  },
  {
    "title": "R3hab - The Bottle Song (Darth & Vader Remix)",
    "cleanTitle": "The Bottle Song Darth Vader Remix",
    "youtubeLink": "https://youtube.com/watch?v=he66Yn03Caw"
  },
  {
    "title": "Cosmo - Naughty Party (R3hab Remix)",
    "cleanTitle": "Naughty Party",
    "youtubeLink": "https://youtube.com/watch?v=gdAoRwFZvxc"
  },
  {
    "title": "R3hab - Escape From Wonderland [Raw Aftermovie]",
    "cleanTitle": "Escape From Wonderland",
    "youtubeLink": "https://youtube.com/watch?v=YVLydAiNUcU"
  },
  {
    "title": "Cassie - King Of Hearts (R3hab Remix) [OFFICIAL VIDEO]",
    "cleanTitle": "King Of Hearts",
    "youtubeLink": "https://youtube.com/watch?v=jCHreKoPRyk"
  },
  {
    "title": "Eva Simons - I Don't Like You (R3hab Remix) [PREVIEW]",
    "cleanTitle": "I Don't Like You preview",
    "youtubeLink": "https://youtube.com/watch?v=s3XZTBtcWJE"
  },
  {
    "title": "Will.I.Am, Jennifer Lopez & Mick Jagger - Go Hard (R3hab Remix)",
    "cleanTitle": "go Hard",
    "youtubeLink": "https://youtube.com/watch?v=0kNeWw__XKg"
  },
  {
    "title": "R3hab - Chainsaw Showers",
    "cleanTitle": "Chainsaw Showers",
    "youtubeLink": "https://youtube.com/watch?v=LgZINTkDpwc"
  },
  {
    "title": "Dev ft. Enrique Iglesias - Naked (R3hab Remix)",
    "cleanTitle": "Naked",
    "youtubeLink": "https://youtube.com/watch?v=sVKvfyV16zk"
  },
  {
    "title": "Chainsaw The Night",
    "cleanTitle": "Chainsaw The Night",
    "youtubeLink": "https://youtube.com/watch?v=yB7uckk4sNM"
  },
  {
    "title": "Sebastian Ingrosso & Alesso - Calling (R3hab & Swanky Tunes Remix) [PREVIEW]",
    "cleanTitle": "Calling preview",
    "youtubeLink": "https://youtube.com/watch?v=zuK_QxJdjfA"
  },
  {
    "title": "Eric Turner ft. Lupe Fiasco & Tinie Tempah - Angel & Stars (R3hab Remix)",
    "cleanTitle": "Angel and Stars",
    "youtubeLink": "https://youtube.com/watch?v=D_NMJDYntjs"
  },
  {
    "title": "R3hab vs Denis Naidanow ft. Juan Maga & Lil Jon - Shuri Shuri (R3hab Remix)",
    "cleanTitle": "Shuri Shuri",
    "youtubeLink": "https://youtube.com/watch?v=fqEtgT7l_T4"
  },
  {
    "title": "Taio Cruz - Troublemaker (R3hab Remix)",
    "cleanTitle": "Troublemaker",
    "youtubeLink": "https://youtube.com/watch?v=mz4j6Wls-pE"
  },
  {
    "title": "LMFAO - Sorry For Partyrocking (R3hab Remix)",
    "cleanTitle": "Sorry For Partyrocking",
    "youtubeLink": "https://youtube.com/watch?v=RMKHwZGgLMA"
  },
  {
    "title": "Karmin - Broken Hearted (R3hab Remix)",
    "cleanTitle": "Broken Hearted",
    "youtubeLink": "https://youtube.com/watch?v=vlW1VYrETAM"
  },
  {
    "title": "R3HAB @ Get Naughty, Salt Lake City",
    "cleanTitle": "rehab at Get Naughty Salt Lake City",
    "youtubeLink": "https://youtube.com/watch?v=sOC0avCqsFI"
  },
  {
    "title": "Labrinth - Last Time (R3hab Remix)",
    "cleanTitle": "Last Time",
    "youtubeLink": "https://youtube.com/watch?v=b_mEGU6eScw"
  },
  {
    "title": "R3hab - Asia Tour 2012",
    "cleanTitle": "Asia Tour 2012",
    "youtubeLink": "https://youtube.com/watch?v=LerQsr-GbiI"
  },
  {
    "title": "Adrian Lux - Fire (R3hab Remix)",
    "cleanTitle": "Fire",
    "youtubeLink": "https://youtube.com/watch?v=QbAuOnsApNc"
  },
  {
    "title": "Cassie - King Of Hearts (R3hab Remix)",
    "cleanTitle": "King Of Hearts",
    "youtubeLink": "https://youtube.com/watch?v=w95ghH7lVqQ"
  },
  {
    "title": "Far East Movement  - Jello (R3hab Remix)",
    "cleanTitle": "Jello",
    "youtubeLink": "https://youtube.com/watch?v=KXJ5dmCboS4"
  },
  {
    "title": "Porcelain Black & Lil Wayne - Rock N Roll (R3hab Remix)",
    "cleanTitle": "Rock n Roll",
    "youtubeLink": "https://youtube.com/watch?v=JwaUbaTXfQg"
  },
  {
    "title": "Porcelain Black - Naughty (R3hab's Pacha NYC 6AM Remix)",
    "cleanTitle": "Naughty",
    "youtubeLink": "https://youtube.com/watch?v=2o5jS3PQj10"
  },
  {
    "title": "Far East Movement & Rye Rye - Jello (R3hab Remix) [PREVIEW]",
    "cleanTitle": "Jello preview",
    "youtubeLink": "https://youtube.com/watch?v=dlrrNYJsZQM"
  },
  {
    "title": "R3hab & Swanky Tunes ft. Max C - Sending My Love (Hard Rock Sofa Remix)",
    "cleanTitle": "Sending My Love hard rock sofa remix",
    "youtubeLink": "https://youtube.com/watch?v=p-WAeVQ4GlA"
  },
  {
    "title": "R3hab & Swanky Tunes ft. Max C - Sending My Love (Cazzette Remix)",
    "cleanTitle": "Sending My Love Cazzette Remix",
    "youtubeLink": "https://youtube.com/watch?v=o3f1BVCd0gw"
  },
  {
    "title": "R3hab & Swanky Tunes ft. Max C - Sending My Love (Kaskade Remix)",
    "cleanTitle": "Sending My Love Kaskade Remix",
    "youtubeLink": "https://youtube.com/watch?v=A0RskyVBVYQ"
  },
  {
    "title": "Rihanna & Calvin Harris - We Found Love (R3hab Remix)",
    "cleanTitle": "we found Love",
    "youtubeLink": "https://youtube.com/watch?v=9SnONOYoExk"
  },
  {
    "title": "R3hab, Swanky Tunes, Hard Rock Sofa & Max C - Sending My Love (Afrojack Edit)",
    "cleanTitle": "Sending My Love Afrojack Edit",
    "youtubeLink": "https://youtube.com/watch?v=5_QvwyTur_0"
  },
  {
    "title": "Kaskade ft. Mindy Gledhill- Eyes (R3hab Remix)",
    "cleanTitle": "Eyes",
    "youtubeLink": "https://youtube.com/watch?v=oj0d9A1fCfo"
  },
  {
    "title": "Lady Gaga - Marry The Night (R3hab Remix)",
    "cleanTitle": "Marry The Night",
    "youtubeLink": "https://youtube.com/watch?v=kzmtyNHGx6c"
  },
  {
    "title": "Katy Perry - One That Got Away (R3hab Remix)",
    "cleanTitle": "One That Got Away",
    "youtubeLink": "https://youtube.com/watch?v=S-QjyAen0Q0"
  },
  {
    "title": "R3hab & Swanky Tunes - Sending My Love (ft. Max C)",
    "cleanTitle": "Sending My Love",
    "youtubeLink": "https://youtube.com/watch?v=hXrOxcsvRXc"
  },
  {
    "title": "Wynter Gordon - Til Death (R3hab Remix)",
    "cleanTitle": "Til Death",
    "youtubeLink": "https://youtube.com/watch?v=0zDg8aEj2To"
  },
  {
    "title": "Ralvero ft Whiskey Pete - Drunk Tonight (R3hab & Ferruccio Salvo Remix)",
    "cleanTitle": "Drunk Tonight",
    "youtubeLink": "https://youtube.com/watch?v=JlkExoLvKnw"
  },
  {
    "title": "Sander Van Doorn - Koko (R3hab Remix)",
    "cleanTitle": "Koko",
    "youtubeLink": "https://youtube.com/watch?v=aaky-SntvKM"
  },
  {
    "title": "Afrojack playing ''R3hab - The Bottle Song'' at Ultra Miami 2011 Mainstage",
    "cleanTitle": "The Bottle Song at Ultra Miami 2011",
    "youtubeLink": "https://youtube.com/watch?v=m3arm2KlYv4"
  },
  {
    "title": "Afrojack & R3hab - Prutataaa",
    "cleanTitle": "Prutataaa",
    "youtubeLink": "https://youtube.com/watch?v=dti8TkpI0wc"
  },
  {
    "title": "Luciana - I'm Still Hot (R3hab Remix)",
    "cleanTitle": "I'm Still Hot",
    "youtubeLink": "https://youtube.com/watch?v=3IbIA345wWE"
  },
  {
    "title": "LMFAO - Champagne Showers (R3hab Remix)",
    "cleanTitle": "Champagne Showers",
    "youtubeLink": "https://youtube.com/watch?v=Ef8ckyULlpQ"
  },
  {
    "title": "Lady Gaga - Judas (R3hab Remix)",
    "cleanTitle": "Judas",
    "youtubeLink": "https://youtube.com/watch?v=Y-VaxaaBIJw"
  },
  {
    "title": "Cahill ft. Joel Edwards - In Case I Fall (R3hab Remix)",
    "cleanTitle": "In Case I Fall",
    "youtubeLink": "https://youtube.com/watch?v=0SVYF-Uix7c"
  },
  {
    "title": "Calvin Harris ft Kelis - Bounce (R3hab Remix)",
    "cleanTitle": "Bounce",
    "youtubeLink": "https://youtube.com/watch?v=_pxG_nEdnmI"
  },
  {
    "title": "Pitbull ft Ne-Yo, Afrojack & Nayer - Give Me Everything (R3hab Remix)",
    "cleanTitle": "Give Me Everything",
    "youtubeLink": "https://youtube.com/watch?v=jQP-3YCp_u8"
  },
  {
    "title": "Afrojack & R3hab - Prutataa  (Arkadia, Miami)",
    "cleanTitle": "Prutataa Arkadia Miami",
    "youtubeLink": "https://youtube.com/watch?v=YvZfdAjLlEA"
  },
  {
    "title": "Dada Life - Fight Club Is Closed (R3hab & Ferruccio Salvo Remix)",
    "cleanTitle": "Fight Club Is Closed",
    "youtubeLink": "https://youtube.com/watch?v=waoFDCZjlh8"
  },
  {
    "title": "Bob Sincar ft Sean Paul - Tik Tok (Chuckie & R3hab Remix)",
    "cleanTitle": "Tik Tok",
    "youtubeLink": "https://youtube.com/watch?v=y6HR-g1Po6c"
  },
  {
    "title": "R3hab - The Bottle Song",
    "cleanTitle": "The Bottle Song",
    "youtubeLink": "https://youtube.com/watch?v=PUKrMVTLLG8"
  },
  {
    "title": "MYNC - Something On Your Mind (R3hab Remix)",
    "cleanTitle": "Something On Your Mind",
    "youtubeLink": "https://youtube.com/watch?v=i7CoZ0X5THc"
  },
  {
    "title": "Dj Mujavee - Mugwanti (R3hab Remix)",
    "cleanTitle": "Mugwanti",
    "youtubeLink": "https://youtube.com/watch?v=Xit2I6ABu7s"
  },
  {
    "title": "Ian Carey ft Bobby Anthony & Snoop Dogg - Last Night (R3hab Remix)",
    "cleanTitle": "Last Night",
    "youtubeLink": "https://youtube.com/watch?v=oSK6AmGeu2U"
  },
  {
    "title": "Wynter Gordan - Til Death (R3hab Remix)",
    "cleanTitle": "Wynter Gordan Til Death",
    "youtubeLink": "https://youtube.com/watch?v=RnJd0uPU7tw"
  },
  {
    "title": "R3hab & Ferruccio Salvo   Keep Up For Your Love YouTube Edit",
    "cleanTitle": "Keep Up For Your Love",
    "youtubeLink": "https://youtube.com/watch?v=QKx1JzbrnR0"
  },
  {
    "title": "Pump The Party",
    "cleanTitle": "Pump The Party",
    "youtubeLink": "https://youtube.com/watch?v=NUuEhNQpvMY"
  },
  {
    "title": "Rock This Place",
    "cleanTitle": "Rock This Place",
    "youtubeLink": "https://youtube.com/watch?v=bGnih-u78sk"
  },
  {
    "title": "Purple",
    "cleanTitle": "Purple",
    "youtubeLink": "https://youtube.com/watch?v=zgTVM-3aUrg"
  },
  {
    "title": "Purple Remix",
    "cleanTitle": "Purple Remix",
    "youtubeLink": "https://youtube.com/watch?v=9LY9wUJPssQ"
  }
];

title("R3hab Video");

const titles = videos.map((v, i)=>`${v.cleanTitle}~${i}`).join('|');

let what = context(()=> {
    follow(`(it's|the name is|) $(T~ ${titles})`,
        p => p.resolve(videos[parseInt(p.T.label)]))
    follow('never mind', 'ignore (that|)', 'cancel',
        p => p.resolve(null))
    fallback('(tell me|what is|I need) the (name|title) of the $(R) (to play|)')
})

intent(`(play|start) $(R video|clip|music video) $(T~ ${titles}|)`,
    async p => {
        let s = null;
        if (p.T.label) {
            s = videos[parseInt(p.T.label)];
        } else {
            p.play(`What ${p.R} (should I play|)`, `what is the name of the ${p.R}`)
            s = await p.then(what, {R: p.R})
        }
        if (s) {
            p.play(_.extend({embeddedPage:true, page: "r3hab_example.html", type:"video"}, s));
            p.play(`Playing ${p.R} ${s.cleanTitle}`);
        } else {
            p.play('(sure|ok)')
        }
    });
