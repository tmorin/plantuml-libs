# ServiceResourceGuard


```text
azure-17/Item/Other/ServiceResourceGuard
```

```text
include('azure-17/Item/Other/ServiceResourceGuard')
```



| Illustration | ServiceResourceGuard | ServiceResourceGuardCard | ServiceResourceGuardGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceResourceGuard.png) | ![illustration for ServiceResourceGuard](../../../azure-17/Item/Other/ServiceResourceGuard.Local.png) | ![illustration for ServiceResourceGuardCard](../../../azure-17/Item/Other/ServiceResourceGuardCard.Local.png) | ![illustration for ServiceResourceGuardGroup](../../../azure-17/Item/Other/ServiceResourceGuardGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceResourceGuardXs>`
- `<$ServiceResourceGuardSm>`
- `<$ServiceResourceGuardMd>`
- `<$ServiceResourceGuardLg>`





## ServiceResourceGuard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceResourceGuard
include('azure-17/Item/Other/ServiceResourceGuard')

' renders the element
ServiceResourceGuard('ServiceResourceGuard', 'Service Resource Guard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceResourceGuard
include('azure-17/Item/Other/ServiceResourceGuard')

' renders the element
ServiceResourceGuard('ServiceResourceGuard', 'Service Resource Guard', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceResourceGuardCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceResourceGuardCard
include('azure-17/Item/Other/ServiceResourceGuard')

' renders the element
ServiceResourceGuardCard('ServiceResourceGuardCard', 'Service Resource Guard Card', 'an optional description')
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

' loads the Item which embeds the element ServiceResourceGuardCard
include('azure-17/Item/Other/ServiceResourceGuard')

' renders the element
ServiceResourceGuardCard('ServiceResourceGuardCard', 'Service Resource Guard Card', 'an optional description')
@enduml
```

## ServiceResourceGuardGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceResourceGuardGroup
include('azure-17/Item/Other/ServiceResourceGuard')

' renders the element
ServiceResourceGuardGroup('ServiceResourceGuardGroup', 'Service Resource Guard Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceResourceGuardGroup
include('azure-17/Item/Other/ServiceResourceGuard')

' renders the element
ServiceResourceGuardGroup('ServiceResourceGuardGroup', 'Service Resource Guard Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

