// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fTpp9TdskcrT9eGBiGnDc
// Component: RCa2XrCsBn6HJ
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: FbOBEQJq7Ab7Q/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: QLVoe6STn7lwP0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: fTpp9TdskcrT9eGBiGnDc/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: RCa2XrCsBn6HJ/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: 45ZeDB9CczM-f9/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: jckVWeshynk0e3/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: uYizfuIxOFDHFg/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: -t8i0BuCS7t_yx/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  dataFetches?: PlasmicFooter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box___3JiRt)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___1PMwz)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__a9Qz)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__rMOk)}
            icon={
              <LogoIcon
                className={classNames(defaultcss.all, sty.svg___0K9Dg)}
                role={"img"}
              />
            }
          />

          <div className={classNames(defaultcss.all, sty.box__eU466)}>
            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___0X9EY
              )}
              href={"#" as const}
            >
              {"Terms"}
            </a>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__lpcOw
              )}
            >
              {" ?? "}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___52UPl
              )}
              href={"#" as const}
            >
              {"Privacy"}
            </a>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ogkMm)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__y6K)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__rfUay
              )}
            >
              {"Products"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__x0Tm5
              )}
              href={"#" as const}
            >
              {"Web Studio"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__lBoRl
              )}
              href={"#" as const}
            >
              {"DynamicBox Flex"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___9Xub
              )}
              href={"#" as const}
            >
              {"Programming Forms"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___6Ojbw
              )}
              href={"#" as const}
            >
              {"Integrations"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__mIdtD
              )}
              href={"#" as const}
            >
              {"Command-line"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__st2Kx)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___7D3C
              )}
            >
              {"Resources"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__aTvEo
              )}
              href={"#" as const}
            >
              {"Documentation"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__akjbh
              )}
              href={"#" as const}
            >
              {"Tutorials & Guides"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__gt2Oq
              )}
              href={"#" as const}
            >
              {"Blog"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__yoo2P
              )}
              href={"#" as const}
            >
              {"Support Center"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__z4H2
              )}
              href={"#" as const}
            >
              {"Partners"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__my9PE)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__egZ1M
              )}
            >
              {"Company"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__z6NNh
              )}
              href={"#" as const}
            >
              {"Home"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___22ChM
              )}
              href={"#" as const}
            >
              {"About us"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___7BQlc
              )}
              href={"#" as const}
            >
              {"Company values"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__mqzI8
              )}
              href={"#" as const}
            >
              {"Pricing"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___3FUwe
              )}
              href={"#" as const}
            >
              {"Privacy policy"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__a7SKr)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__aiTjF
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__aREzz
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <div className={classNames(defaultcss.all, sty.box__zHpqm)}>
              <input
                data-plasmic-name={"textbox"}
                data-plasmic-override={overrides.textbox}
                className={classNames(defaultcss.input, sty.textbox)}
                placeholder={"Your email" as const}
                size={1 as const}
                type={"text" as const}
                value={"" as const}
              />

              <button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames(
                  defaultcss.button,
                  defaultcss.__wab_text,
                  sty.button
                )}
              >
                {">"}
              </button>
            </div>
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__kUxGg)} />

      <p.Stack
        as={"div"}
        hasGap={hasVariant(globalVariants, "screen", "mobile") ? true : false}
        className={classNames(defaultcss.all, sty.box___0Yr7X)}
      >
        <div className={classNames(defaultcss.all, sty.box__nspVc)}>
          <a
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__lsav3
            )}
            href={"https://cruip.com/" as const}
          >
            {"Designed by Cruip. "}
          </a>

          <a
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__rGtHs
            )}
            href={"https://www.plasmic.app/" as const}
          >
            {"Built in Plasmic. "}
          </a>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__ovQm
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__uOj1K)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__aU11M)}
            icon={
              <TwitterIconIcon
                className={classNames(defaultcss.all, sty.svg__nPeP)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink___9OSv8)}
            icon={
              <GithubIconIcon
                className={classNames(defaultcss.all, sty.svg__hVbs)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__qwCak)}
            icon={
              <FacebookIconIcon
                className={classNames(defaultcss.all, sty.svg___1Qaog)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFooter__Fetches;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
