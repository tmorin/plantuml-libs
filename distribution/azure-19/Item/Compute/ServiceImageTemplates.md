# ServiceImageTemplates


```text
azure-19/Item/Compute/ServiceImageTemplates
```

```text
include('azure-19/Item/Compute/ServiceImageTemplates')
```



| Illustration | ServiceImageTemplates | ServiceImageTemplatesCard | ServiceImageTemplatesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Compute/ServiceImageTemplates.png) | ![illustration for ServiceImageTemplates](../../../azure-19/Item/Compute/ServiceImageTemplates.Local.png) | ![illustration for ServiceImageTemplatesCard](../../../azure-19/Item/Compute/ServiceImageTemplatesCard.Local.png) | ![illustration for ServiceImageTemplatesGroup](../../../azure-19/Item/Compute/ServiceImageTemplatesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceImageTemplatesXs>`
- `<$ServiceImageTemplatesSm>`
- `<$ServiceImageTemplatesMd>`
- `<$ServiceImageTemplatesLg>`





## ServiceImageTemplates

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceImageTemplates
include('azure-19/Item/Compute/ServiceImageTemplates')

' renders the element
ServiceImageTemplates('ServiceImageTemplates', 'Service Image Templates', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceImageTemplates
include('azure-19/Item/Compute/ServiceImageTemplates')

' renders the element
ServiceImageTemplates('ServiceImageTemplates', 'Service Image Templates', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceImageTemplatesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceImageTemplatesCard
include('azure-19/Item/Compute/ServiceImageTemplates')

' renders the element
ServiceImageTemplatesCard('ServiceImageTemplatesCard', 'Service Image Templates Card', 'an optional description')
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

' loads the Item which embeds the element ServiceImageTemplatesCard
include('azure-19/Item/Compute/ServiceImageTemplates')

' renders the element
ServiceImageTemplatesCard('ServiceImageTemplatesCard', 'Service Image Templates Card', 'an optional description')
@enduml
```

## ServiceImageTemplatesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceImageTemplatesGroup
include('azure-19/Item/Compute/ServiceImageTemplates')

' renders the element
ServiceImageTemplatesGroup('ServiceImageTemplatesGroup', 'Service Image Templates Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceImageTemplatesGroup
include('azure-19/Item/Compute/ServiceImageTemplates')

' renders the element
ServiceImageTemplatesGroup('ServiceImageTemplatesGroup', 'Service Image Templates Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

