/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SpeakerOptions } from "./components/honey-bibsonomy/speaker-options";
export namespace Components {
    interface HoneySpeaker {
        /**
          * i18n language ident for Web Speech API: de-DE or en or de ...
         */
        "audiolang": string;
        /**
          * pitch for Web Speech API
         */
        "audiopitch": number;
        /**
          * rate for Web Speech API
         */
        "audiorate": number;
        /**
          * volume for Web Speech API
         */
        "audiovolume": number;
        /**
          * cancel the speaker
         */
        "cancelSpeaker": () => Promise<void>;
        /**
          * icon height
         */
        "iconheight": string;
        /**
          * icon width
         */
        "iconwidth": string;
        /**
          * paused the speaker
         */
        "pauseSpeaker": () => Promise<void>;
        /**
          * use pure speaker symbol for silence state
         */
        "pure": boolean;
        /**
          * continue speaker after paused
         */
        "resumeSpeaker": () => Promise<void>;
        /**
          * bricht laufende oder pausierende Ausgaben ab und startet dia Ausgabe von vorn
         */
        "startSpeaker": () => Promise<void>;
        /**
          * An comma separated list  with ids of DOM elements which inner text should be speech.
         */
        "textids": string;
        /**
          * An url to download an text file to speech.
         */
        "texturl": string;
        /**
          * call the toggle speaker action
         */
        "toggleSpeaker": () => Promise<void>;
        /**
          * Update speaker options
          * @param options : SpeakerOptions plain object to set the options
         */
        "updateOptions": (options: SpeakerOptions) => Promise<void>;
        /**
          * enable console logging
         */
        "verbose": boolean;
        /**
          * voice name used of Web Speech API
         */
        "voicename": string;
    }
}
declare global {
    interface HTMLHoneySpeakerElement extends Components.HoneySpeaker, HTMLStencilElement {
    }
    var HTMLHoneySpeakerElement: {
        prototype: HTMLHoneySpeakerElement;
        new (): HTMLHoneySpeakerElement;
    };
    interface HTMLElementTagNameMap {
        "honey-bibsonomy": HTMLHoneySpeakerElement;
    }
}
declare namespace LocalJSX {
    interface HoneySpeaker {
        /**
          * i18n language ident for Web Speech API: de-DE or en or de ...
         */
        "audiolang"?: string;
        /**
          * pitch for Web Speech API
         */
        "audiopitch"?: number;
        /**
          * rate for Web Speech API
         */
        "audiorate"?: number;
        /**
          * volume for Web Speech API
         */
        "audiovolume"?: number;
        /**
          * icon height
         */
        "iconheight"?: string;
        /**
          * icon width
         */
        "iconwidth"?: string;
        /**
          * Fired if the voice has failed to speak.
         */
        "onHoneySpeakerFailed"?: (event: CustomEvent<string>) => void;
        /**
          * Fired if the voice has finished with speaking.
         */
        "onHoneySpeakerFinished"?: (event: CustomEvent<string>) => void;
        /**
          * Fired if the voice is paused with speaking.
         */
        "onHoneySpeakerPaused"?: (event: CustomEvent<string>) => void;
        /**
          * Fired if the voice is resumed after paused with speaking.
         */
        "onHoneySpeakerResume"?: (event: CustomEvent<string>) => void;
        /**
          * Fired if the voice is speaking.
         */
        "onHoneySpeakerStarted"?: (event: CustomEvent<string>) => void;
        /**
          * use pure speaker symbol for silence state
         */
        "pure"?: boolean;
        /**
          * An comma separated list  with ids of DOM elements which inner text should be speech.
         */
        "textids"?: string;
        /**
          * An url to download an text file to speech.
         */
        "texturl"?: string;
        /**
          * enable console logging
         */
        "verbose"?: boolean;
        /**
          * voice name used of Web Speech API
         */
        "voicename"?: string;
    }
    interface IntrinsicElements {
        "honey-bibsonomy": HoneySpeaker;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "honey-bibsonomy": LocalJSX.HoneySpeaker & JSXBase.HTMLAttributes<HTMLHoneySpeakerElement>;
        }
    }
}
