import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ALL_COMPONENTS } from '../config/content';

describe('Smoke test de componentes del catálogo', () => {
  ALL_COMPONENTS.forEach(({ name, component: Component, props = {}, content }) => {
    it(`renderiza correctamente: ${name}`, () => {
      expect(() => {
        if (content?.length) {
          render(
            <Component data={props}>
              {content.map((child, i) => (
                <child.component key={i} data={child.props} />
              ))}
            </Component>
          );
        } else {
          render(<Component data={props} />);
        }
      }).not.toThrow();
    });
  });
});
