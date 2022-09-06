import "laya/d3/core/scene/Scene3D";
import "laya/ModuleDef";
import "laya/d3/ModuleDef";
import "laya/d3/physics/ModuleDef";
import "laya/ui/ModuleDef";
import "laya/particle/ModuleDef";
import "laya/ani/ModuleDef";
import "laya/spine/ModuleDef";
import "laya/gltf/glTFResource";

import { Resource } from "laya/resource/Resource";
import { Main } from "./Main";
import { IDEMain } from "./IDEMain";

Resource.DEBUG = true;

//new IDEMain();

new Main();
