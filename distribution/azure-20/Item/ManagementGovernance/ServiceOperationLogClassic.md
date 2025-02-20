# ServiceOperationLogClassic


```text
azure-20/Item/ManagementGovernance/ServiceOperationLogClassic
```

```text
include('azure-20/Item/ManagementGovernance/ServiceOperationLogClassic')
```



| Illustration | ServiceOperationLogClassic | ServiceOperationLogClassicCard | ServiceOperationLogClassicGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/ManagementGovernance/ServiceOperationLogClassic.png) | ![illustration for ServiceOperationLogClassic](../../../azure-20/Item/ManagementGovernance/ServiceOperationLogClassic.Local.png) | ![illustration for ServiceOperationLogClassicCard](../../../azure-20/Item/ManagementGovernance/ServiceOperationLogClassicCard.Local.png) | ![illustration for ServiceOperationLogClassicGroup](../../../azure-20/Item/ManagementGovernance/ServiceOperationLogClassicGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceOperationLogClassicXs>`
- `<$ServiceOperationLogClassicSm>`
- `<$ServiceOperationLogClassicMd>`
- `<$ServiceOperationLogClassicLg>`





## ServiceOperationLogClassic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOperationLogClassic
include('azure-20/Item/ManagementGovernance/ServiceOperationLogClassic')

' renders the element
ServiceOperationLogClassic('ServiceOperationLogClassic', 'Service Operation Log Classic', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOperationLogClassic
include('azure-20/Item/ManagementGovernance/ServiceOperationLogClassic')

' renders the element
ServiceOperationLogClassic('ServiceOperationLogClassic', 'Service Operation Log Classic', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceOperationLogClassicCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOperationLogClassicCard
include('azure-20/Item/ManagementGovernance/ServiceOperationLogClassic')

' renders the element
ServiceOperationLogClassicCard('ServiceOperationLogClassicCard', 'Service Operation Log Classic Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOperationLogClassicCard
include('azure-20/Item/ManagementGovernance/ServiceOperationLogClassic')

' renders the element
ServiceOperationLogClassicCard('ServiceOperationLogClassicCard', 'Service Operation Log Classic Card', 'an optional description')
@enduml
```

## ServiceOperationLogClassicGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOperationLogClassicGroup
include('azure-20/Item/ManagementGovernance/ServiceOperationLogClassic')

' renders the element
ServiceOperationLogClassicGroup('ServiceOperationLogClassicGroup', 'Service Operation Log Classic Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOperationLogClassicGroup
include('azure-20/Item/ManagementGovernance/ServiceOperationLogClassic')

' renders the element
ServiceOperationLogClassicGroup('ServiceOperationLogClassicGroup', 'Service Operation Log Classic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

