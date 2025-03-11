import { toast } from 'sonner';

export const TestComponent = () => {
  return (
    <button onClick={() => toast.success('Test message')}>Show Toast</button>
  );
};
