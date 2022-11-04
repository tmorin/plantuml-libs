# ServiceControls


```text
azure-6/Item/General/ServiceControls
```

```text
include('azure-6/Item/General/ServiceControls')
```



| Illustration | ServiceControls | ServiceControlsCard | ServiceControlsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/General/ServiceControls.png) | ![illustration for ServiceControls](../../../azure-6/Item/General/ServiceControls.Local.png) | ![illustration for ServiceControlsCard](../../../azure-6/Item/General/ServiceControlsCard.Local.png) | ![illustration for ServiceControlsGroup](../../../azure-6/Item/General/ServiceControlsGroup.Local.png) |




## ServiceControls

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceControls
include('azure-6/Item/General/ServiceControls')

' renders the element
ServiceControls('ServiceControls', 'Service Controls', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceControls
include('azure-6/Item/General/ServiceControls')

' renders the element
ServiceControls('ServiceControls', 'Service Controls', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceControlsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceControlsCard
include('azure-6/Item/General/ServiceControls')

' renders the element
ServiceControlsCard('ServiceControlsCard', 'Service Controls Card', 'an optional description')
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

' loads the Item which embeds the element ServiceControlsCard
include('azure-6/Item/General/ServiceControls')

' renders the element
ServiceControlsCard('ServiceControlsCard', 'Service Controls Card', 'an optional description')
@enduml
```

## ServiceControlsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceControlsGroup
include('azure-6/Item/General/ServiceControls')

' renders the element
ServiceControlsGroup('ServiceControlsGroup', 'Service Controls Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceControlsGroup
include('azure-6/Item/General/ServiceControls')

' renders the element
ServiceControlsGroup('ServiceControlsGroup', 'Service Controls Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

