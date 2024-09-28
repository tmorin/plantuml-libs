# ServiceSpatialAnchorAccounts


```text
azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts
```

```text
include('azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts')
```



| Illustration | ServiceSpatialAnchorAccounts | ServiceSpatialAnchorAccountsCard | ServiceSpatialAnchorAccountsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts.png) | ![illustration for ServiceSpatialAnchorAccounts](../../../azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts.Local.png) | ![illustration for ServiceSpatialAnchorAccountsCard](../../../azure-19/Item/MixedReality/ServiceSpatialAnchorAccountsCard.Local.png) | ![illustration for ServiceSpatialAnchorAccountsGroup](../../../azure-19/Item/MixedReality/ServiceSpatialAnchorAccountsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceSpatialAnchorAccountsXs>`
- `<$ServiceSpatialAnchorAccountsSm>`
- `<$ServiceSpatialAnchorAccountsMd>`
- `<$ServiceSpatialAnchorAccountsLg>`





## ServiceSpatialAnchorAccounts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceSpatialAnchorAccounts
include('azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts')

' renders the element
ServiceSpatialAnchorAccounts('ServiceSpatialAnchorAccounts', 'Service Spatial Anchor Accounts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceSpatialAnchorAccounts
include('azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts')

' renders the element
ServiceSpatialAnchorAccounts('ServiceSpatialAnchorAccounts', 'Service Spatial Anchor Accounts', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSpatialAnchorAccountsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceSpatialAnchorAccountsCard
include('azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts')

' renders the element
ServiceSpatialAnchorAccountsCard('ServiceSpatialAnchorAccountsCard', 'Service Spatial Anchor Accounts Card', 'an optional description')
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

' loads the Item which embeds the element ServiceSpatialAnchorAccountsCard
include('azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts')

' renders the element
ServiceSpatialAnchorAccountsCard('ServiceSpatialAnchorAccountsCard', 'Service Spatial Anchor Accounts Card', 'an optional description')
@enduml
```

## ServiceSpatialAnchorAccountsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceSpatialAnchorAccountsGroup
include('azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts')

' renders the element
ServiceSpatialAnchorAccountsGroup('ServiceSpatialAnchorAccountsGroup', 'Service Spatial Anchor Accounts Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceSpatialAnchorAccountsGroup
include('azure-19/Item/MixedReality/ServiceSpatialAnchorAccounts')

' renders the element
ServiceSpatialAnchorAccountsGroup('ServiceSpatialAnchorAccountsGroup', 'Service Spatial Anchor Accounts Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

