# ServiceAvailabilitySets


```text
azure-4/Item/Compute/ServiceAvailabilitySets
```

```text
include('azure-4/Item/Compute/ServiceAvailabilitySets')
```



| Illustration | ServiceAvailabilitySets | ServiceAvailabilitySetsCard | ServiceAvailabilitySetsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Compute/ServiceAvailabilitySets.png) | ![illustration for ServiceAvailabilitySets](../../../azure-4/Item/Compute/ServiceAvailabilitySets.Local.png) | ![illustration for ServiceAvailabilitySetsCard](../../../azure-4/Item/Compute/ServiceAvailabilitySetsCard.Local.png) | ![illustration for ServiceAvailabilitySetsGroup](../../../azure-4/Item/Compute/ServiceAvailabilitySetsGroup.Local.png) |




## ServiceAvailabilitySets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAvailabilitySets
include('azure-4/Item/Compute/ServiceAvailabilitySets')

' renders the element
ServiceAvailabilitySets('ServiceAvailabilitySets', 'Service Availability Sets', 'an optional tech label')
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

' loads the Item which embeds the element ServiceAvailabilitySets
include('azure-4/Item/Compute/ServiceAvailabilitySets')

' renders the element
ServiceAvailabilitySets('ServiceAvailabilitySets', 'Service Availability Sets', 'an optional tech label')
@enduml
```

## ServiceAvailabilitySetsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAvailabilitySetsCard
include('azure-4/Item/Compute/ServiceAvailabilitySets')

' renders the element
ServiceAvailabilitySetsCard('ServiceAvailabilitySetsCard', 'Service Availability Sets Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAvailabilitySetsCard
include('azure-4/Item/Compute/ServiceAvailabilitySets')

' renders the element
ServiceAvailabilitySetsCard('ServiceAvailabilitySetsCard', 'Service Availability Sets Card', 'an optional description')
@enduml
```

## ServiceAvailabilitySetsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAvailabilitySetsGroup
include('azure-4/Item/Compute/ServiceAvailabilitySets')

' renders the element
ServiceAvailabilitySetsGroup('ServiceAvailabilitySetsGroup', 'Service Availability Sets Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAvailabilitySetsGroup
include('azure-4/Item/Compute/ServiceAvailabilitySets')

' renders the element
ServiceAvailabilitySetsGroup('ServiceAvailabilitySetsGroup', 'Service Availability Sets Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

