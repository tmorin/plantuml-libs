# Sync


```text
fontawesome-5/Solid/Sync
```

```text
include('fontawesome-5/Solid/Sync')
```



| Illustration | Sync |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Sync.png) | ![illustration for Sync](../../fontawesome-5/Solid/Sync.Local.png) |




## Sync

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sync
include('fontawesome-5/Solid/Sync')

' renders the element
Sync('Sync', 'Sync', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sync
include('fontawesome-5/Solid/Sync')

' renders the element
Sync('Sync', 'Sync', 'an optional tech label')
@enduml
```

