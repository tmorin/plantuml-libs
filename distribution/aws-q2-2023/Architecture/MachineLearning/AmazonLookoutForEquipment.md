# AmazonLookoutForEquipment


```text
aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment
```

```text
include('aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment')
```



| Illustration | AmazonLookoutForEquipment | AmazonLookoutForEquipmentCard | AmazonLookoutForEquipmentGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment.png) | ![illustration for AmazonLookoutForEquipment](../../../aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment.Local.png) | ![illustration for AmazonLookoutForEquipmentCard](../../../aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipmentCard.Local.png) | ![illustration for AmazonLookoutForEquipmentGroup](../../../aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipmentGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonLookoutForEquipmentXs>`
- `<$AmazonLookoutForEquipmentSm>`
- `<$AmazonLookoutForEquipmentMd>`
- `<$AmazonLookoutForEquipmentLg>`





## AmazonLookoutForEquipment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonLookoutForEquipment
include('aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment')

' renders the element
AmazonLookoutForEquipment('AmazonLookoutForEquipment', 'Amazon Lookout For Equipment', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonLookoutForEquipment
include('aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment')

' renders the element
AmazonLookoutForEquipment('AmazonLookoutForEquipment', 'Amazon Lookout For Equipment', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonLookoutForEquipmentCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonLookoutForEquipmentCard
include('aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment')

' renders the element
AmazonLookoutForEquipmentCard('AmazonLookoutForEquipmentCard', 'Amazon Lookout For Equipment Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonLookoutForEquipmentCard
include('aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment')

' renders the element
AmazonLookoutForEquipmentCard('AmazonLookoutForEquipmentCard', 'Amazon Lookout For Equipment Card', 'an optional description')
@enduml
```

## AmazonLookoutForEquipmentGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonLookoutForEquipmentGroup
include('aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment')

' renders the element
AmazonLookoutForEquipmentGroup('AmazonLookoutForEquipmentGroup', 'Amazon Lookout For Equipment Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonLookoutForEquipmentGroup
include('aws-q2-2023/Architecture/MachineLearning/AmazonLookoutForEquipment')

' renders the element
AmazonLookoutForEquipmentGroup('AmazonLookoutForEquipmentGroup', 'Amazon Lookout For Equipment Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

