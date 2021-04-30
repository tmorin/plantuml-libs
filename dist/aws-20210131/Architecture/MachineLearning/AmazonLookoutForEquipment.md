# Amazon Lookout For Equipment

```text
aws-20210131/Architecture/MachineLearning/AmazonLookoutForEquipment
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonLookoutForEquipment')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonLookoutForEquipment.png)|![](AmazonLookoutForEquipment.card.png)|![](AmazonLookoutForEquipment.element.png)|![](AmazonLookoutForEquipment.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonLookoutForEquipment element
include('aws-20210131/Architecture/MachineLearning/AmazonLookoutForEquipment')
AmazonLookoutForEquipmentCard('amazon_lookout_for_equipment', 'Amazon Lookout For Equipment', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonLookoutForEquipment element
include('aws-20210131/Architecture/MachineLearning/AmazonLookoutForEquipment')
AmazonLookoutForEquipmentCard('amazon_lookout_for_equipment', 'Amazon Lookout For Equipment', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonLookoutForEquipment element
include('aws-20210131/Architecture/MachineLearning/AmazonLookoutForEquipment')
AmazonLookoutForEquipment('amazon_lookout_for_equipment', 'Amazon Lookout For Equipment', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonLookoutForEquipment element
include('aws-20210131/Architecture/MachineLearning/AmazonLookoutForEquipment')
AmazonLookoutForEquipment('amazon_lookout_for_equipment', 'Amazon Lookout For Equipment', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonLookoutForEquipment element
include('aws-20210131/Architecture/MachineLearning/AmazonLookoutForEquipment')
AmazonLookoutForEquipmentGroup('amazon_lookout_for_equipment', 'Amazon Lookout For Equipment', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonLookoutForEquipment element
include('aws-20210131/Architecture/MachineLearning/AmazonLookoutForEquipment')
AmazonLookoutForEquipmentGroup('amazon_lookout_for_equipment', 'Amazon Lookout For Equipment', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

