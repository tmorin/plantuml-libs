# ServiceLogicAppsCustomConnector


```text
azure-19/Item/Integration/ServiceLogicAppsCustomConnector
```

```text
include('azure-19/Item/Integration/ServiceLogicAppsCustomConnector')
```



| Illustration | ServiceLogicAppsCustomConnector | ServiceLogicAppsCustomConnectorCard | ServiceLogicAppsCustomConnectorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Integration/ServiceLogicAppsCustomConnector.png) | ![illustration for ServiceLogicAppsCustomConnector](../../../azure-19/Item/Integration/ServiceLogicAppsCustomConnector.Local.png) | ![illustration for ServiceLogicAppsCustomConnectorCard](../../../azure-19/Item/Integration/ServiceLogicAppsCustomConnectorCard.Local.png) | ![illustration for ServiceLogicAppsCustomConnectorGroup](../../../azure-19/Item/Integration/ServiceLogicAppsCustomConnectorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceLogicAppsCustomConnectorXs>`
- `<$ServiceLogicAppsCustomConnectorSm>`
- `<$ServiceLogicAppsCustomConnectorMd>`
- `<$ServiceLogicAppsCustomConnectorLg>`





## ServiceLogicAppsCustomConnector

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLogicAppsCustomConnector
include('azure-19/Item/Integration/ServiceLogicAppsCustomConnector')

' renders the element
ServiceLogicAppsCustomConnector('ServiceLogicAppsCustomConnector', 'Service Logic Apps Custom Connector', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceLogicAppsCustomConnector
include('azure-19/Item/Integration/ServiceLogicAppsCustomConnector')

' renders the element
ServiceLogicAppsCustomConnector('ServiceLogicAppsCustomConnector', 'Service Logic Apps Custom Connector', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLogicAppsCustomConnectorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLogicAppsCustomConnectorCard
include('azure-19/Item/Integration/ServiceLogicAppsCustomConnector')

' renders the element
ServiceLogicAppsCustomConnectorCard('ServiceLogicAppsCustomConnectorCard', 'Service Logic Apps Custom Connector Card', 'an optional description')
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

' loads the Item which embeds the element ServiceLogicAppsCustomConnectorCard
include('azure-19/Item/Integration/ServiceLogicAppsCustomConnector')

' renders the element
ServiceLogicAppsCustomConnectorCard('ServiceLogicAppsCustomConnectorCard', 'Service Logic Apps Custom Connector Card', 'an optional description')
@enduml
```

## ServiceLogicAppsCustomConnectorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLogicAppsCustomConnectorGroup
include('azure-19/Item/Integration/ServiceLogicAppsCustomConnector')

' renders the element
ServiceLogicAppsCustomConnectorGroup('ServiceLogicAppsCustomConnectorGroup', 'Service Logic Apps Custom Connector Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceLogicAppsCustomConnectorGroup
include('azure-19/Item/Integration/ServiceLogicAppsCustomConnector')

' renders the element
ServiceLogicAppsCustomConnectorGroup('ServiceLogicAppsCustomConnectorGroup', 'Service Logic Apps Custom Connector Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

