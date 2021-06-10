# ServiceImageDefinitions


```text
azure-4/Item/Compute/ServiceImageDefinitions
```

```text
include('azure-4/Item/Compute/ServiceImageDefinitions')
```



| Illustration | ServiceImageDefinitions | ServiceImageDefinitionsCard | ServiceImageDefinitionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Compute/ServiceImageDefinitions.png) | ![illustration for ServiceImageDefinitions](../../../azure-4/Item/Compute/ServiceImageDefinitions.Local.png) | ![illustration for ServiceImageDefinitionsCard](../../../azure-4/Item/Compute/ServiceImageDefinitionsCard.Local.png) | ![illustration for ServiceImageDefinitionsGroup](../../../azure-4/Item/Compute/ServiceImageDefinitionsGroup.Local.png) |




## ServiceImageDefinitions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImageDefinitions
include('azure-4/Item/Compute/ServiceImageDefinitions')

' renders the element
ServiceImageDefinitions('ServiceImageDefinitions', 'Service Image Definitions', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImageDefinitions
include('azure-4/Item/Compute/ServiceImageDefinitions')

' renders the element
ServiceImageDefinitions('ServiceImageDefinitions', 'Service Image Definitions', 'an optional tech label')
@enduml
```

## ServiceImageDefinitionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImageDefinitionsCard
include('azure-4/Item/Compute/ServiceImageDefinitions')

' renders the element
ServiceImageDefinitionsCard('ServiceImageDefinitionsCard', 'Service Image Definitions Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImageDefinitionsCard
include('azure-4/Item/Compute/ServiceImageDefinitions')

' renders the element
ServiceImageDefinitionsCard('ServiceImageDefinitionsCard', 'Service Image Definitions Card', 'an optional description')
@enduml
```

## ServiceImageDefinitionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImageDefinitionsGroup
include('azure-4/Item/Compute/ServiceImageDefinitions')

' renders the element
ServiceImageDefinitionsGroup('ServiceImageDefinitionsGroup', 'Service Image Definitions Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImageDefinitionsGroup
include('azure-4/Item/Compute/ServiceImageDefinitions')

' renders the element
ServiceImageDefinitionsGroup('ServiceImageDefinitionsGroup', 'Service Image Definitions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

