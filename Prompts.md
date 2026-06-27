# AI Debugging & Learning Sessions (Prompts.md)

As per the corporate "Learn, Don't Copy" mandate, this document records my AI debugging and architecture consultation sessions.

## Session 1: React Hook Form & Conditional Button Disabling

**Context**: Moving from `useState` to React Hook Form (RHF) meant that inputs were no longer driving state-based re-renders, causing my "Next" button validation logic to become stale.

**My Prompt to AI**:
> "I migrated my multi-step React form to `react-hook-form` and `zod`. In my `App.tsx`, I want the 'Next' button to be disabled if the current step's fields have validation errors or are empty. But since RHF is uncontrolled, the component doesn't re-render on keystrokes, so my `disabled` attribute doesn't update dynamically. How do I fix this?"

**AI Explanation Summary**:
The AI explained that uncontrolled components inherently do not re-render the parent component. To achieve dynamic validation checks for the button, I need to explicitly subscribe to form state changes. The AI suggested using the `watch()` method from RHF, which subscribes the component to input changes and triggers a re-render when the form's watched values change.

**My Implementation**:
I destructured `watch` and `getValues` from `methods`. I invoked `watch()` at the top level of `App.tsx` so the component updates whenever a value changes. Then, in my `canGoNext` function, I checked both the `errors` object and `getValues()` to ensure fields weren't empty or invalid, seamlessly bridging uncontrolled performance with a reactive UI.

---

## Session 2: Zod Cross-Field Validation

**Context**: Validating `password` and `confirmPassword` against each other in Phase 2.

**My Prompt to AI**:
> "How do I ensure that a 'confirmPassword' field exactly matches the 'password' field using Zod? I have an object schema with `password` and `confirmPassword` strings."

**AI Explanation Summary**:
The AI instructed me to use Zod's `.refine()` method on the overall object schema rather than the individual string field. This is because cross-field validation requires access to the entire object payload. It provided a snippet showing `.refine((data) => data.password === data.confirmPassword)`.

**My Implementation**:
I applied `.refine()` to my `z.object` in `schema.ts`, adding a custom error message and setting the `path` to `['confirmPassword']` so that the validation error specifically attaches to the second input field, correctly rendering the UI error state beneath the confirm password box.

---

## Session 3: Framer Motion Unmounting

**Context**: Adding smooth animations between Step 1, 2, and 3.

**My Prompt to AI**:
> "I'm using conditional rendering for my form steps: `{step === 1 && <StepOne/>}`. I want them to slide in and out. I installed `framer-motion` and wrapped them in `<motion.div>`, but they just disappear instantly instead of sliding out when `step` changes."

**AI Explanation Summary**:
The AI explained that React immediately unmounts components when the condition becomes false, destroying the DOM node before Framer Motion has a chance to play the exit animation. I needed to wrap the entire conditional block in `<AnimatePresence mode="wait">` and ensure each `<motion.div>` has a unique `key` prop.

**My Implementation**:
I wrapped the step components inside `<AnimatePresence mode="wait">` and added distinct `key="step1"`, `key="step2"`, etc., props to the `motion.div` containers. The transitions now feel perfectly native and polished.
