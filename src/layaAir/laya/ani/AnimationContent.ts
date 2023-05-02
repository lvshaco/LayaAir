import { AnimationNodeContent } from "./AnimationNodeContent";
/**
 * @internal
 * @author ...
 */
export class AnimationContent {
	nodes: AnimationNodeContent[]; // 骨骼数据
	name: string;
	playTime: number;
	bone3DMap: any; // 骨骼名称到骨骼索引（nodes中的索引）
	totalKeyframeDatasLength: number;
}

