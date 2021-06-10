# IoTThingCoffeePot


```text
aws-20210131/Resource/LoT/IoTThingCoffeePot
```

```text
include('aws-20210131/Resource/LoT/IoTThingCoffeePot')
```



| Illustration | IoTThingCoffeePot | IoTThingCoffeePotCard | IoTThingCoffeePotGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTThingCoffeePot.png) | ![illustration for IoTThingCoffeePot](../../../aws-20210131/Resource/LoT/IoTThingCoffeePot.Local.png) | ![illustration for IoTThingCoffeePotCard](../../../aws-20210131/Resource/LoT/IoTThingCoffeePotCard.Local.png) | ![illustration for IoTThingCoffeePotGroup](../../../aws-20210131/Resource/LoT/IoTThingCoffeePotGroup.Local.png) |




## IoTThingCoffeePot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCoffeePot
include('aws-20210131/Resource/LoT/IoTThingCoffeePot')

' renders the element
IoTThingCoffeePot('IoTThingCoffeePot', 'Io T Thing Coffee Pot', 'an optional tech label')
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

' loads the Item which embeds the element IoTThingCoffeePot
include('aws-20210131/Resource/LoT/IoTThingCoffeePot')

' renders the element
IoTThingCoffeePot('IoTThingCoffeePot', 'Io T Thing Coffee Pot', 'an optional tech label')
@enduml
```

## IoTThingCoffeePotCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCoffeePotCard
include('aws-20210131/Resource/LoT/IoTThingCoffeePot')

' renders the element
IoTThingCoffeePotCard('IoTThingCoffeePotCard', 'Io T Thing Coffee Pot Card', 'an optional description')
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

' loads the Item which embeds the element IoTThingCoffeePotCard
include('aws-20210131/Resource/LoT/IoTThingCoffeePot')

' renders the element
IoTThingCoffeePotCard('IoTThingCoffeePotCard', 'Io T Thing Coffee Pot Card', 'an optional description')
@enduml
```

## IoTThingCoffeePotGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCoffeePotGroup
include('aws-20210131/Resource/LoT/IoTThingCoffeePot')

' renders the element
IoTThingCoffeePotGroup('IoTThingCoffeePotGroup', 'Io T Thing Coffee Pot Group', 'an optional tech label') {
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

' loads the Item which embeds the element IoTThingCoffeePotGroup
include('aws-20210131/Resource/LoT/IoTThingCoffeePot')

' renders the element
IoTThingCoffeePotGroup('IoTThingCoffeePotGroup', 'Io T Thing Coffee Pot Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

