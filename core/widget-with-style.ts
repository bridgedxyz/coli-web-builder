import { Widget } from "./widget";
import { css, JSXElementLike } from "coli";

/**
 * Since html based framework's widget can be represented withou any style definition, this WidgetWithStyle class indicates, that the sub instance of this class will contain style data within it.
 */
export abstract class WidgetWithStyle extends Widget {
  abstract buildStyle(): css.CSSStyleDeclaration;

  abstract buildJsx(): JSXElementLike;
}
