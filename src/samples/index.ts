import "laya/d3/core/scene/Scene3D";
import "laya/ModuleDef";
import "laya/d3/ModuleDef";
import "laya/d3/physics/ModuleDef";
import "laya/ui/ModuleDef";
import "laya/particle/ModuleDef";
import "laya/ani/ModuleDef";
import "laya/spine/ModuleDef";
import "laya/gltf/glTFLoader";
import "laya/html/ModuleDef";

import { Resource } from "laya/resource/Resource";
import { Main } from "./Main";
Resource.DEBUG = true;
//new Main(false);
new Main(false, false);
import { Skeleton_Test } from "./2d/Skeleton_Test";
import { Skeleton_Test2 } from "./2d/Skeleton_Test2";
new Skeleton_Test(Main);
//new Skeleton_Test2(Main);