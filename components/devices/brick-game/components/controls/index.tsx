import React, { FC } from 'react'
import {BrickGameButtonHandlers, BrickGameButtons} from '../../types'
import styles from './styles.module.scss'

interface Props {
  buttonHandlers: BrickGameButtonHandlers;
}

export const BrickGameControls: FC<Props> = ({ buttonHandlers }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={321} height={208} fill="none" viewBox="0 0 321 208">
      <g
        filter="url(#BrickGameControls__a)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.ROTATE]}
      >
        <circle cx={282} cy={123} r={32} fill="#E6BE64" />
      </g>
      <g
        filter="url(#BrickGameControls__b)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.ON_OFF]}
      >
        <circle cx={69} cy={17} r={12} fill="#E6BE64" />
      </g>
      <g
        filter="url(#BrickGameControls__c)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.START_PAUSE]}
      >
        <circle cx={134} cy={17} r={12} fill="#E6BE64" />
      </g>
      <g
        filter="url(#BrickGameControls__d)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.SOUND]}
      >
        <circle cx={199} cy={17} r={12} fill="#E6BE64" />
      </g>
      <g
        filter="url(#BrickGameControls__e)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.RESET]}
      >
        <circle cx={264} cy={17} r={12} fill="#E6BE64" />
      </g>
      <g
        filter="url(#BrickGameControls__f)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.UP]}
      >
        <circle cx={79} cy={75} r={23} fill="#E6BE64" />
      </g>
      <g
        filter="url(#BrickGameControls__g)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.RIGHT]}
      >
        <circle cx={130} cy={123} r={23} fill="#E6BE64" />
      </g>
      <g
        filter="url(#BrickGameControls__h)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.DOWN]}
      >
        <circle cx={79} cy={169} r={23} fill="#E6BE64" />
      </g>
      <g
        filter="url(#BrickGameControls__i)"
        className={styles.pressedButton}
        onClick={buttonHandlers[BrickGameButtons.LEFT]}
      >
        <circle cx={28} cy={122} r={23} fill="#E6BE64" />
      </g>
      <path
        fill="#B4D2E6"
        d="M79.354 103.646a.5.5 0 0 0-.708 0l-3.181 3.182a.501.501 0 0 0 .707.708L79 104.707l2.828 2.829a.5.5 0 0 0 .707-.708l-3.181-3.182Zm-.708 36.708a.5.5 0 0 0 .708 0l3.181-3.182a.501.501 0 0 0-.707-.708L79 139.293l-2.828-2.829a.5.5 0 0 0-.707.708l3.181 3.182ZM78.5 104v36h1v-36h-1Z"
      />
      <path
        fill="#B4D2E6"
        d="M79.354 103.646a.5.5 0 0 0-.708 0l-3.181 3.182a.501.501 0 0 0 .707.708L79 104.707l2.828 2.829a.5.5 0 0 0 .707-.708l-3.181-3.182Zm-.708 36.708a.5.5 0 0 0 .708 0l3.181-3.182a.501.501 0 0 0-.707-.708L79 139.293l-2.828-2.829a.5.5 0 0 0-.707.708l3.181 3.182ZM78.5 104v36h1v-36h-1Z"
      />
      <path stroke="#B4D2E6" strokeLinecap="round" strokeWidth={2} d="M79 105v34M79 105v34" />
      <path
        fill="#B4D2E6"
        d="M60.646 121.646a.501.501 0 0 0 0 .708l3.182 3.182a.5.5 0 0 0 .707-.708L61.707 122l2.828-2.828a.501.501 0 0 0-.707-.708l-3.182 3.182Zm36.708.708a.501.501 0 0 0 0-.708l-3.182-3.182a.5.5 0 0 0-.707.708L96.293 122l-2.829 2.828a.501.501 0 0 0 .708.708l3.182-3.182ZM61 122.5h36v-1H61v1Z"
      />
      <path
        fill="#B4D2E6"
        d="M60.646 121.646a.501.501 0 0 0 0 .708l3.182 3.182a.5.5 0 0 0 .707-.708L61.707 122l2.828-2.828a.501.501 0 0 0-.707-.708l-3.182 3.182Zm36.708.708a.501.501 0 0 0 0-.708l-3.182-3.182a.5.5 0 0 0-.707.708L96.293 122l-2.829 2.828a.501.501 0 0 0 .708.708l3.182-3.182ZM61 122.5h36v-1H61v1Z"
      />
      <path stroke="#B4D2E6" strokeLinecap="round" strokeWidth={2} d="M62 122h34M62 122h34" />
      <path
        fill="#DCE6FA"
        d="M248.635 35.89h2.651c.544 0 1.011.082 1.402.245.393.163.696.403.908.722.211.32.317.712.317 1.177 0 .381-.065.708-.195.982-.127.27-.308.496-.542.678-.231.18-.503.323-.816.43l-.464.244h-2.304l-.01-1.142h1.714c.257 0 .47-.046.64-.137a.892.892 0 0 0 .38-.381c.088-.163.132-.352.132-.566 0-.228-.042-.425-.127-.591a.855.855 0 0 0-.385-.381 1.426 1.426 0 0 0-.65-.132H250.1V43h-1.465v-7.11Zm3.974 7.11-1.621-3.169 1.548-.01 1.641 3.11V43h-1.568Zm7.203-1.143V43h-3.785v-1.143h3.785Zm-3.306-5.966V43h-1.465v-7.11h1.465Zm2.812 2.895V39.9h-3.291v-1.113h3.291Zm.489-2.895v1.147h-3.78v-1.147h3.78Zm4.56 5.249a.942.942 0 0 0-.058-.342.655.655 0 0 0-.205-.283 1.83 1.83 0 0 0-.425-.26 6.081 6.081 0 0 0-.708-.263 8.844 8.844 0 0 1-.918-.351 3.75 3.75 0 0 1-.762-.454 2.05 2.05 0 0 1-.518-.61 1.69 1.69 0 0 1-.185-.806c0-.297.065-.565.195-.806.13-.244.313-.453.547-.625.234-.176.511-.311.83-.405a3.76 3.76 0 0 1 1.06-.142c.524 0 .981.094 1.372.283.39.189.693.448.908.776.218.33.327.705.327 1.129h-1.455c0-.209-.044-.391-.132-.547a.891.891 0 0 0-.39-.376c-.173-.091-.391-.137-.655-.137-.254 0-.465.039-.634.117a.84.84 0 0 0-.381.308.755.755 0 0 0-.127.43c0 .12.029.229.088.326a.983.983 0 0 0 .273.274c.121.085.269.164.444.24.176.074.38.147.611.219.387.117.727.249 1.02.395.296.147.544.311.742.494.199.182.349.389.45.62.101.23.151.493.151.786 0 .31-.06.586-.181.83-.12.244-.294.45-.522.62-.228.17-.5.298-.816.386a3.94 3.94 0 0 1-1.059.132c-.352 0-.698-.046-1.04-.137a3.16 3.16 0 0 1-.933-.425 2.148 2.148 0 0 1-.664-.723c-.166-.293-.249-.64-.249-1.04h1.47c0 .222.034.409.102.562a.943.943 0 0 0 .289.371c.126.094.276.163.449.205.176.042.368.064.576.064.254 0 .462-.036.625-.108a.77.77 0 0 0 .366-.298.782.782 0 0 0 .122-.43Zm7.232.717V43h-3.785v-1.143h3.785Zm-3.306-5.966V43h-1.465v-7.11h1.465Zm2.812 2.895V39.9h-3.291v-1.113h3.291Zm.489-2.895v1.147h-3.78v-1.147h3.78Zm4.135 0V43h-1.459v-7.11h1.459Zm2.188 0v1.147h-5.801v-1.147h5.801ZM129.336 41.14c0-.127-.02-.241-.059-.342a.639.639 0 0 0-.205-.283 1.808 1.808 0 0 0-.425-.26 5.945 5.945 0 0 0-.708-.263 9.02 9.02 0 0 1-.918-.351 3.77 3.77 0 0 1-.761-.454 2.05 2.05 0 0 1-.518-.61 1.678 1.678 0 0 1-.185-.806c0-.297.065-.565.195-.806.13-.244.312-.453.547-.625.234-.176.511-.311.83-.405a3.753 3.753 0 0 1 1.059-.142c.525 0 .982.094 1.373.283.39.189.693.448.908.776.218.33.327.705.327 1.129h-1.455c0-.209-.044-.391-.132-.547a.894.894 0 0 0-.391-.376c-.172-.091-.39-.137-.654-.137-.254 0-.465.039-.635.117a.85.85 0 0 0-.381.308.762.762 0 0 0-.127.43c0 .12.03.229.088.326a.988.988 0 0 0 .274.274c.12.085.268.164.444.24.176.074.379.147.611.219.387.117.727.249 1.02.395.296.147.544.311.742.494.199.182.349.389.449.62.101.23.152.493.152.786 0 .31-.06.586-.181.83-.12.244-.294.45-.522.62-.228.17-.5.298-.816.386a3.95 3.95 0 0 1-1.059.132 4.01 4.01 0 0 1-1.04-.137 3.16 3.16 0 0 1-.933-.425 2.138 2.138 0 0 1-.664-.723c-.166-.293-.249-.64-.249-1.04h1.47c0 .222.034.409.102.562a.95.95 0 0 0 .288.371c.127.094.277.163.449.205.176.042.368.064.577.064.254 0 .462-.036.625-.108a.77.77 0 0 0 .366-.298.782.782 0 0 0 .122-.43Zm5.41-5.25-2.607 7.72h-1.045l2.607-7.72h1.045Zm3.53 4.576h-1.811v-1.143h1.811c.28 0 .508-.045.684-.136a.88.88 0 0 0 .386-.391c.081-.166.122-.353.122-.562 0-.211-.041-.408-.122-.59a.99.99 0 0 0-.386-.44c-.176-.11-.404-.166-.684-.166h-1.303V43h-1.465v-7.11h2.768c.557 0 1.034.102 1.431.303.4.199.706.474.918.826.212.351.317.753.317 1.206 0 .459-.105.856-.317 1.191a2.066 2.066 0 0 1-.918.776c-.397.183-.874.274-1.431.274ZM186.336 41.14c0-.127-.02-.241-.059-.342a.639.639 0 0 0-.205-.283 1.808 1.808 0 0 0-.425-.26 5.945 5.945 0 0 0-.708-.263 9.02 9.02 0 0 1-.918-.351 3.77 3.77 0 0 1-.761-.454 2.05 2.05 0 0 1-.518-.61 1.678 1.678 0 0 1-.185-.806c0-.297.065-.565.195-.806.13-.244.312-.453.547-.625.234-.176.511-.311.83-.405a3.753 3.753 0 0 1 1.059-.142c.525 0 .982.094 1.373.283.39.189.693.448.908.776.218.33.327.705.327 1.129h-1.455c0-.209-.044-.391-.132-.547a.894.894 0 0 0-.391-.376c-.172-.091-.39-.137-.654-.137-.254 0-.465.039-.635.117a.85.85 0 0 0-.381.308.762.762 0 0 0-.127.43c0 .12.03.229.088.326a.988.988 0 0 0 .274.274c.12.085.268.164.444.24.176.074.379.147.611.219.387.117.727.249 1.02.395.296.147.544.311.742.494.199.182.349.389.449.62.101.23.152.493.152.786 0 .31-.06.586-.181.83-.12.244-.294.45-.522.62-.228.17-.5.298-.816.386a3.95 3.95 0 0 1-1.059.132 4.01 4.01 0 0 1-1.04-.137 3.16 3.16 0 0 1-.933-.425 2.138 2.138 0 0 1-.664-.723c-.166-.293-.249-.64-.249-1.04h1.47c0 .222.034.409.102.562a.95.95 0 0 0 .288.371c.127.094.277.163.449.205.176.042.368.064.577.064.254 0 .462-.036.625-.108a.77.77 0 0 0 .366-.298.782.782 0 0 0 .122-.43Zm8.301-1.86v.336c0 .54-.074 1.026-.22 1.455a3.19 3.19 0 0 1-.62 1.099 2.69 2.69 0 0 1-.957.688c-.368.16-.777.24-1.226.24-.446 0-.854-.08-1.225-.24a2.743 2.743 0 0 1-.957-.688 3.192 3.192 0 0 1-.63-1.099 4.48 4.48 0 0 1-.22-1.455v-.337c0-.543.073-1.028.22-1.455a3.19 3.19 0 0 1 .62-1.098c.27-.303.589-.534.957-.694.371-.16.78-.239 1.225-.239.45 0 .858.08 1.226.24.371.159.69.39.957.693.27.302.479.669.625 1.098.15.427.225.912.225 1.455Zm-1.48.336v-.346c0-.378-.034-.71-.102-.997a2.182 2.182 0 0 0-.303-.722 1.311 1.311 0 0 0-.488-.44 1.398 1.398 0 0 0-.66-.151c-.247 0-.467.05-.659.151-.188.098-.35.245-.483.44-.13.195-.23.436-.298.722a4.342 4.342 0 0 0-.102.996v.347c0 .375.034.707.102.996.068.287.169.53.303.728.133.195.296.343.488.444.192.101.412.151.659.151.248 0 .467-.05.659-.15.192-.102.354-.25.484-.445.13-.199.229-.441.298-.728.068-.29.102-.621.102-.996Zm6.46-3.725h1.46v4.697c0 .547-.117 1.007-.351 1.382a2.175 2.175 0 0 1-.962.845c-.407.188-.876.283-1.407.283-.53 0-1.002-.095-1.416-.283a2.196 2.196 0 0 1-.966-.845c-.232-.375-.347-.835-.347-1.382V35.89h1.465v4.697c0 .319.05.58.151.781a.96.96 0 0 0 .435.444c.192.095.418.142.678.142.267 0 .494-.047.679-.142a.936.936 0 0 0 .43-.444c.101-.202.151-.462.151-.781V35.89Zm8.452 0V43h-1.465l-2.856-4.766V43h-1.465v-7.11h1.465l2.861 4.771v-4.77h1.46ZM211.526 43h-1.547l.009-1.143h1.538c.384 0 .708-.086.972-.258.264-.176.462-.432.596-.767.136-.335.205-.74.205-1.216v-.346c0-.365-.039-.686-.117-.962a1.927 1.927 0 0 0-.337-.699 1.413 1.413 0 0 0-.552-.424 1.823 1.823 0 0 0-.752-.147h-1.592v-1.147h1.592c.475 0 .91.081 1.304.244.397.16.74.389 1.03.688.29.3.513.658.669 1.075.159.413.239.873.239 1.381v.337c0 .505-.08.965-.239 1.382a2.967 2.967 0 0 1-1.699 1.763 3.51 3.51 0 0 1-1.319.239Zm-.717-7.11V43h-1.465v-7.11h1.465ZM57.475 39.28v.336c0 .54-.074 1.026-.22 1.455a3.2 3.2 0 0 1-.62 1.099c-.267.3-.586.529-.957.688-.368.16-.777.24-1.226.24-.446 0-.854-.08-1.225-.24a2.746 2.746 0 0 1-.957-.688 3.218 3.218 0 0 1-.63-1.099 4.497 4.497 0 0 1-.22-1.455v-.337c0-.543.073-1.028.22-1.455.146-.43.353-.796.62-1.098.27-.303.589-.534.957-.694.37-.16.78-.239 1.225-.239.45 0 .858.08 1.226.24.371.159.69.39.957.693.27.302.478.669.625 1.098.15.427.225.912.225 1.455Zm-1.48.336v-.346c0-.378-.034-.71-.102-.997a2.16 2.16 0 0 0-.303-.722 1.307 1.307 0 0 0-.488-.44 1.396 1.396 0 0 0-.66-.151c-.247 0-.467.05-.659.151a1.32 1.32 0 0 0-.483.44c-.13.195-.23.436-.298.722a4.318 4.318 0 0 0-.103.996v.347c0 .375.035.707.103.996.068.287.17.53.303.728.133.195.296.343.488.444.192.101.412.151.66.151.246 0 .466-.05.658-.15.192-.102.354-.25.484-.445.13-.199.23-.441.298-.728.068-.29.102-.621.102-.996Zm8.32-3.725V43h-1.464l-2.857-4.766V43H58.53v-7.11h1.465l2.861 4.771v-4.77h1.46Zm4.224 0-2.607 7.72h-1.045l2.607-7.72h1.045Zm6.602 3.388v.337c0 .54-.074 1.026-.22 1.455a3.2 3.2 0 0 1-.62 1.099c-.267.3-.586.529-.957.688a3.05 3.05 0 0 1-1.226.24c-.446 0-.854-.08-1.225-.24a2.746 2.746 0 0 1-.957-.688 3.218 3.218 0 0 1-.63-1.099 4.494 4.494 0 0 1-.22-1.455v-.337c0-.543.073-1.028.22-1.455.146-.43.353-.796.62-1.098.27-.303.589-.534.957-.694.37-.16.78-.239 1.225-.239.45 0 .858.08 1.226.24.371.159.69.39.957.693.27.302.478.669.625 1.098.15.427.225.912.225 1.455Zm-1.48.337v-.346c0-.378-.034-.71-.102-.997a2.161 2.161 0 0 0-.303-.722 1.308 1.308 0 0 0-.488-.44 1.396 1.396 0 0 0-.66-.151c-.247 0-.467.05-.659.151a1.32 1.32 0 0 0-.483.44c-.13.195-.23.436-.298.722a4.318 4.318 0 0 0-.103.996v.347c0 .375.035.707.103.996.068.287.17.53.303.728.133.195.296.343.488.444.192.101.412.151.66.151.247 0 .466-.05.658-.15.192-.102.353-.25.484-.445.13-.199.23-.441.298-.728.068-.29.102-.621.102-.996Zm4-3.725V43h-1.466v-7.11h1.465Zm2.831 3.037v1.142H77.26v-1.142h3.232Zm.342-3.037v1.147H77.26v-1.147h3.574Zm2.314 0V43h-1.464v-7.11h1.464Zm2.833 3.037v1.142h-3.233v-1.142h3.233Zm.341-3.037v1.147h-3.574v-1.147h3.574ZM263.635 164.891h2.651c.544 0 1.011.081 1.402.244.393.163.696.403.908.722.211.319.317.712.317 1.177 0 .381-.065.708-.195.982-.127.27-.308.496-.542.678a2.799 2.799 0 0 1-.816.43l-.464.244h-2.304l-.01-1.142h1.714c.257 0 .47-.046.64-.137a.89.89 0 0 0 .38-.381c.088-.163.132-.352.132-.566 0-.228-.042-.425-.127-.591a.855.855 0 0 0-.385-.381 1.425 1.425 0 0 0-.65-.132H265.1V172h-1.465v-7.109Zm3.974 7.109-1.621-3.169 1.548-.01 1.641 3.111V172h-1.568Zm8.272-3.721v.337c0 .541-.073 1.026-.22 1.455-.146.43-.353.796-.62 1.099a2.688 2.688 0 0 1-.957.688 3.04 3.04 0 0 1-1.226.24 3.06 3.06 0 0 1-1.225-.24 2.742 2.742 0 0 1-.957-.688 3.226 3.226 0 0 1-.63-1.099 4.474 4.474 0 0 1-.22-1.455v-.337c0-.543.073-1.028.22-1.455.146-.429.353-.796.62-1.098a2.72 2.72 0 0 1 .957-.694c.371-.159.78-.239 1.226-.239.449 0 .857.08 1.225.239.371.16.69.391.957.694.27.302.479.669.625 1.098.15.427.225.912.225 1.455Zm-1.48.337v-.346c0-.378-.034-.71-.102-.997a2.159 2.159 0 0 0-.303-.722 1.302 1.302 0 0 0-.488-.44 1.395 1.395 0 0 0-.659-.151 1.4 1.4 0 0 0-.66.151 1.327 1.327 0 0 0-.483.44c-.13.195-.229.436-.298.722a4.35 4.35 0 0 0-.102.997v.346c0 .375.034.707.102.996.069.287.169.529.303.728.133.195.296.343.488.444.192.101.412.152.659.152.248 0 .468-.051.66-.152s.353-.249.483-.444c.13-.199.229-.441.298-.728.068-.289.102-.621.102-.996Zm5.381-3.725V172h-1.46v-7.109h1.46Zm2.188 0v1.147h-5.801v-1.147h5.801Zm3.198 1.215L283.234 172h-1.557l2.641-7.109h.992l-.142 1.215Zm1.606 5.894-1.938-5.894-.156-1.215h1.001l2.656 7.109h-1.563Zm-.087-2.646v1.147h-3.755v-1.147h3.755Zm4.882-4.463V172h-1.46v-7.109h1.46Zm2.188 0v1.147h-5.801v-1.147h5.801Zm5.605 5.966V172h-3.784v-1.143h3.784Zm-3.305-5.966V172h-1.465v-7.109h1.465Zm2.812 2.895v1.113h-3.291v-1.113h3.291Zm.488-2.895v1.147h-3.779v-1.147h3.779ZM115.635 152.891h2.651c.544 0 1.011.081 1.402.244.393.163.696.403.908.722.211.319.317.712.317 1.177 0 .381-.065.708-.195.982-.127.27-.308.496-.542.678a2.799 2.799 0 0 1-.816.43l-.464.244h-2.304l-.01-1.142h1.714c.257 0 .47-.046.64-.137a.89.89 0 0 0 .38-.381c.088-.163.132-.352.132-.566 0-.228-.042-.425-.127-.591a.855.855 0 0 0-.385-.381 1.425 1.425 0 0 0-.65-.132H117.1V160h-1.465v-7.109Zm3.974 7.109-1.621-3.169 1.548-.01 1.641 3.111V160h-1.568Zm3.99-7.109V160h-1.46v-7.109h1.46Zm7.006 3.393v2.818a2.45 2.45 0 0 1-.512.434 3.434 3.434 0 0 1-.894.396c-.364.11-.805.166-1.323.166-.459 0-.877-.075-1.255-.225a2.702 2.702 0 0 1-.976-.669 2.998 2.998 0 0 1-.625-1.074 4.472 4.472 0 0 1-.22-1.46v-.444c0-.547.07-1.034.21-1.46a3.01 3.01 0 0 1 .61-1.079c.264-.293.578-.516.942-.669.365-.153.77-.23 1.216-.23.619 0 1.127.101 1.524.303.397.198.7.475.908.83.212.351.342.755.391 1.211h-1.421a1.818 1.818 0 0 0-.205-.63 1.061 1.061 0 0 0-.435-.42c-.186-.101-.426-.151-.723-.151a1.295 1.295 0 0 0-1.132.586 2.14 2.14 0 0 0-.298.712 4.203 4.203 0 0 0-.103.987v.454c0 .371.036.7.108.986.071.283.177.523.317.718.143.192.319.337.527.435.209.097.451.146.728.146.231 0 .423-.019.576-.059.156-.039.282-.086.376-.141.098-.059.173-.114.225-.166v-1.26h-1.338v-1.045h2.802Zm5.923-.498v1.143h-3.711v-1.143h3.711Zm-3.276-2.895V160h-1.465v-7.109h1.465Zm4.321 0V160h-1.46v-7.109h1.46Zm4.307 0V160h-1.46v-7.109h1.46Zm2.187 0v1.147h-5.8v-1.147h5.8ZM66.817 205H65.27l.01-1.143h1.537c.385 0 .708-.086.972-.258.264-.176.462-.432.596-.767.136-.335.205-.741.205-1.216v-.346a3.55 3.55 0 0 0-.117-.962 1.915 1.915 0 0 0-.337-.699 1.41 1.41 0 0 0-.552-.424 1.818 1.818 0 0 0-.752-.147H65.24v-1.147h1.592c.475 0 .91.081 1.304.244.397.159.74.389 1.03.688.29.3.513.658.669 1.074.16.414.24.874.24 1.382v.337c0 .505-.08.965-.24 1.382a3.07 3.07 0 0 1-.669 1.074c-.286.296-.63.526-1.03.689a3.517 3.517 0 0 1-1.319.239Zm-.717-7.109V205h-1.465v-7.109H66.1Zm10.879 3.388v.337c0 .541-.074 1.026-.22 1.455-.147.43-.353.796-.62 1.099a2.688 2.688 0 0 1-.957.688 3.04 3.04 0 0 1-1.226.24c-.446 0-.854-.08-1.225-.24a2.745 2.745 0 0 1-.958-.688 3.22 3.22 0 0 1-.63-1.099 4.488 4.488 0 0 1-.22-1.455v-.337c0-.543.074-1.028.22-1.455.147-.429.354-.796.62-1.098.27-.303.59-.534.958-.694a3.08 3.08 0 0 1 1.225-.239c.45 0 .858.08 1.226.239.371.16.69.391.957.694.27.302.478.669.625 1.098.15.427.224.912.224 1.455Zm-1.48.337v-.346c0-.378-.034-.71-.102-.997a2.159 2.159 0 0 0-.303-.722 1.306 1.306 0 0 0-.488-.44 1.395 1.395 0 0 0-.66-.151c-.247 0-.467.05-.659.151-.189.098-.35.244-.483.44-.13.195-.23.436-.298.722a4.326 4.326 0 0 0-.103.997v.346c0 .375.034.707.103.996.068.287.17.529.303.728.133.195.296.343.488.444.192.101.412.152.66.152.247 0 .466-.051.658-.152s.353-.249.484-.444c.13-.199.23-.441.297-.728.069-.289.103-.621.103-.996Zm4.248 2.256 1.416-5.981h.791l.18.996L80.627 205h-.85l-.029-1.128Zm-.728-5.981 1.172 5.981-.097 1.128h-.947l-1.578-7.109h1.45Zm4.36 5.957 1.158-5.957h1.45L84.415 205h-.947l-.088-1.152Zm-.98-5.957 1.425 6.005-.039 1.104h-.85l-1.518-6.118.195-.991h.786Zm10.17 0V205h-1.465l-2.856-4.766V205h-1.465v-7.109h1.465l2.861 4.77v-4.77h1.46ZM21.205 158.857V160h-3.579v-1.143h3.58Zm-3.105-5.966V160h-1.465v-7.109H18.1Zm8.715 5.966V160h-3.784v-1.143h3.784Zm-3.305-5.966V160h-1.465v-7.109h1.465Zm2.812 2.895v1.113h-3.29v-1.113h3.29Zm.489-2.895v1.147h-3.78v-1.147h3.78Zm2.324 0V160H27.67v-7.109h1.465Zm2.832 3.037v1.142h-3.233v-1.142h3.233Zm.342-3.037v1.147h-3.575v-1.147h3.575Zm4.126 0V160h-1.46v-7.109h1.46Zm2.187 0v1.147h-5.8v-1.147h5.8Z"
      />
      {/*<defs>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__a"*/}
      {/*    width={76}*/}
      {/*    height={76}*/}
      {/*    x={245}*/}
      {/*    y={86}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__b"*/}
      {/*    width={36}*/}
      {/*    height={36}*/}
      {/*    x={52}*/}
      {/*    y={0}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__c"*/}
      {/*    width={36}*/}
      {/*    height={36}*/}
      {/*    x={117}*/}
      {/*    y={0}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__d"*/}
      {/*    width={36}*/}
      {/*    height={36}*/}
      {/*    x={182}*/}
      {/*    y={0}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__e"*/}
      {/*    width={36}*/}
      {/*    height={36}*/}
      {/*    x={247}*/}
      {/*    y={0}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__f"*/}
      {/*    width={58}*/}
      {/*    height={58}*/}
      {/*    x={51}*/}
      {/*    y={47}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__g"*/}
      {/*    width={58}*/}
      {/*    height={58}*/}
      {/*    x={102}*/}
      {/*    y={95}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__h"*/}
      {/*    width={58}*/}
      {/*    height={58}*/}
      {/*    x={51}*/}
      {/*    y={141}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*  <filter*/}
      {/*    id="BrickGameControls__i"*/}
      {/*    width={58}*/}
      {/*    height={58}*/}
      {/*    x={0}*/}
      {/*    y={94}*/}
      {/*    colorInterpolationFilters="sRGB"*/}
      {/*    filterUnits="userSpaceOnUse"*/}
      {/*  >*/}
      {/*    <feFlood floodOpacity={0} result="BackgroundImageFix" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="effect1_dropShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={0.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />*/}
      {/*    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_1339" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" operator="dilate" radius={3} result="effect2_dropShadow_12_1339" />*/}
      {/*    <feOffset dx={1} dy={1} />*/}
      {/*    <feGaussianBlur stdDeviation={1.5} />*/}
      {/*    <feComposite in2="hardAlpha" operator="out" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />*/}
      {/*    <feBlend in2="effect1_dropShadow_12_1339" result="effect2_dropShadow_12_1339" />*/}
      {/*    <feBlend in="SourceGraphic" in2="effect2_dropShadow_12_1339" result="shape" />*/}
      {/*    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />*/}
      {/*    <feMorphology in="SourceAlpha" radius={6} result="effect3_innerShadow_12_1339" />*/}
      {/*    <feOffset />*/}
      {/*    <feGaussianBlur stdDeviation={5} />*/}
      {/*    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />*/}
      {/*    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.862745 0 0 0 0 0.392157 0 0 0 1 0" />*/}
      {/*    <feBlend in2="shape" result="effect3_innerShadow_12_1339" />*/}
      {/*  </filter>*/}
      {/*</defs>*/}
    </svg>
  )
}
