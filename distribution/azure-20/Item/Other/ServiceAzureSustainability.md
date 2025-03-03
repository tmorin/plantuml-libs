# ServiceAzureSustainability


```text
azure-20/Item/Other/ServiceAzureSustainability
```

```text
include('azure-20/Item/Other/ServiceAzureSustainability')
```



| Illustration | ServiceAzureSustainability | ServiceAzureSustainabilityCard | ServiceAzureSustainabilityGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Other/ServiceAzureSustainability.png) | ![illustration for ServiceAzureSustainability](../../../azure-20/Item/Other/ServiceAzureSustainability.Local.png) | ![illustration for ServiceAzureSustainabilityCard](../../../azure-20/Item/Other/ServiceAzureSustainabilityCard.Local.png) | ![illustration for ServiceAzureSustainabilityGroup](../../../azure-20/Item/Other/ServiceAzureSustainabilityGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureSustainabilityXs>`
- `<$ServiceAzureSustainabilitySm>`
- `<$ServiceAzureSustainabilityMd>`
- `<$ServiceAzureSustainabilityLg>`





## ServiceAzureSustainability

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureSustainability
include('azure-20/Item/Other/ServiceAzureSustainability')

' renders the element
ServiceAzureSustainability('ServiceAzureSustainability', 'Service Azure Sustainability', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureSustainability
include('azure-20/Item/Other/ServiceAzureSustainability')

' renders the element
ServiceAzureSustainability('ServiceAzureSustainability', 'Service Azure Sustainability', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureSustainabilityCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureSustainabilityCard
include('azure-20/Item/Other/ServiceAzureSustainability')

' renders the element
ServiceAzureSustainabilityCard('ServiceAzureSustainabilityCard', 'Service Azure Sustainability Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureSustainabilityCard
include('azure-20/Item/Other/ServiceAzureSustainability')

' renders the element
ServiceAzureSustainabilityCard('ServiceAzureSustainabilityCard', 'Service Azure Sustainability Card', 'an optional description')
@enduml
```

## ServiceAzureSustainabilityGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureSustainabilityGroup
include('azure-20/Item/Other/ServiceAzureSustainability')

' renders the element
ServiceAzureSustainabilityGroup('ServiceAzureSustainabilityGroup', 'Service Azure Sustainability Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureSustainabilityGroup
include('azure-20/Item/Other/ServiceAzureSustainability')

' renders the element
ServiceAzureSustainabilityGroup('ServiceAzureSustainabilityGroup', 'Service Azure Sustainability Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

