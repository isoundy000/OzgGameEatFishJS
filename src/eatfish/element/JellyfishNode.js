
//elementName

eatfish.element.JellyfishNode = eatfish.element.BaseEnemyFishNode.extend({
	sprite:null,
	ctor:function () {		
		this._super();
		
		this.elementName = eatfish.element.Name.jellyFish;
		
		this.animSpriteList = eatfish.element.animData.jellyFish;
		this.animKey = cfg.animKeyJellyFish;
		this.moveTimeElapsed = 0;
		
		var jellyfish = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(this.animSpriteList[0]));
		jellyfish.setAnchorPoint(cc.p(0, 0));
		jellyfish.setPosition(cc.p(0, 0));
		jellyfish.setTag(eatfish.element.BaseNodeTag.mainObj);
		this.addChild(jellyfish);
		
		this.setAnchorPoint(0.5, 0.5);
		this.setContentSize(jellyfish.getContentSize());
		
		var center = new cc.Node();
		center.setAnchorPoint(0.5, 0.5);
		center.setPosition(this.getContentSize().width / 2, 110);
		center.setTag(eatfish.element.BaseNodeTag.centerPoint);
		center.setContentSize(cc.size(56, 64));
		this.addChild(center);
		
		//test
		/*var test = new cc.Sprite("test-32.png");
		test.setPosition(this.getContentSize().width / 2, 110);
		test.setScaleX(1.75);
		test.setScaleY(2);
		this.addChild(test);*/
		
		this.playAnim();
		this.scheduleUpdate();
		
		return true;
	}
});
