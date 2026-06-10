import { ContentIndex } from "./emitters/contentIndex"
import { Assets } from "./transformers/assets"
import { Citations } from "./transformers/citations"
import { ComponentResources } from "./transformers/componentResources"
import { Components } from "./transformers/components"
import { Description } from "./transformers/description"
import { FrontMatter } from "./transformers/frontmatter"
import { HardLineBreaks } from "./transformers/hardLineBreaks"
import { Latex } from "./transformers/latex"
import { LinkHeader } from "./transformers/linkHeader"
import { Links } from "./transformers/links"
import { OgImages } from "./transformers/ogImages"
import { OxHugoFlavouredMarkdown } from "./transformers/oxHugoFlavouredMarkdown"
import { RemoveSlugs } from "./transformers/removeSlugs"
import { ReplaceNoOp } from "./transformers/replaceNoOp"
import { SyntaxHighlighting } from "./transformers/syntaxHighlighting"
import { TableOfContents } from "./transformers/tableOfContents"

export const DefaultPlugins = {
  transformers: [
    FrontMatter(),
    TableOfContents(),
    SyntaxHighlighting(),
    HardLineBreaks(),
    Citations(),
    Links(),
    Assets(),
    ComponentResources(),
    Components(),
    ReplaceNoOp(),
    RemoveSlugs(),
    OxHugoFlavouredMarkdown(),
    Latex(),
    Description(),
    OgImages(),
  ],
  emitters: [
    ContentIndex(),
  ],
}
