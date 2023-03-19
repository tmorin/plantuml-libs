# ServiceIoTCentralApplications


```text
azure-11/Item/Iot/ServiceIoTCentralApplications
```

```text
include('azure-11/Item/Iot/ServiceIoTCentralApplications')
```



| Illustration | ServiceIoTCentralApplications | ServiceIoTCentralApplicationsCard | ServiceIoTCentralApplicationsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Iot/ServiceIoTCentralApplications.png) | ![illustration for ServiceIoTCentralApplications](../../../azure-11/Item/Iot/ServiceIoTCentralApplications.Local.png) | ![illustration for ServiceIoTCentralApplicationsCard](../../../azure-11/Item/Iot/ServiceIoTCentralApplicationsCard.Local.png) | ![illustration for ServiceIoTCentralApplicationsGroup](../../../azure-11/Item/Iot/ServiceIoTCentralApplicationsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceIoTCentralApplicationsXs>`
- `<$ServiceIoTCentralApplicationsSm>`
- `<$ServiceIoTCentralApplicationsMd>`
- `<$ServiceIoTCentralApplicationsLg>`





## ServiceIoTCentralApplications

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIoTCentralApplications
include('azure-11/Item/Iot/ServiceIoTCentralApplications')

' renders the element
ServiceIoTCentralApplications('ServiceIoTCentralApplications', 'Service Io T Central Applications', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceIoTCentralApplications
include('azure-11/Item/Iot/ServiceIoTCentralApplications')

' renders the element
ServiceIoTCentralApplications('ServiceIoTCentralApplications', 'Service Io T Central Applications', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceIoTCentralApplicationsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIoTCentralApplicationsCard
include('azure-11/Item/Iot/ServiceIoTCentralApplications')

' renders the element
ServiceIoTCentralApplicationsCard('ServiceIoTCentralApplicationsCard', 'Service Io T Central Applications Card', 'an optional description')
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

' loads the Item which embeds the element ServiceIoTCentralApplicationsCard
include('azure-11/Item/Iot/ServiceIoTCentralApplications')

' renders the element
ServiceIoTCentralApplicationsCard('ServiceIoTCentralApplicationsCard', 'Service Io T Central Applications Card', 'an optional description')
@enduml
```

## ServiceIoTCentralApplicationsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIoTCentralApplicationsGroup
include('azure-11/Item/Iot/ServiceIoTCentralApplications')

' renders the element
ServiceIoTCentralApplicationsGroup('ServiceIoTCentralApplicationsGroup', 'Service Io T Central Applications Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceIoTCentralApplicationsGroup
include('azure-11/Item/Iot/ServiceIoTCentralApplications')

' renders the element
ServiceIoTCentralApplicationsGroup('ServiceIoTCentralApplicationsGroup', 'Service Io T Central Applications Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

