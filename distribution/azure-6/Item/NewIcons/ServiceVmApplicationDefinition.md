# ServiceVmApplicationDefinition


```text
azure-6/Item/NewIcons/ServiceVmApplicationDefinition
```

```text
include('azure-6/Item/NewIcons/ServiceVmApplicationDefinition')
```



| Illustration | ServiceVmApplicationDefinition | ServiceVmApplicationDefinitionCard | ServiceVmApplicationDefinitionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceVmApplicationDefinition.png) | ![illustration for ServiceVmApplicationDefinition](../../../azure-6/Item/NewIcons/ServiceVmApplicationDefinition.Local.png) | ![illustration for ServiceVmApplicationDefinitionCard](../../../azure-6/Item/NewIcons/ServiceVmApplicationDefinitionCard.Local.png) | ![illustration for ServiceVmApplicationDefinitionGroup](../../../azure-6/Item/NewIcons/ServiceVmApplicationDefinitionGroup.Local.png) |




## ServiceVmApplicationDefinition

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceVmApplicationDefinition
include('azure-6/Item/NewIcons/ServiceVmApplicationDefinition')

' renders the element
ServiceVmApplicationDefinition('ServiceVmApplicationDefinition', 'Service Vm Application Definition', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceVmApplicationDefinition
include('azure-6/Item/NewIcons/ServiceVmApplicationDefinition')

' renders the element
ServiceVmApplicationDefinition('ServiceVmApplicationDefinition', 'Service Vm Application Definition', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceVmApplicationDefinitionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceVmApplicationDefinitionCard
include('azure-6/Item/NewIcons/ServiceVmApplicationDefinition')

' renders the element
ServiceVmApplicationDefinitionCard('ServiceVmApplicationDefinitionCard', 'Service Vm Application Definition Card', 'an optional description')
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

' loads the Item which embeds the element ServiceVmApplicationDefinitionCard
include('azure-6/Item/NewIcons/ServiceVmApplicationDefinition')

' renders the element
ServiceVmApplicationDefinitionCard('ServiceVmApplicationDefinitionCard', 'Service Vm Application Definition Card', 'an optional description')
@enduml
```

## ServiceVmApplicationDefinitionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceVmApplicationDefinitionGroup
include('azure-6/Item/NewIcons/ServiceVmApplicationDefinition')

' renders the element
ServiceVmApplicationDefinitionGroup('ServiceVmApplicationDefinitionGroup', 'Service Vm Application Definition Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceVmApplicationDefinitionGroup
include('azure-6/Item/NewIcons/ServiceVmApplicationDefinition')

' renders the element
ServiceVmApplicationDefinitionGroup('ServiceVmApplicationDefinitionGroup', 'Service Vm Application Definition Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

