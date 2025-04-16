document.addEventListener('DOMContentLoaded', function() {
    // Radio Player Functionality
    const radioPlayButtonLarge = document.getElementById('radioPlayButtonLarge');
    const currentProgramLarge = document.getElementById('currentProgramLarge');
    const equalizer = document.querySelector('.equalizer');
    let isPlaying = false;

    if (radioPlayButtonLarge) {
        radioPlayButtonLarge.addEventListener('click', function() {
            isPlaying = !isPlaying;
            const icon = radioPlayButtonLarge.querySelector('i');
            
            if (isPlaying) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                currentProgramLarge.textContent = 'Glory Showers - Morning Devotional';
                equalizer.style.display = 'flex';
                // In a real implementation, this would trigger audio playback
                // playAudio('stream-url');
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                currentProgramLarge.textContent = 'Continuous Worship & Praise';
                equalizer.style.display = 'none';
                // pauseAudio();
            }
        });
    }

    // Program Schedule Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const programCards = document.querySelectorAll('.program-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedDay = this.getAttribute('data-day');
            
            // Show/hide program cards based on selected day
            programCards.forEach(card => {
                if (selectedDay === 'all') {
                    card.style.display = 'block';
                } else {
                    const days = card.getAttribute('data-days').split(',');
                    if (days.includes(selectedDay)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Program Details Modal
    const programModal = document.getElementById('program-modal');
    const programModalBody = document.querySelector('.program-modal-body');
    const closeModal = document.querySelector('.close-modal');
    const programDetailButtons = document.querySelectorAll('.btn-program-details');

    // Program details content
    const programDetails = {
        'glory-showers': {
            title: 'GLORY SHOWERS - MONDAY, TUESDAY, THURSDAY & FRIDAY @ 5:00-6:00AM',
            description: 'This is a Daily Morning Devotional Prayer Time that helps you to early approach the throne of grace in your life\'s surrender to God, so that he can empower you and direct you each day before you step out for your day\'s pursuits.',
            features: [
                'Empowerment through the Holy Scriptures and the Rhema word of God to command your Day and Week to produce great results for your labour, dreams, ambitions, projects and assignments. You and God will be in a Super Partnership for Success and Victory throughout the week and beyond.',
                'Engage in Prophetic and Strategic Prayers that impact your Destiny and Enforce God\'s will and purpose for your life into manifestation.',
                'Share deep inspirational and insightful words of exhortation to uplift and guide you throughout your day and week.',
                'Join hearts and faith to intercede in prayers for you and your loved ones for every need that you are confronted with; Your Spiritual and Physical Needs.',
                'Pray in agreement for Healing and Deliverance from any kind of sickness, disease, infirmities and afflictions to be lifted permanently from your life.',
                'Pray for Divine Intervention into your Ministry, Business, Career, Education, Finances, Marriage, and Relationship to give you great victory in Jesus name.',
                'Celebrate your testimonies of breakthroughs and Divine Intervention at all times.'
            ]
        },
        'moral-clarity': {
            title: 'CENTER FOR MORAL CLARITY – SATURDAY @ 2:00 -3:00PM',
            description: 'CFMC – Reshaping Lives and Redefining Destinies. This program uncovers and discusses topical and current issues of Life and Living, Proper Morality, Principles of Integrity, Honesty, Decency, Courtesy, and the total embodiment of what honours God and fulfils his requirements on humanity.',
            features: [
                'Man and what we are created for on earth – Purpose and Function',
                'The youth and challenges facing them and how to win over',
                'Breaking the power of negative addictions from your life (Smoking, Alcoholism, Pornography, Drug & Substance abuse etc.)',
                'Breaking the power of Evil Spirit control and influence',
                'Marriage and Marital peace and harmony - Happy Home',
                'Marriage and Marital Conflicts',
                'Resolving Marital Conflicts and Contentions',
                'Making marriage work God\'s Way',
                'Dating and Courtship – The Right Pattern and Due Order',
                'Doing Business and Succeeding according to the Righteous Pattern',
                'Succeeding in life in general using the ladder of Divine Arrangement and Appointment'
            ]
        },
        'midday-prayer': {
            title: 'MID-DAY PROPHETIC PRAYER HOUR – FRIDAY @ 12:00 NOON',
            description: 'We engage in 10-30 minutes of Prophetic Prayers and Declarations for your life as instructed, prompted and directed by the Holy Spirit for Times and Seasons in your destiny.',
            features: []
        },
        'live-worship': {
            title: 'LIVE WORSHIP ALTAR – 1st Saturday of Every Month @ 2:00pm',
            description: 'This is a live, active and participatory worship encounter as you join us to lay hold of the horns of the Altar of God and to worship at the feet of King Jesus for who he is and for what he is worth to us.',
            features: []
        },
        'testimony-parade': {
            title: 'TESTIMONY PARADE – SUNDAY @ 7:00 PM',
            description: 'This is the time to hear and celebrate God together with us for the chronicled testimonies of the wonderful and spectacular things that God has done in the life and ministry of God\'s servant, Rev. Ransford Abossey and Praise Revival Sanctuary International through the years.',
            features: []
        },
        'light-zone': {
            title: 'LIGHT ZONE – CHRISTIAN BOOKS AND LITERATURE REVIEW - SUNDAY @ 7:00 PM',
            description: 'This is a session to introduce, discuss, review and dissect Christian books and literary writings which educate, instruct, edify, exhort, and inspire the believer to stand-up for Jesus Christ and the kingdom of God through faith, wisdom and revelation knowledge.',
            features: []
        },
        'gospel-music': {
            title: 'GOSPEL MUSIC REVIEW – GMR – SATURDAY @ 1:00 PM',
            description: 'This session is created to review all genres and forms of Gospel music and their evolving impact on worship lifestyle, fellowship and relationship with God.',
            features: []
        },
        'continuous-worship': {
            title: 'CONTINUOUS WORSHIP, PRAISES AND INSPIRATIONAL MUSIC',
            description: 'You will enjoy continuous worship, praises and inspirational music to soothe and uplift you as you connect to Revive Radio 24/7.',
            features: []
        }
    };

    // Open modal with program details
    programDetailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const programId = this.getAttribute('data-program');
            const program = programDetails[programId];
            
            let featuresHTML = '';
            if (program.features.length > 0) {
                featuresHTML = '<ul>';
                program.features.forEach(feature => {
                    featuresHTML += `<li>${feature}</li>`;
                });
                featuresHTML += '</ul>';
            }
            
            programModalBody.innerHTML = `
                <h2>${program.title}</h2>
                <p>${program.description}</p>
                ${featuresHTML}
            `;
            
            programModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            programModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling again
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === programModal) {
            programModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Volume slider functionality
    const volumeSlider = document.querySelector('.volume-slider');
    const volumeIcon = document.querySelector('.player-volume i');

    if (volumeSlider && volumeIcon) {
        volumeSlider.addEventListener('input', function() {
            const value = this.value;
            
            // Update volume icon based on value
            if (value == 0) {
                volumeIcon.className = 'fas fa-volume-mute';
            } else if (value < 50) {
                volumeIcon.className = 'fas fa-volume-down';
            } else {
                volumeIcon.className = 'fas fa-volume-up';
            }
            
            // In a real implementation, this would adjust the audio volume
            // setVolume(value / 100);
        });
    }
});
