# ServiceManagedFileShares


```text
azure-20/Item/Storage/ServiceManagedFileShares
```

```text
include('azure-20/Item/Storage/ServiceManagedFileShares')
```



| Illustration | ServiceManagedFileShares | ServiceManagedFileSharesCard | ServiceManagedFileSharesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Storage/ServiceManagedFileShares.png) | ![illustration for ServiceManagedFileShares](../../../azure-20/Item/Storage/ServiceManagedFileShares.Local.png) | ![illustration for ServiceManagedFileSharesCard](../../../azure-20/Item/Storage/ServiceManagedFileSharesCard.Local.png) | ![illustration for ServiceManagedFileSharesGroup](../../../azure-20/Item/Storage/ServiceManagedFileSharesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceManagedFileSharesXs>`
- `<$ServiceManagedFileSharesSm>`
- `<$ServiceManagedFileSharesMd>`
- `<$ServiceManagedFileSharesLg>`





## ServiceManagedFileShares

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceManagedFileShares
include('azure-20/Item/Storage/ServiceManagedFileShares')

' renders the element
ServiceManagedFileShares('ServiceManagedFileShares', 'Service Managed File Shares', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceManagedFileShares
include('azure-20/Item/Storage/ServiceManagedFileShares')

' renders the element
ServiceManagedFileShares('ServiceManagedFileShares', 'Service Managed File Shares', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceManagedFileSharesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceManagedFileSharesCard
include('azure-20/Item/Storage/ServiceManagedFileShares')

' renders the element
ServiceManagedFileSharesCard('ServiceManagedFileSharesCard', 'Service Managed File Shares Card', 'an optional description')
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

' loads the Item which embeds the element ServiceManagedFileSharesCard
include('azure-20/Item/Storage/ServiceManagedFileShares')

' renders the element
ServiceManagedFileSharesCard('ServiceManagedFileSharesCard', 'Service Managed File Shares Card', 'an optional description')
@enduml
```

## ServiceManagedFileSharesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceManagedFileSharesGroup
include('azure-20/Item/Storage/ServiceManagedFileShares')

' renders the element
ServiceManagedFileSharesGroup('ServiceManagedFileSharesGroup', 'Service Managed File Shares Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceManagedFileSharesGroup
include('azure-20/Item/Storage/ServiceManagedFileShares')

' renders the element
ServiceManagedFileSharesGroup('ServiceManagedFileSharesGroup', 'Service Managed File Shares Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

