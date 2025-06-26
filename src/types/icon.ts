import * as Icons from '@_assets/icon/index';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  name: keyof typeof Icons;
  size?: number;
};
