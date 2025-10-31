// import { InvalidBidException } from "@/exception/InvalidBidException";
import { i18n } from "@/I18N";
import { fluidPlayer } from "@/lib/fluidPlayer";
import { FluidPlayerFactoryOptions, IFluidPlayerEvent, IVastAdavanced } from "@/type";
// import { encode } from "js-base64";

type TVieoAdData = {
      isLinear?: boolean;
      isVideoAdData: boolean;
      // contentType: string;
      // vastUrl: string;
      currentTime: number;
      // autoplay: boolean;
      // muted: boolean;
      // volume: number;
      // videoAdInViewDuration: number;
      videoAdStatus: string; // loaded | started | skipped | complete | error | stop
      videoAdDuration: number;
      updatedAt?: number; // video status updated at
      // width?: number;
      // height?: number;
  };

export class FluidPlayerFactory {
  private target: HTMLVideoElement;
  private options: FluidPlayerFactoryOptions;

  public adData: TVieoAdData = {
    isLinear: true,
    isVideoAdData: true,
    // contentType: '',
    // vastUrl: '',
    currentTime: 0,
    // autoplay: true,
    // muted: true,
    // volume: 0,
    // videoAdInViewDuration: 0,
    videoAdStatus: '',
    videoAdDuration: 0,
    updatedAt: 0,
    // width: 1,
    // height: 1,
  }

  public constructor(
    targetContainer: HTMLDivElement,
    options: FluidPlayerFactoryOptions
  ) {
    const video = document.createElement("video");
    video.defaultMuted = true;
    video.muted = true;
    targetContainer.appendChild(video);
    this.target = video;
    this.options = options;
  }

  public async create(
    _rePlay: () => any,
    vastAdvanced: IVastAdavanced = {},
    playerEvent: IFluidPlayerEvent = {},
  ): Promise<FluidPlayerInstance> {
    const player = fluidPlayer(this.target, {
      layoutControls: {
        roundedCorners: 0,
        fillToContainer: true,
        autoPlay: true,
        mute: true,
        doubleclickFullscreen: false,
        keyboardControl: false,
        loop: false,
        allowTheatre: false,
        miniPlayer: {
          enabled: false,
        },
        preload: "auto",
        persistentSettings: {
          volume: false,
          quality: false,
          speed: false,
          theatre: false,
        },
        layout: "in-renderer-js",
        logo: {
          imageUrl: this.options.logo?.imageUrl,
          clickUrl: this.options.logo?.clickUrl,
          position: "bottom left",
        },
        contextMenu: {
          controls: false,
        },
      },
      vastOptions: {
        allowVPAID: true,
        adCTAText: false,
        adClickable: false,
        showPlayButton: false,
        maxAllowedVastTagRedirects: 5,
        showProgressbarMarkers: false,
        vastTimeout: 12000,
        adList: [
          {
            adText: i18n.t("LearnMore"),
            adClickable: false,
            roll: "preRoll",
            // vastTag: await this.getVastTag(
            //   this.options.vastUrl,
            //   this.options.vastXml
            // ),
            vastTag: this.options.vastUrl ? this.options.vastUrl : this.getVastDataUrl(this.options.vastXml),
          },
        ],
        vastAdvanced: {
          vastLoadedCallback: () => {
            vastAdvanced.vastLoaded && vastAdvanced.vastLoaded();
          },
          noVastVideoCallback: () => {
            vastAdvanced.noVastVideo && vastAdvanced.noVastVideo();
          },
          vastVideoEndedCallback: () => {
            console.log('vastVideoEndedCallback');
            // this.attachEndCard(player, rePlay);
            vastAdvanced.vastVideoEnded && vastAdvanced.vastVideoEnded();
          },
        },
      },
    });

    player.on('playing', (e: any) => { // start
      if (!this.adData.videoAdStatus) {
        this.adData.videoAdStatus = 'started';
        this.adData.videoAdDuration = e.srcElement.duration;
        playerEvent.start && playerEvent.start(this.adData);
      }
    });

    player.on('ended', () => {
      this.adData.videoAdStatus = 'complete';
    });

    player.on('timeupdate', (_e: any, info: any) => { // progress
      // console.log('progress', e, info);
      this.adData.currentTime = info.currentTime;
      this.adData.updatedAt = Date.now();
      playerEvent.progress && playerEvent.progress(this.adData);
    });

    return player;
  }

  // private attachEndCard(player: FluidPlayerInstance, rePlay: () => any) {
  //   const container = this.getFluidContainer();
  //   this.target.style.filter = "blur(8px)";

  //   this.removeVolumeButtons(container);

  //   const { endCard, replayButton } = this.createReplayButtonElement();

  //   replayButton.addEventListener("click", () => {
  //     player.destroy();
  //     rePlay();
  //   });

  //   const fluidPlayerContainer = this.target.parentElement as HTMLDivElement;
  //   fluidPlayerContainer.appendChild(endCard);
  // }

  // private removeVolumeButtons(container: HTMLDivElement) {
  //   const volumeButton = container.querySelector(".fluid_button_volume");
  //   const muteButton = container.querySelector(".fluid_button_mute");

  //   volumeButton?.remove();
  //   muteButton?.remove();
  // }

  // private createReplayButtonElement(): {
  //   endCard: HTMLDivElement;
  //   replayButton: HTMLDivElement;
  // } {
  //   const endCard = document.createElement("div");
  //   endCard.classList.add("ad_end_card");

  //   const replayButton = document.createElement("div");
  //   replayButton.classList.add("ad_replay");

  //   const replayIcon = document.createElement("div");
  //   replayIcon.classList.add("ad_replay_icon");
  //   replayButton.appendChild(replayIcon);

  //   const replayText = document.createElement("span");
  //   replayText.textContent = i18n.t("Replay");
  //   replayButton.appendChild(replayText);

  //   endCard.appendChild(replayButton);

  //   return {
  //     endCard: endCard,
  //     replayButton: replayButton,
  //   };
  // }

  // private getFluidContainer() {
  //   return this.target.parentElement as HTMLDivElement;
  // }

  // private async getVastTag(vastUrl?: string, vastXml?: string) {
  //   if (vastXml) {
  //     if (vastUrl) {
  //       navigator.sendBeacon(vastUrl);
  //     }

  //     return this.getVastDataUrl(vastXml);
  //   } else if (vastUrl) {
  //     const vast = await this.getVastByVastUrl(vastUrl);
  //     return this.getVastDataUrl(vast);
  //   }

  //   throw new InvalidBidException();
  // }

  // private async getVastByVastUrl(vastUrl: string): Promise<string> {
  //   const response = await fetch(vastUrl);
  //   const vastXml = await response.text();

  //   return vastXml;
  // }

  private getVastDataUrl(vastXml: string | undefined): string {
    return vastXml ? this.getVastDataUrlFromVastXml(vastXml) : '';
  }

  private getVastDataUrlFromVastXml(vastXml: string): string {
    return (
      "data:text/xml;charset=utf-8;base64," +
      btoa(vastXml.replace(/\\"/g, '"'))
    );
  }
}
