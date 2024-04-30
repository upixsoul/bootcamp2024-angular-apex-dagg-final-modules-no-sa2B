/* ••[1]••••••••••••••••••••••••• posts.service.ts •••••••••••••••••••••••••••••• */

import { Injectable } from '@angular/core';
import { asyncScheduler, concatMap, exhaustMap, from, map, Observable, of, scheduled, switchMap, timer, toArray } from 'rxjs';
import { Item } from '../entities/item.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductItemsService {
	private myItems: Array<Item> = [
		{
            "title": "Defense the travel audience hand",
            "id": "1",
            "description": "Leader structure safe or black late wife newspaper her pick central forget single likely.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/1.jpeg",
				"https://api.slingacademy.com/public/sample-photos/11.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Space build policy people model treatment town hard use",
            "id": "2",
            "description": "Much technology how within rather him lay why part actually system increase feel.",
			"photos": [
				//"https://api.slingacademy.com/public/sample-photos/2.jpeg",
				//"https://api.slingacademy.com/public/sample-photos/22.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Party about different guess bill too owner",
            "id": "3",
            "description": "Street anything piece south yard since well point summer school economy respond people mother.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/3.jpeg",
				"https://api.slingacademy.com/public/sample-photos/33.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Table husband",
            "id": "4",
            "description": "Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent.",
			"photos": [
				//"https://api.slingacademy.com/public/sample-photos/4.jpeg",
				//"https://api.slingacademy.com/public/sample-photos/44.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Support audience model program three music",
            "id": "5",
            "description": "World early north TV around meet goal across reason responsibility have must build up some language soon.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/5.jpeg",
				"https://api.slingacademy.com/public/sample-photos/55.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Apply future response she reduce decide",
            "id": "6",
            "description": "Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/6.jpeg",
				"https://api.slingacademy.com/public/sample-photos/66.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Fire year candidate too like",
            "id": "7",
            "description": "Few address take for special development white career.",
			"photos": [
				//"https://api.slingacademy.com/public/sample-photos/7.jpeg",
				//"https://api.slingacademy.com/public/sample-photos/77.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Reflect design camera land girl wind behind side",
            "id": "8",
            "description": "Drug if approach out according set home job company wall source trouble act huge easy style physical so month.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/8.jpeg",
				"https://api.slingacademy.com/public/sample-photos/88.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Per nature research",
            "id": "9",
            "description": "Nature focus wonder behind magazine pattern degree far without tree consider.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/9.jpeg",
				"https://api.slingacademy.com/public/sample-photos/99.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Yard",
            "id": "10",
            "description": "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/10.jpeg",
				"https://api.slingacademy.com/public/sample-photos/100.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Commercial kitchen",
            "id": "11",
            "description": "Their base help outside often grow address himself product issue watch pick kid all break ever threat try learn edge degree name order everyone seem interest democratic card reach safe war gun expert.",
			"photos": [
				//"https://api.slingacademy.com/public/sample-photos/12.jpeg",
				//"https://api.slingacademy.com/public/sample-photos/110.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Fact herself",
            "id": "12",
            "description": "Car garden begin western over suggest even read nor might price different pick.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/13.jpeg",
				"https://api.slingacademy.com/public/sample-photos/120.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Produce science chance develop something",
            "id": "13",
            "description": "Wonder race yeah seem of argue a final follow evening hair.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/14.jpeg",
				"https://api.slingacademy.com/public/sample-photos/130.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Positive particular",
            "id": "14",
            "description": "Result democratic design until always parent sell film true social range author expert least reveal those.",
			"photos": [
				//"https://api.slingacademy.com/public/sample-photos/15.jpeg",
				//"https://api.slingacademy.com/public/sample-photos/129.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Again would high particularly American table",
            "id": "15",
            "description": "Young follow magazine bar kitchen begin at around home tax north majority especially institution.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/16.jpeg",
				"https://api.slingacademy.com/public/sample-photos/128.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Boy trouble offer candidate maybe mean family",
            "id": "16",
            "description": "Chance boy family recent office according stay wrong during bag level which song also movement worker medical people important difference Congress store hotel they southern music statement kind book.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/17.jpeg",
				"https://api.slingacademy.com/public/sample-photos/127.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Pass effect part",
            "id": "17",
            "description": "Writer play bank could response TV middle improve front growth act husband provide take trial student hand task most few receive loss allow allow range.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/18.jpeg",
				"https://api.slingacademy.com/public/sample-photos/126.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "East operation young indeed draw great professor",
            "id": "18",
            "description": "Notice organization admit could born laugh event writer ask most debate modern talk quite arm physical nor voice.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/19.jpeg",
				"https://api.slingacademy.com/public/sample-photos/125.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "Style class that party see eat find",
            "id": "19",
            "description": "Senior learn world agreement receive civil range detail everything model interest read film everything important.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/21.jpeg",
				"https://api.slingacademy.com/public/sample-photos/124.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        },
        {
            "title": "No white success knowledge player community",
            "id": "20",
            "description": "General free fly decide edge yeah their skill work television those claim pull out player leg ok small minute return morning minute son down model series team hot knowledge.",
			"photos": [
				"https://api.slingacademy.com/public/sample-photos/23.jpeg",
				"https://api.slingacademy.com/public/sample-photos/122.jpeg",
			],
            "prices": {
				"20x20": 15.00,
				"20x30": 18.45
				},
        }
	];

	public items$: Observable<Array<Item>> = of(this.myItems)
	//from(this.myItems).pipe(switchMap(async (ob) => ob),toArray())
	//timer(10).pipe(map(() => this.myItems)); //scheduled(this.myItems,asyncScheduler);
}
