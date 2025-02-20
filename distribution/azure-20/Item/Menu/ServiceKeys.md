# ServiceKeys


```text
azure-20/Item/Menu/ServiceKeys
```

```text
include('azure-20/Item/Menu/ServiceKeys')
```



| Illustration | ServiceKeys | ServiceKeysCard | ServiceKeysGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Menu/ServiceKeys.png) | ![illustration for ServiceKeys](../../../azure-20/Item/Menu/ServiceKeys.Local.png) | ![illustration for ServiceKeysCard](../../../azure-20/Item/Menu/ServiceKeysCard.Local.png) | ![illustration for ServiceKeysGroup](../../../azure-20/Item/Menu/ServiceKeysGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceKeysXs>`
- `<$ServiceKeysSm>`
- `<$ServiceKeysMd>`
- `<$ServiceKeysLg>`





## ServiceKeys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceKeys
include('azure-20/Item/Menu/ServiceKeys')

' renders the element
ServiceKeys('ServiceKeys', 'Service Keys', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceKeys
include('azure-20/Item/Menu/ServiceKeys')

' renders the element
ServiceKeys('ServiceKeys', 'Service Keys', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceKeysCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceKeysCard
include('azure-20/Item/Menu/ServiceKeys')

' renders the element
ServiceKeysCard('ServiceKeysCard', 'Service Keys Card', 'an optional description')
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

' loads the Item which embeds the element ServiceKeysCard
include('azure-20/Item/Menu/ServiceKeys')

' renders the element
ServiceKeysCard('ServiceKeysCard', 'Service Keys Card', 'an optional description')
@enduml
```

## ServiceKeysGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceKeysGroup
include('azure-20/Item/Menu/ServiceKeys')

' renders the element
ServiceKeysGroup('ServiceKeysGroup', 'Service Keys Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceKeysGroup
include('azure-20/Item/Menu/ServiceKeys')

' renders the element
ServiceKeysGroup('ServiceKeysGroup', 'Service Keys Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

