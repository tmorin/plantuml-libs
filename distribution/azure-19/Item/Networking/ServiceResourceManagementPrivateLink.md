# ServiceResourceManagementPrivateLink


```text
azure-19/Item/Networking/ServiceResourceManagementPrivateLink
```

```text
include('azure-19/Item/Networking/ServiceResourceManagementPrivateLink')
```



| Illustration | ServiceResourceManagementPrivateLink | ServiceResourceManagementPrivateLinkCard | ServiceResourceManagementPrivateLinkGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Networking/ServiceResourceManagementPrivateLink.png) | ![illustration for ServiceResourceManagementPrivateLink](../../../azure-19/Item/Networking/ServiceResourceManagementPrivateLink.Local.png) | ![illustration for ServiceResourceManagementPrivateLinkCard](../../../azure-19/Item/Networking/ServiceResourceManagementPrivateLinkCard.Local.png) | ![illustration for ServiceResourceManagementPrivateLinkGroup](../../../azure-19/Item/Networking/ServiceResourceManagementPrivateLinkGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceResourceManagementPrivateLinkXs>`
- `<$ServiceResourceManagementPrivateLinkSm>`
- `<$ServiceResourceManagementPrivateLinkMd>`
- `<$ServiceResourceManagementPrivateLinkLg>`





## ServiceResourceManagementPrivateLink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceResourceManagementPrivateLink
include('azure-19/Item/Networking/ServiceResourceManagementPrivateLink')

' renders the element
ServiceResourceManagementPrivateLink('ServiceResourceManagementPrivateLink', 'Service Resource Management Private Link', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceResourceManagementPrivateLink
include('azure-19/Item/Networking/ServiceResourceManagementPrivateLink')

' renders the element
ServiceResourceManagementPrivateLink('ServiceResourceManagementPrivateLink', 'Service Resource Management Private Link', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceResourceManagementPrivateLinkCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceResourceManagementPrivateLinkCard
include('azure-19/Item/Networking/ServiceResourceManagementPrivateLink')

' renders the element
ServiceResourceManagementPrivateLinkCard('ServiceResourceManagementPrivateLinkCard', 'Service Resource Management Private Link Card', 'an optional description')
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

' loads the Item which embeds the element ServiceResourceManagementPrivateLinkCard
include('azure-19/Item/Networking/ServiceResourceManagementPrivateLink')

' renders the element
ServiceResourceManagementPrivateLinkCard('ServiceResourceManagementPrivateLinkCard', 'Service Resource Management Private Link Card', 'an optional description')
@enduml
```

## ServiceResourceManagementPrivateLinkGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceResourceManagementPrivateLinkGroup
include('azure-19/Item/Networking/ServiceResourceManagementPrivateLink')

' renders the element
ServiceResourceManagementPrivateLinkGroup('ServiceResourceManagementPrivateLinkGroup', 'Service Resource Management Private Link Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceResourceManagementPrivateLinkGroup
include('azure-19/Item/Networking/ServiceResourceManagementPrivateLink')

' renders the element
ServiceResourceManagementPrivateLinkGroup('ServiceResourceManagementPrivateLinkGroup', 'Service Resource Management Private Link Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

