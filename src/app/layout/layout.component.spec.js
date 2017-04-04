describe('layoutComponent', () => {

    let $componentController, layoutCtrl;

    beforeEach(angular.mock.module('appModule'));

    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    beforeEach(inject(function(_monstersService_) {
        layoutCtrl = $componentController('layout');
    }));


    it('should define app meta data object', () => {
        expect(layoutCtrl.siteMeta).toBeDefined();
    });

    it('should define app menu object', () => {
        expect(layoutCtrl.menuItems).toBeDefined();
    });

});
