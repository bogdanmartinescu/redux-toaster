import ToastComponent from '../src/components/ToastComponent';

describe('\n\n ToastComponent', () => {
    it('should correctly render a toast message', () => {
        let toast = shallow(<ToastComponent content="Hello world" icon="fas fa-user" />);
        expect(toast.find('.toast-content').text()).toBe('Hello world');
    });

    it('should properly render an icon', () => {
        let toast = shallow(<ToastComponent content="Hello world" icon="fas fa-user" />);
        expect(toast.find('.toast-icon').length).toBe(1);

        toast = shallow(<ToastComponent content="Hello world" />);
        expect(toast.find('.toast-icon').length).toBe(0);
    });

    it('should have a class specific to its type', () => {
        let toast = shallow(<ToastComponent content="Hello world" type="success" />);
        expect(toast.find('.toast-item').hasClass('success')).toBe(true);
        
        toast = shallow(<ToastComponent content="Hello world" />);
        expect(toast.find('.toast-item').hasClass('neutral')).toBe(true);
    });
});