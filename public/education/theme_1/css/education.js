((Vue)=>{
    window.reportCall = function(info) {
        vue.loadRecord(info);
    }
    window.showCall = function() {
        vue.showInit();
    }
    const spinLoader = Vue.component('spinLoader', {
        data: () => {return {}},
        template: `
        <div class="loader">
            <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="blue" strokeWidth="4"></circle>
                <path class="opacity-75" fill="blue" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
        `
    });
    const eduImage = Vue.component('eduImage', {
        data: () => {return {}},
        props: ['info', 'data', 'move'],
        template: `
        <div class="col">
            <div class="bgimage border edu-shadow" :style="{backgroundImage: bgimg, minHeight: '350px'}" :data-aos="'fade-up-'+move"></div>
        </div>`,
        computed: {
            bgimg: function() {
                return `url(${this.info.api_url}/images/${this.data.img}_bg.jpg)`;
            }
        }
    });
    const eduProfile = Vue.component('eduProfile', {
        data: () => {return {crridx: 0}},
        props: ['info', 'data', 'title', 'move'],
        template: `
        <div class="col">
            <div class="border px-5 edu-shadow" style="min-height: 350px;" :data-aos="'fade-up-'+move">
                <div class="d-flex justify-content-center align-items-center py-4">
                    <div class="bg-primary rounded-circle d-flex justify-content-center align-items-center me-3" style="width:64px;height:64px;">
                        <img :src="info.api_url+'/images/'+data[0].img+'_icon.png'" width="36px;"/>
                    </div>
                    <div class="fs-4 fw-bold ms-3">{{title}}</div>
                </div>
                <div class="pb-4">
                    <div class="row"><div class="col-5">School Name</div><div class="col-7 fw-bold">: {{data[this.crridx].schoolName}}</div></div>
                    <div class="row"><div class="col-5">Class</div><div class="col-7 fw-bold">: {{data[this.crridx].standard}}</div></div>
                    <div class="row"><div class="col-5">Year</div><div class="col-7 fw-bold">: {{data[this.crridx].year}}</div></div>
                    <div class="row"><div class="col-5">Address</div><div class="col-7 fw-bold">: {{data[this.crridx].address}}</div></div>
                    <div class="row"><div class="col-5">Teacher Name</div><div class="col-7 fw-bold">: Justin Judith</div></div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-primary me-3" :disabled="isprevdisabled" @click="crridx -= 1"><i class="bi bi-caret-left"></i>Prev</button>
                    <button class="btn btn-primary ms-3" :disabled="isnextdisabled" @click="crridx += 1">Next<i class="bi bi-caret-right"></i></button>
                </div>
            </div>
        </div>`,
        computed: {
            isnextdisabled: function() {
                return this.crridx >= this.data.length -1;
            },
            isprevdisabled: function() {
                return this.crridx === 0;
            }
        }
    });
    const vue = new Vue({
        el: '#app',
        data: {
            show: false,
            tabid: 0,
            isLoader: false,
            dataInfo: {},
            profileinfo: {},
            educationinfo: {},
            passedInfo: {api_url: 'http://localhost:5151'},
            edulist: {}
        },
        components: {
            //basicProfile,spinLoader,myEducation
            spinLoader, eduProfile, eduImage
        },
        methods: {
            async loadRecord(pass) {
                let info;
                if (!pass) {
                    this.isLoader = true;
                    info = this.passedInfo;
                } else {
                    info = {...pass}
                    this.passedInfo = {...pass}
                }
                let search = [{ _modal: 'EductionList', _find: { userid: info.userid }, _mode: 'single', _select: 'schools colleges others' }];
                const res = await fetch(`${info.api_url}/api/common/common_search`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({ _list: search })
                });
                const data = await res.json();
                const school_indexs = {
                    'Pre KG': {idx: 0, group: 'Kinder Garden', img: 'kinder'},
                    'LKG': {idx: 1, group: 'Kinder Garden', img: 'kinder'},
                    'UKG': {idx: 2, group: 'Kinder Garden', img: 'kinder'},
                    'Standard I': {idx: 0, group: 'Elementary/Primary School', img: 'primary'},
                    'Standard II': {idx: 1, group: 'Elementary/Primary School', img: 'primary'}, 
                    'Standard III': {idx: 2, group: 'Elementary/Primary School', img: 'primary'}, 
                    'Standard IV': {idx: 3, group: 'Elementary/Primary School', img: 'primary'},
                    'Standard V': {idx: 4, group: 'Elementary/Primary School', img: 'primary'},
                    'Standard VI': {idx: 0, group: 'Middle School', img: 'middle'},
                    'Standard VII': {idx: 1, group: 'Middle School', img: 'middle'},
                    'Standard VIII': {idx: 2, group: 'Middle School', img: 'middle'}, 
                    'Standard IX': {idx: 0, group: 'High School', img: 'high'}, 
                    'Standard X': {idx: 1, group: 'High School', img: 'high'}, 
                    'Standard XI': {idx: 0, group: 'Higher Secondary School', img: 'secondary'},
                    'Standard XII': {idx: 1, group: 'Higher Secondary School', img: 'secondary'}
                }
                const list_parse = data.schools.reduce((pass, school)=> {
                    let name = school.schoolName;
                    school.classes.forEach(cls=> {
                        let info = school_indexs[cls.standard];
                        pass[info.group].push({schoolName: name, 'standard': cls.standard,img: info.img,year: cls.year, address: `${cls.place}, ${cls.state} - ${cls.zipcode}`, idx: info.idx})
                    });
                    return pass;
                }, {'Kinder Garden': [], 'Elementary/Primary School': [], 'Middle School': [], 'High School': [], 'Higher Secondary School': []});
                for(let [key, value] of Object.entries(list_parse)) {
                    list_parse[key] = value.sort((a, b)=>a.idx - b.idx);
                }
                this.edulist = list_parse;
                if (pass) window.parent.fromChild();
            },
            async loadMyJob() {
                // this.isLoader = true;
                // let search = [{ _modal: 'ProfileList', _find: { userid: this.passedInfo.userid }, _mode: 'single', _select: 'job' }];
                // const res = await fetch(`${this.passedInfo.api_url}/api/common/common_search`, {
                //     method: "POST",
                //     headers: { "Content-Type": "application/json"},
                //     body: JSON.stringify({ _list: search })
                // });
                // const data = await res.json();
                // this.tabid = 1;
                // this.dataInfo = data.job||[];
                // this.isLoader = false;
                // this.$nextTick(function() {
                //     this.$nextTick(function() {
                //         AOS.init();
                //     });
                // })
            },
            showInit() {
                this.show = true;
                this.$nextTick(function() {
                    AOS.init();
                });
            }
        },
        mounted() {
            // (async()=> {
            //     let search = [{ _modal: 'EductionList', _find: { userid: '63d552a84c4fb47cf69d7be2' }, _mode: 'single', _select: 'schools colleges others' }];
            //     const res = await fetch(`http://localhost:5151/api/common/common_search`, {
            //         method: "POST",
            //         headers: { "Content-Type": "application/json"},
            //         body: JSON.stringify({ _list: search })
            //     });
            //     const data = await res.json();
            //     const school_indexs = {
            //         'Pre KG': {idx: 0, group: 'Kinder Garden', img: 'kinder'},
            //         'LKG': {idx: 1, group: 'Kinder Garden', img: 'kinder'},
            //         'UKG': {idx: 2, group: 'Kinder Garden', img: 'kinder'},
            //         'Standard I': {idx: 0, group: 'Elementary/Primary School', img: 'primary'},
            //         'Standard II': {idx: 1, group: 'Elementary/Primary School', img: 'primary'}, 
            //         'Standard III': {idx: 2, group: 'Elementary/Primary School', img: 'primary'}, 
            //         'Standard IV': {idx: 3, group: 'Elementary/Primary School', img: 'primary'},
            //         'Standard V': {idx: 4, group: 'Elementary/Primary School', img: 'primary'},
            //         'Standard VI': {idx: 0, group: 'Middle School', img: 'middle'},
            //         'Standard VII': {idx: 1, group: 'Middle School', img: 'middle'},
            //         'Standard VIII': {idx: 2, group: 'Middle School', img: 'middle'}, 
            //         'Standard IX': {idx: 0, group: 'High School', img: 'high'}, 
            //         'Standard X': {idx: 1, group: 'High School', img: 'high'}, 
            //         'Standard XI': {idx: 0, group: 'Higher Secondary School', img: 'secondary'},
            //         'Standard XII': {idx: 1, group: 'Higher Secondary School', img: 'secondary'}
            //     }
            //     const list_parse = data.schools.reduce((pass, school)=> {
            //         let name = school.schoolName;
            //         school.classes.forEach(cls=> {
            //             let info = school_indexs[cls.standard];
            //             pass[info.group].push({schoolName: name, 'standard': cls.standard,img: info.img,year: cls.year, address: `${cls.place}, ${cls.state} - ${cls.zipcode}`, idx: info.idx})
            //         });
            //         return pass;
            //     }, {'Kinder Garden': [], 'Elementary/Primary School': [], 'Middle School': [], 'High School': [], 'Higher Secondary School': []});
            //     for(let [key, value] of Object.entries(list_parse)) {
            //         list_parse[key] = value.sort((a, b)=>a.idx - b.idx);
            //     }
            //     this.edulist = list_parse;
            //     //console.log(JSON.stringify(school_parse));

            //     //console.log(JSON.stringify(data));
            // })();
        },
    })
})(Vue);