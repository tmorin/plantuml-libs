# ServiceVmAppDefinitions


```text
azure-17/Item/Other/ServiceVmAppDefinitions
```

```text
include('azure-17/Item/Other/ServiceVmAppDefinitions')
```



| Illustration | ServiceVmAppDefinitions | ServiceVmAppDefinitionsCard | ServiceVmAppDefinitionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceVmAppDefinitions.png) | ![illustration for ServiceVmAppDefinitions](../../../azure-17/Item/Other/ServiceVmAppDefinitions.Local.png) | ![illustration for ServiceVmAppDefinitionsCard](../../../azure-17/Item/Other/ServiceVmAppDefinitionsCard.Local.png) | ![illustration for ServiceVmAppDefinitionsGroup](../../../azure-17/Item/Other/ServiceVmAppDefinitionsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceVmAppDefinitionsXs>`
- `<$ServiceVmAppDefinitionsSm>`
- `<$ServiceVmAppDefinitionsMd>`
- `<$ServiceVmAppDefinitionsLg>`





## ServiceVmAppDefinitions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceVmAppDefinitions
include('azure-17/Item/Other/ServiceVmAppDefinitions')

' renders the element
ServiceVmAppDefinitions('ServiceVmAppDefinitions', 'Service Vm App Definitions', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceVmAppDefinitions
include('azure-17/Item/Other/ServiceVmAppDefinitions')

' renders the element
ServiceVmAppDefinitions('ServiceVmAppDefinitions', 'Service Vm App Definitions', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceVmAppDefinitionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceVmAppDefinitionsCard
include('azure-17/Item/Other/ServiceVmAppDefinitions')

' renders the element
ServiceVmAppDefinitionsCard('ServiceVmAppDefinitionsCard', 'Service Vm App Definitions Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceVmAppDefinitionsCard
include('azure-17/Item/Other/ServiceVmAppDefinitions')

' renders the element
ServiceVmAppDefinitionsCard('ServiceVmAppDefinitionsCard', 'Service Vm App Definitions Card', 'an optional description')
@enduml
```

## ServiceVmAppDefinitionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceVmAppDefinitionsGroup
include('azure-17/Item/Other/ServiceVmAppDefinitions')

' renders the element
ServiceVmAppDefinitionsGroup('ServiceVmAppDefinitionsGroup', 'Service Vm App Definitions Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceVmAppDefinitionsGroup
include('azure-17/Item/Other/ServiceVmAppDefinitions')

' renders the element
ServiceVmAppDefinitionsGroup('ServiceVmAppDefinitionsGroup', 'Service Vm App Definitions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

