# ServiceStorageAccountsClassic


```text
azure-17/Item/Storage/ServiceStorageAccountsClassic
```

```text
include('azure-17/Item/Storage/ServiceStorageAccountsClassic')
```



| Illustration | ServiceStorageAccountsClassic | ServiceStorageAccountsClassicCard | ServiceStorageAccountsClassicGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Storage/ServiceStorageAccountsClassic.png) | ![illustration for ServiceStorageAccountsClassic](../../../azure-17/Item/Storage/ServiceStorageAccountsClassic.Local.png) | ![illustration for ServiceStorageAccountsClassicCard](../../../azure-17/Item/Storage/ServiceStorageAccountsClassicCard.Local.png) | ![illustration for ServiceStorageAccountsClassicGroup](../../../azure-17/Item/Storage/ServiceStorageAccountsClassicGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceStorageAccountsClassicXs>`
- `<$ServiceStorageAccountsClassicSm>`
- `<$ServiceStorageAccountsClassicMd>`
- `<$ServiceStorageAccountsClassicLg>`





## ServiceStorageAccountsClassic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceStorageAccountsClassic
include('azure-17/Item/Storage/ServiceStorageAccountsClassic')

' renders the element
ServiceStorageAccountsClassic('ServiceStorageAccountsClassic', 'Service Storage Accounts Classic', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceStorageAccountsClassic
include('azure-17/Item/Storage/ServiceStorageAccountsClassic')

' renders the element
ServiceStorageAccountsClassic('ServiceStorageAccountsClassic', 'Service Storage Accounts Classic', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceStorageAccountsClassicCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceStorageAccountsClassicCard
include('azure-17/Item/Storage/ServiceStorageAccountsClassic')

' renders the element
ServiceStorageAccountsClassicCard('ServiceStorageAccountsClassicCard', 'Service Storage Accounts Classic Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceStorageAccountsClassicCard
include('azure-17/Item/Storage/ServiceStorageAccountsClassic')

' renders the element
ServiceStorageAccountsClassicCard('ServiceStorageAccountsClassicCard', 'Service Storage Accounts Classic Card', 'an optional description')
@enduml
```

## ServiceStorageAccountsClassicGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceStorageAccountsClassicGroup
include('azure-17/Item/Storage/ServiceStorageAccountsClassic')

' renders the element
ServiceStorageAccountsClassicGroup('ServiceStorageAccountsClassicGroup', 'Service Storage Accounts Classic Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceStorageAccountsClassicGroup
include('azure-17/Item/Storage/ServiceStorageAccountsClassic')

' renders the element
ServiceStorageAccountsClassicGroup('ServiceStorageAccountsClassicGroup', 'Service Storage Accounts Classic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

