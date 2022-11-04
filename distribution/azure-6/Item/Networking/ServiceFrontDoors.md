# ServiceFrontDoors


```text
azure-6/Item/Networking/ServiceFrontDoors
```

```text
include('azure-6/Item/Networking/ServiceFrontDoors')
```



| Illustration | ServiceFrontDoors | ServiceFrontDoorsCard | ServiceFrontDoorsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/Networking/ServiceFrontDoors.png) | ![illustration for ServiceFrontDoors](../../../azure-6/Item/Networking/ServiceFrontDoors.Local.png) | ![illustration for ServiceFrontDoorsCard](../../../azure-6/Item/Networking/ServiceFrontDoorsCard.Local.png) | ![illustration for ServiceFrontDoorsGroup](../../../azure-6/Item/Networking/ServiceFrontDoorsGroup.Local.png) |




## ServiceFrontDoors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceFrontDoors
include('azure-6/Item/Networking/ServiceFrontDoors')

' renders the element
ServiceFrontDoors('ServiceFrontDoors', 'Service Front Doors', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceFrontDoors
include('azure-6/Item/Networking/ServiceFrontDoors')

' renders the element
ServiceFrontDoors('ServiceFrontDoors', 'Service Front Doors', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceFrontDoorsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceFrontDoorsCard
include('azure-6/Item/Networking/ServiceFrontDoors')

' renders the element
ServiceFrontDoorsCard('ServiceFrontDoorsCard', 'Service Front Doors Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceFrontDoorsCard
include('azure-6/Item/Networking/ServiceFrontDoors')

' renders the element
ServiceFrontDoorsCard('ServiceFrontDoorsCard', 'Service Front Doors Card', 'an optional description')
@enduml
```

## ServiceFrontDoorsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceFrontDoorsGroup
include('azure-6/Item/Networking/ServiceFrontDoors')

' renders the element
ServiceFrontDoorsGroup('ServiceFrontDoorsGroup', 'Service Front Doors Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceFrontDoorsGroup
include('azure-6/Item/Networking/ServiceFrontDoors')

' renders the element
ServiceFrontDoorsGroup('ServiceFrontDoorsGroup', 'Service Front Doors Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

