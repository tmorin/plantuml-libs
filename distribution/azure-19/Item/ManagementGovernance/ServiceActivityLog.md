# ServiceActivityLog


```text
azure-19/Item/ManagementGovernance/ServiceActivityLog
```

```text
include('azure-19/Item/ManagementGovernance/ServiceActivityLog')
```



| Illustration | ServiceActivityLog | ServiceActivityLogCard | ServiceActivityLogGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/ManagementGovernance/ServiceActivityLog.png) | ![illustration for ServiceActivityLog](../../../azure-19/Item/ManagementGovernance/ServiceActivityLog.Local.png) | ![illustration for ServiceActivityLogCard](../../../azure-19/Item/ManagementGovernance/ServiceActivityLogCard.Local.png) | ![illustration for ServiceActivityLogGroup](../../../azure-19/Item/ManagementGovernance/ServiceActivityLogGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceActivityLogXs>`
- `<$ServiceActivityLogSm>`
- `<$ServiceActivityLogMd>`
- `<$ServiceActivityLogLg>`





## ServiceActivityLog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceActivityLog
include('azure-19/Item/ManagementGovernance/ServiceActivityLog')

' renders the element
ServiceActivityLog('ServiceActivityLog', 'Service Activity Log', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceActivityLog
include('azure-19/Item/ManagementGovernance/ServiceActivityLog')

' renders the element
ServiceActivityLog('ServiceActivityLog', 'Service Activity Log', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceActivityLogCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceActivityLogCard
include('azure-19/Item/ManagementGovernance/ServiceActivityLog')

' renders the element
ServiceActivityLogCard('ServiceActivityLogCard', 'Service Activity Log Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceActivityLogCard
include('azure-19/Item/ManagementGovernance/ServiceActivityLog')

' renders the element
ServiceActivityLogCard('ServiceActivityLogCard', 'Service Activity Log Card', 'an optional description')
@enduml
```

## ServiceActivityLogGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceActivityLogGroup
include('azure-19/Item/ManagementGovernance/ServiceActivityLog')

' renders the element
ServiceActivityLogGroup('ServiceActivityLogGroup', 'Service Activity Log Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceActivityLogGroup
include('azure-19/Item/ManagementGovernance/ServiceActivityLog')

' renders the element
ServiceActivityLogGroup('ServiceActivityLogGroup', 'Service Activity Log Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

