# ServiceFiji


```text
azure-11/Item/NewIcons/ServiceFiji
```

```text
include('azure-11/Item/NewIcons/ServiceFiji')
```



| Illustration | ServiceFiji | ServiceFijiCard | ServiceFijiGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/NewIcons/ServiceFiji.png) | ![illustration for ServiceFiji](../../../azure-11/Item/NewIcons/ServiceFiji.Local.png) | ![illustration for ServiceFijiCard](../../../azure-11/Item/NewIcons/ServiceFijiCard.Local.png) | ![illustration for ServiceFijiGroup](../../../azure-11/Item/NewIcons/ServiceFijiGroup.Local.png) |




## ServiceFiji

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceFiji
include('azure-11/Item/NewIcons/ServiceFiji')

' renders the element
ServiceFiji('ServiceFiji', 'Service Fiji', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceFiji
include('azure-11/Item/NewIcons/ServiceFiji')

' renders the element
ServiceFiji('ServiceFiji', 'Service Fiji', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceFijiCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceFijiCard
include('azure-11/Item/NewIcons/ServiceFiji')

' renders the element
ServiceFijiCard('ServiceFijiCard', 'Service Fiji Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceFijiCard
include('azure-11/Item/NewIcons/ServiceFiji')

' renders the element
ServiceFijiCard('ServiceFijiCard', 'Service Fiji Card', 'an optional description')
@enduml
```

## ServiceFijiGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceFijiGroup
include('azure-11/Item/NewIcons/ServiceFiji')

' renders the element
ServiceFijiGroup('ServiceFijiGroup', 'Service Fiji Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceFijiGroup
include('azure-11/Item/NewIcons/ServiceFiji')

' renders the element
ServiceFijiGroup('ServiceFijiGroup', 'Service Fiji Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

