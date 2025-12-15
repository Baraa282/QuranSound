// Quran Sound Player - 114 Surahs

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'https://server8.mp3quran.net/afs/',
            extension = '.mp3',
            tracks = [
                {"track": 1, "name": "Al-Fatihah (The Opening)", "duration": "0:00", "file": "001"},
                {"track": 2, "name": "Al-Baqarah (The Cow)", "duration": "0:00", "file": "002"},
                {"track": 3, "name": "Ali 'Imran (Family of Imran)", "duration": "0:00", "file": "003"},
                {"track": 4, "name": "An-Nisa (The Women)", "duration": "0:00", "file": "004"},
                {"track": 5, "name": "Al-Ma'idah (The Table Spread)", "duration": "0:00", "file": "005"},
                {"track": 6, "name": "Al-An'am (The Cattle)", "duration": "0:00", "file": "006"},
                {"track": 7, "name": "Al-A'raf (The Heights)", "duration": "0:00", "file": "007"},
                {"track": 8, "name": "Al-Anfal (The Spoils of War)", "duration": "0:00", "file": "008"},
                {"track": 9, "name": "At-Tawbah (The Repentance)", "duration": "0:00", "file": "009"},
                {"track": 10, "name": "Yunus (Jonah)", "duration": "0:00", "file": "010"},
                {"track": 11, "name": "Hud", "duration": "0:00", "file": "011"},
                {"track": 12, "name": "Yusuf (Joseph)", "duration": "0:00", "file": "012"},
                {"track": 13, "name": "Ar-Ra'd (The Thunder)", "duration": "0:00", "file": "013"},
                {"track": 14, "name": "Ibrahim (Abraham)", "duration": "0:00", "file": "014"},
                {"track": 15, "name": "Al-Hijr (The Rocky Tract)", "duration": "0:00", "file": "015"},
                {"track": 16, "name": "An-Nahl (The Bee)", "duration": "0:00", "file": "016"},
                {"track": 17, "name": "Al-Isra (The Night Journey)", "duration": "0:00", "file": "017"},
                {"track": 18, "name": "Al-Kahf (The Cave)", "duration": "0:00", "file": "018"},
                {"track": 19, "name": "Maryam (Mary)", "duration": "0:00", "file": "019"},
                {"track": 20, "name": "Ta-Ha", "duration": "0:00", "file": "020"},
                {"track": 21, "name": "Al-Anbiya (The Prophets)", "duration": "0:00", "file": "021"},
                {"track": 22, "name": "Al-Hajj (The Pilgrimage)", "duration": "0:00", "file": "022"},
                {"track": 23, "name": "Al-Mu'minun (The Believers)", "duration": "0:00", "file": "023"},
                {"track": 24, "name": "An-Nur (The Light)", "duration": "0:00", "file": "024"},
                {"track": 25, "name": "Al-Furqan (The Criterion)", "duration": "0:00", "file": "025"},
                {"track": 26, "name": "Ash-Shu'ara (The Poets)", "duration": "0:00", "file": "026"},
                {"track": 27, "name": "An-Naml (The Ant)", "duration": "0:00", "file": "027"},
                {"track": 28, "name": "Al-Qasas (The Stories)", "duration": "0:00", "file": "028"},
                {"track": 29, "name": "Al-Ankabut (The Spider)", "duration": "0:00", "file": "029"},
                {"track": 30, "name": "Ar-Rum (The Romans)", "duration": "0:00", "file": "030"},
                {"track": 31, "name": "Luqman", "duration": "0:00", "file": "031"},
                {"track": 32, "name": "As-Sajdah (The Prostration)", "duration": "0:00", "file": "032"},
                {"track": 33, "name": "Al-Ahzab (The Clans)", "duration": "0:00", "file": "033"},
                {"track": 34, "name": "Saba (Sheba)", "duration": "0:00", "file": "034"},
                {"track": 35, "name": "Fatir (The Originator)", "duration": "0:00", "file": "035"},
                {"track": 36, "name": "Ya-Sin", "duration": "0:00", "file": "036"},
                {"track": 37, "name": "As-Saffat (Those Ranged in Rows)", "duration": "0:00", "file": "037"},
                {"track": 38, "name": "Sad", "duration": "0:00", "file": "038"},
                {"track": 39, "name": "Az-Zumar (The Groups)", "duration": "0:00", "file": "039"},
                {"track": 40, "name": "Ghafir (The Forgiver)", "duration": "0:00", "file": "040"},
                {"track": 41, "name": "Fussilat (Explained in Detail)", "duration": "0:00", "file": "041"},
                {"track": 42, "name": "Ash-Shura (The Consultation)", "duration": "0:00", "file": "042"},
                {"track": 43, "name": "Az-Zukhruf (The Gold)", "duration": "0:00", "file": "043"},
                {"track": 44, "name": "Ad-Dukhan (The Smoke)", "duration": "0:00", "file": "044"},
                {"track": 45, "name": "Al-Jathiyah (The Crouching)", "duration": "0:00", "file": "045"},
                {"track": 46, "name": "Al-Ahqaf (The Wind-Curved Sandhills)", "duration": "0:00", "file": "046"},
                {"track": 47, "name": "Muhammad", "duration": "0:00", "file": "047"},
                {"track": 48, "name": "Al-Fath (The Victory)", "duration": "0:00", "file": "048"},
                {"track": 49, "name": "Al-Hujurat (The Rooms)", "duration": "0:00", "file": "049"},
                {"track": 50, "name": "Qaf", "duration": "0:00", "file": "050"},
                {"track": 51, "name": "Adh-Dhariyat (The Winnowing Winds)", "duration": "0:00", "file": "051"},
                {"track": 52, "name": "At-Tur (The Mount)", "duration": "0:00", "file": "052"},
                {"track": 53, "name": "An-Najm (The Star)", "duration": "0:00", "file": "053"},
                {"track": 54, "name": "Al-Qamar (The Moon)", "duration": "0:00", "file": "054"},
                {"track": 55, "name": "Ar-Rahman (The Beneficent)", "duration": "0:00", "file": "055"},
                {"track": 56, "name": "Al-Waqi'ah (The Event)", "duration": "0:00", "file": "056"},
                {"track": 57, "name": "Al-Hadid (The Iron)", "duration": "0:00", "file": "057"},
                {"track": 58, "name": "Al-Mujadila (The Disputation)", "duration": "0:00", "file": "058"},
                {"track": 59, "name": "Al-Hashr (The Exile)", "duration": "0:00", "file": "059"},
                {"track": 60, "name": "Al-Mumtahanah (The Examined One)", "duration": "0:00", "file": "060"},
                {"track": 61, "name": "As-Saff (The Ranks)", "duration": "0:00", "file": "061"},
                {"track": 62, "name": "Al-Jumu'ah (Friday)", "duration": "0:00", "file": "062"},
                {"track": 63, "name": "Al-Munafiqun (The Hypocrites)", "duration": "0:00", "file": "063"},
                {"track": 64, "name": "At-Taghabun (The Mutual Disillusion)", "duration": "0:00", "file": "064"},
                {"track": 65, "name": "At-Talaq (The Divorce)", "duration": "0:00", "file": "065"},
                {"track": 66, "name": "At-Tahrim (The Prohibition)", "duration": "0:00", "file": "066"},
                {"track": 67, "name": "Al-Mulk (The Sovereignty)", "duration": "0:00", "file": "067"},
                {"track": 68, "name": "Al-Qalam (The Pen)", "duration": "0:00", "file": "068"},
                {"track": 69, "name": "Al-Haqqah (The Reality)", "duration": "0:00", "file": "069"},
                {"track": 70, "name": "Al-Ma'arij (The Ascending Stairways)", "duration": "0:00", "file": "070"},
                {"track": 71, "name": "Nuh (Noah)", "duration": "0:00", "file": "071"},
                {"track": 72, "name": "Al-Jinn (The Jinn)", "duration": "0:00", "file": "072"},
                {"track": 73, "name": "Al-Muzzammil (The Enshrouded One)", "duration": "0:00", "file": "073"},
                {"track": 74, "name": "Al-Muddaththir (The Cloaked One)", "duration": "0:00", "file": "074"},
                {"track": 75, "name": "Al-Qiyamah (The Resurrection)", "duration": "0:00", "file": "075"},
                {"track": 76, "name": "Al-Insan (The Human)", "duration": "0:00", "file": "076"},
                {"track": 77, "name": "Al-Mursalat (The Emissaries)", "duration": "0:00", "file": "077"},
                {"track": 78, "name": "An-Naba (The Tidings)", "duration": "0:00", "file": "078"},
                {"track": 79, "name": "An-Nazi'at (Those Who Drag Forth)", "duration": "0:00", "file": "079"},
                {"track": 80, "name": "Abasa (He Frowned)", "duration": "0:00", "file": "080"},
                {"track": 81, "name": "At-Takwir (The Overthrowing)", "duration": "0:00", "file": "081"},
                {"track": 82, "name": "Al-Infitar (The Cleaving)", "duration": "0:00", "file": "082"},
                {"track": 83, "name": "Al-Mutaffifin (The Defrauding)", "duration": "0:00", "file": "083"},
                {"track": 84, "name": "Al-Inshiqaq (The Splitting Open)", "duration": "0:00", "file": "084"},
                {"track": 85, "name": "Al-Buruj (The Constellations)", "duration": "0:00", "file": "085"},
                {"track": 86, "name": "At-Tariq (The Night-Comer)", "duration": "0:00", "file": "086"},
                {"track": 87, "name": "Al-A'la (The Most High)", "duration": "0:00", "file": "087"},
                {"track": 88, "name": "Al-Ghashiyah (The Overwhelming)", "duration": "0:00", "file": "088"},
                {"track": 89, "name": "Al-Fajr (The Dawn)", "duration": "0:00", "file": "089"},
                {"track": 90, "name": "Al-Balad (The City)", "duration": "0:00", "file": "090"},
                {"track": 91, "name": "Ash-Shams (The Sun)", "duration": "0:00", "file": "091"},
                {"track": 92, "name": "Al-Layl (The Night)", "duration": "0:00", "file": "092"},
                {"track": 93, "name": "Ad-Duha (The Morning Hours)", "duration": "0:00", "file": "093"},
                {"track": 94, "name": "Ash-Sharh (The Relief)", "duration": "0:00", "file": "094"},
                {"track": 95, "name": "At-Tin (The Fig)", "duration": "0:00", "file": "095"},
                {"track": 96, "name": "Al-Alaq (The Clot)", "duration": "0:00", "file": "096"},
                {"track": 97, "name": "Al-Qadr (The Power)", "duration": "0:00", "file": "097"},
                {"track": 98, "name": "Al-Bayyinah (The Evidence)", "duration": "0:00", "file": "098"},
                {"track": 99, "name": "Az-Zalzalah (The Earthquake)", "duration": "0:00", "file": "099"},
                {"track": 100, "name": "Al-Adiyat (The Courser)", "duration": "0:00", "file": "100"},
                {"track": 101, "name": "Al-Qari'ah (The Calamity)", "duration": "0:00", "file": "101"},
                {"track": 102, "name": "At-Takathur (The Rivalry)", "duration": "0:00", "file": "102"},
                {"track": 103, "name": "Al-Asr (The Declining Day)", "duration": "0:00", "file": "103"},
                {"track": 104, "name": "Al-Humazah (The Traducer)", "duration": "0:00", "file": "104"},
                {"track": 105, "name": "Al-Fil (The Elephant)", "duration": "0:00", "file": "105"},
                {"track": 106, "name": "Quraysh", "duration": "0:00", "file": "106"},
                {"track": 107, "name": "Al-Ma'un (The Small Kindnesses)", "duration": "0:00", "file": "107"},
                {"track": 108, "name": "Al-Kawthar (The Abundance)", "duration": "0:00", "file": "108"},
                {"track": 109, "name": "Al-Kafirun (The Disbelievers)", "duration": "0:00", "file": "109"},
                {"track": 110, "name": "An-Nasr (The Help)", "duration": "0:00", "file": "110"},
                {"track": 111, "name": "Al-Masad (The Palm Fibre)", "duration": "0:00", "file": "111"},
                {"track": 112, "name": "Al-Ikhlas (The Sincerity)", "duration": "0:00", "file": "112"},
                {"track": 113, "name": "Al-Falaq (The Daybreak)", "duration": "0:00", "file": "113"},
                {"track": 114, "name": "An-Nas (The Mankind)", "duration": "0:00", "file": "114"}
            ],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                // Format surah number to 3 digits (e.g., 1 -> "001", 114 -> "114")
                var surahNum = tracks[id].track.toString().padStart(3, '0');
                audio.src = mediaPath + surahNum + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
