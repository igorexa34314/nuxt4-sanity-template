import { SanityEmailLink, SanityExternalLink } from '#components';
import type { ArbitraryTypedObject } from '@portabletext/types';
import type {
  PortableTextMarkComponentProps,
  PortableTextVueComponents,
} from '@portabletext/vue';

// https://sanity.nuxtjs.org/helpers/portable-text
export const components = {
  block: {
    h2: (_, { slots }) => h('h2', { class: tw`` }, slots.default?.()),
    h3: (_, { slots }) => h('h3', { class: tw`` }, slots.default?.()),
    blockquote: (_, { slots }) =>
      h('blockquote', { class: tw`` }, slots.default?.()),
    normal: (_, { slots }) => h('p', { class: tw`` }, slots.default?.()),
  },
  marks: {
    externalLink: (
      props: PortableTextMarkComponentProps<ArbitraryTypedObject>
    ) =>
      h(
        SanityExternalLink,
        { href: props.value?.href, blank: props.value?.blank },
        () => props.text
      ),
    emailLink: (props: PortableTextMarkComponentProps<ArbitraryTypedObject>) =>
      h(
        SanityEmailLink,
        {
          email: props.value?.email,
          tabindex: props.value?.tabindex,
          subject: props.value?.subject,
          body: props.value?.body,
        },
        () => props.text
      ),
  },
} satisfies Partial<PortableTextVueComponents>;
