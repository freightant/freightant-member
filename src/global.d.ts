// src/global.d.ts
declare module '@lottiefiles/react-lottie-player' {
    export const Player: React.ComponentType<any>;
  }
  declare namespace JSX {
    interface IntrinsicElements {
        'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
            src: string;
            background: string;
            speed: string;
            loop: boolean;
            controls: boolean;
            autoplay: boolean;
            direction: string;
            mode: string;
        }, HTMLElement>;
    }
}
