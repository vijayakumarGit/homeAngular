import {
  ChangeDetectionStrategy, Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild,
  ViewContainerRef,
  Output,
  EventEmitter
} from '@angular/core';
import {
  CircleComponent, CurvedLineComponent, DashedLineComponent, LineComponent,
  WaveLineComponent
} from './all-component/all-component.component';


@Component({
  selector: 'dynamic-component',
  template: `
  <div #container></div>`,
  changeDetection:ChangeDetectionStrategy.OnPush

})

export class DynamicLoadComponent implements OnInit {

  @ViewChild('container',{read:ViewContainerRef})
  container:ViewContainerRef;

  @Input() type:string;
  @Input() props:any;
  @Input() status:string;
  @Input() shipment:string;
  @Input() complete:number;
  @Output() warning:EventEmitter<number>=new EventEmitter();
  retrundata;


  private mappings={
    'circle':CircleComponent,
    'line':LineComponent,
    'dashline':DashedLineComponent,
    'curveline':CurvedLineComponent,
    'waveline':WaveLineComponent
  }
  private componentRef: ComponentRef<{}>;
  constructor(private ComponentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
    this.createComponent();
  }
  private getComponentType(type:string){
    return this.mappings[type]
  }

  private createComponent(){
    if(this.type){
      let componentType=this.getComponentType(this.type)
      let factory=this.ComponentFactoryResolver.resolveComponentFactory(componentType)
      this.componentRef=this.container.createComponent(factory)
      let instance=<EnteryComponentModel> this.componentRef.instance
      instance.props=this.props
      instance.status=this.status
      instance.shipment=this.shipment
      instance.complete=this.complete
      // instance.warning.subscribe(data=>{
      //   this.retrundata=data
      // })
    }
  }
  ngOnDestory(){
    this.componentRef.destroy();
    this.componentRef=null;
  }

}
export class EnteryComponentModel {
  props:any;
  status:string;
  shipment:string;
  complete:number;
  warning:EventEmitter<any>
}
