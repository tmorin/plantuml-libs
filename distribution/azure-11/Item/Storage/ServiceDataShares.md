# ServiceDataShares


```text
azure-11/Item/Storage/ServiceDataShares
```

```text
include('azure-11/Item/Storage/ServiceDataShares')
```



| Illustration | ServiceDataShares | ServiceDataSharesCard | ServiceDataSharesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Storage/ServiceDataShares.png) | ![illustration for ServiceDataShares](../../../azure-11/Item/Storage/ServiceDataShares.Local.png) | ![illustration for ServiceDataSharesCard](../../../azure-11/Item/Storage/ServiceDataSharesCard.Local.png) | ![illustration for ServiceDataSharesGroup](../../../azure-11/Item/Storage/ServiceDataSharesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDataSharesXs>`
- `<$ServiceDataSharesSm>`
- `<$ServiceDataSharesMd>`
- `<$ServiceDataSharesLg>`





## ServiceDataShares

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDataShares
include('azure-11/Item/Storage/ServiceDataShares')

' renders the element
ServiceDataShares('ServiceDataShares', 'Service Data Shares', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDataShares
include('azure-11/Item/Storage/ServiceDataShares')

' renders the element
ServiceDataShares('ServiceDataShares', 'Service Data Shares', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDataSharesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDataSharesCard
include('azure-11/Item/Storage/ServiceDataShares')

' renders the element
ServiceDataSharesCard('ServiceDataSharesCard', 'Service Data Shares Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDataSharesCard
include('azure-11/Item/Storage/ServiceDataShares')

' renders the element
ServiceDataSharesCard('ServiceDataSharesCard', 'Service Data Shares Card', 'an optional description')
@enduml
```

## ServiceDataSharesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDataSharesGroup
include('azure-11/Item/Storage/ServiceDataShares')

' renders the element
ServiceDataSharesGroup('ServiceDataSharesGroup', 'Service Data Shares Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDataSharesGroup
include('azure-11/Item/Storage/ServiceDataShares')

' renders the element
ServiceDataSharesGroup('ServiceDataSharesGroup', 'Service Data Shares Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

