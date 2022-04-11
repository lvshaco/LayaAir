import { Camera } from "../Camera"
import { CommandBuffer } from "./command/CommandBuffer"
import { RenderTexture } from "../../resource/RenderTexture";
import { ShaderData } from "../../../RenderEngine/RenderShader/ShaderData";

/**
 * * <code>PostProcessRenderContext</code> 类用于创建后期处理渲染上下文。
 */
export class PostProcessRenderContext {
	/** origan RenderTexture */
	source: RenderTexture | null = null;
	/** forward effect target */
	indirectTarget:RenderTexture|null = null;
	/** dest RenderTexture*/
	destination: RenderTexture | null = null;
	/** 渲染相机。*/
	camera: Camera | null = null;
	/** 合成着色器数据。*/
	compositeShaderData: ShaderData | null = null;
	/** 后期处理指令流。*/
	command: CommandBuffer | null = null;
	/** 临时纹理数组。*/
	deferredReleaseTextures: RenderTexture[] = [];

}


