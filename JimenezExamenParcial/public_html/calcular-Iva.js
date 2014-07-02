Ext.application({
   
  name:"cal-iva",
  launch:function(){
      Ext.Msg.confirm('calculando iva');
Ext.create('Ext.TabPanel',{
    fullscreen:true,
    tabBarPosition:'bottom',
    items:[Formulario1
        
           /* {
                title:'IVA',
                iconCls:'user',
                html:'Calcular '
                
            }*/,
            {
                title:'ISR',
                iconCls:'composer',
               html:'Calculo'
               
            }
        
    ]
});
  }
});

var Formulario1={
    xtype:'fieldset',
    title:'CALCULAR IVA',
    iconCls:'user',
    items:[
          {
 
            html:['<center><h1>Calculo de Iva</h1>',
                '<br>',
            '<p>Introduce lo Datos</p>',
            '</center>'].join('')
          },
          {
              xtype:'textfield',
                id:'textogrados',
                 placeHolder:'IVA'
               
               
             },
             {
              xtype:'retencion',
                id:'iva',
                 placeHolder:'Retencion IVA'
               
                 
             },
             {
              xtype:'textfield',
                id:'textogrados',
                 placeHolder:'ISR'
               
                 
             },
             {
              xtype:'textfield',
                id:'textogrados',
                 placeHolder:'Total a Pagar'
               
                 
             },
          
             {
          xtype:'button',
          text:'Hacer calculo',
         ui:'confirm',
         handler:function (){
             var g= Ext.getCmp('textogrados').getValue();
             var res=(g-32)/1.8;
          Ext.Msg.alert("Resusltado"+res);
          }
         }
          ]
    }
