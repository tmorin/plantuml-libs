# IoTThingBicycle


```text
aws-20210131/Resource/LoT/IoTThingBicycle
```

```text
include('aws-20210131/Resource/LoT/IoTThingBicycle')
```



| Illustration | IoTThingBicycle | IoTThingBicycleCard | IoTThingBicycleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTThingBicycle.png) | ![illustration for IoTThingBicycle](../../../aws-20210131/Resource/LoT/IoTThingBicycle.Local.png) | ![illustration for IoTThingBicycleCard](../../../aws-20210131/Resource/LoT/IoTThingBicycleCard.Local.png) | ![illustration for IoTThingBicycleGroup](../../../aws-20210131/Resource/LoT/IoTThingBicycleGroup.Local.png) |




## IoTThingBicycle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBicycle
include('aws-20210131/Resource/LoT/IoTThingBicycle')

' renders the element
IoTThingBicycle('IoTThingBicycle', 'Io T Thing Bicycle', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBicycle
include('aws-20210131/Resource/LoT/IoTThingBicycle')

' renders the element
IoTThingBicycle('IoTThingBicycle', 'Io T Thing Bicycle', 'an optional tech label')
@enduml
```

## IoTThingBicycleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBicycleCard
include('aws-20210131/Resource/LoT/IoTThingBicycle')

' renders the element
IoTThingBicycleCard('IoTThingBicycleCard', 'Io T Thing Bicycle Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBicycleCard
include('aws-20210131/Resource/LoT/IoTThingBicycle')

' renders the element
IoTThingBicycleCard('IoTThingBicycleCard', 'Io T Thing Bicycle Card', 'an optional description')
@enduml
```

## IoTThingBicycleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBicycleGroup
include('aws-20210131/Resource/LoT/IoTThingBicycle')

' renders the element
IoTThingBicycleGroup('IoTThingBicycleGroup', 'Io T Thing Bicycle Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBicycleGroup
include('aws-20210131/Resource/LoT/IoTThingBicycle')

' renders the element
IoTThingBicycleGroup('IoTThingBicycleGroup', 'Io T Thing Bicycle Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

