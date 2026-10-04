# ServiceMultiTenancy


```text
azure/Item/Identity/ServiceMultiTenancy
```

```text
include('azure/Item/Identity/ServiceMultiTenancy')
```



| Illustration | ServiceMultiTenancy | ServiceMultiTenancyCard | ServiceMultiTenancyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Identity/ServiceMultiTenancy.png) | ![illustration for ServiceMultiTenancy](../../../azure/Item/Identity/ServiceMultiTenancy.Local.png) | ![illustration for ServiceMultiTenancyCard](../../../azure/Item/Identity/ServiceMultiTenancyCard.Local.png) | ![illustration for ServiceMultiTenancyGroup](../../../azure/Item/Identity/ServiceMultiTenancyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMultiTenancyXs>`
- `<$ServiceMultiTenancySm>`
- `<$ServiceMultiTenancyMd>`
- `<$ServiceMultiTenancyLg>`





## ServiceMultiTenancy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancy
include('azure/Item/Identity/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancy('ServiceMultiTenancy', 'Service Multi Tenancy', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancy
include('azure/Item/Identity/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancy('ServiceMultiTenancy', 'Service Multi Tenancy', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMultiTenancyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancyCard
include('azure/Item/Identity/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancyCard('ServiceMultiTenancyCard', 'Service Multi Tenancy Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancyCard
include('azure/Item/Identity/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancyCard('ServiceMultiTenancyCard', 'Service Multi Tenancy Card', 'an optional description')
@enduml
```

## ServiceMultiTenancyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancyGroup
include('azure/Item/Identity/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancyGroup('ServiceMultiTenancyGroup', 'Service Multi Tenancy Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancyGroup
include('azure/Item/Identity/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancyGroup('ServiceMultiTenancyGroup', 'Service Multi Tenancy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

