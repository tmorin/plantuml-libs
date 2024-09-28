# ServiceVirtualVisitsBuilder


```text
azure-19/Item/Other/ServiceVirtualVisitsBuilder
```

```text
include('azure-19/Item/Other/ServiceVirtualVisitsBuilder')
```



| Illustration | ServiceVirtualVisitsBuilder | ServiceVirtualVisitsBuilderCard | ServiceVirtualVisitsBuilderGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Other/ServiceVirtualVisitsBuilder.png) | ![illustration for ServiceVirtualVisitsBuilder](../../../azure-19/Item/Other/ServiceVirtualVisitsBuilder.Local.png) | ![illustration for ServiceVirtualVisitsBuilderCard](../../../azure-19/Item/Other/ServiceVirtualVisitsBuilderCard.Local.png) | ![illustration for ServiceVirtualVisitsBuilderGroup](../../../azure-19/Item/Other/ServiceVirtualVisitsBuilderGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceVirtualVisitsBuilderXs>`
- `<$ServiceVirtualVisitsBuilderSm>`
- `<$ServiceVirtualVisitsBuilderMd>`
- `<$ServiceVirtualVisitsBuilderLg>`





## ServiceVirtualVisitsBuilder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceVirtualVisitsBuilder
include('azure-19/Item/Other/ServiceVirtualVisitsBuilder')

' renders the element
ServiceVirtualVisitsBuilder('ServiceVirtualVisitsBuilder', 'Service Virtual Visits Builder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceVirtualVisitsBuilder
include('azure-19/Item/Other/ServiceVirtualVisitsBuilder')

' renders the element
ServiceVirtualVisitsBuilder('ServiceVirtualVisitsBuilder', 'Service Virtual Visits Builder', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceVirtualVisitsBuilderCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceVirtualVisitsBuilderCard
include('azure-19/Item/Other/ServiceVirtualVisitsBuilder')

' renders the element
ServiceVirtualVisitsBuilderCard('ServiceVirtualVisitsBuilderCard', 'Service Virtual Visits Builder Card', 'an optional description')
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

' loads the Item which embeds the element ServiceVirtualVisitsBuilderCard
include('azure-19/Item/Other/ServiceVirtualVisitsBuilder')

' renders the element
ServiceVirtualVisitsBuilderCard('ServiceVirtualVisitsBuilderCard', 'Service Virtual Visits Builder Card', 'an optional description')
@enduml
```

## ServiceVirtualVisitsBuilderGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceVirtualVisitsBuilderGroup
include('azure-19/Item/Other/ServiceVirtualVisitsBuilder')

' renders the element
ServiceVirtualVisitsBuilderGroup('ServiceVirtualVisitsBuilderGroup', 'Service Virtual Visits Builder Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceVirtualVisitsBuilderGroup
include('azure-19/Item/Other/ServiceVirtualVisitsBuilder')

' renders the element
ServiceVirtualVisitsBuilderGroup('ServiceVirtualVisitsBuilderGroup', 'Service Virtual Visits Builder Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

