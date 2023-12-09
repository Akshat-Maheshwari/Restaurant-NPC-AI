import { RigidBody } from "@react-three/rapier";
import {Restaurant} from "./Restaurant";
import { CharacterController } from "./CharacterController/CharacterController";
import { Manager } from "../hooks/useYuka";
import { AlfredNpc } from "./Npcs";

export const Experience = ({ heroRef }) => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 20, 20]} intensity={1} />
      <Manager>
        <CharacterController reference={heroRef} />
        <AlfredNpc name="Alfred" position={[0, 0, 0]} heroRef={heroRef} />
        <group>
          <RigidBody friction={2} colliders="trimesh" type="fixed">
            <Restaurant scale={1.2}/>
          </RigidBody>
        </group>
      </Manager>
    </>
  );
};
