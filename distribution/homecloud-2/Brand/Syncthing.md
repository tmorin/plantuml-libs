# Syncthing


```text
homecloud-2/Brand/Syncthing
```

```text
include('homecloud-2/Brand/Syncthing')
```



| Illustration | Syncthing | SyncthingCard | SyncthingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-2/Brand/Syncthing.png) | ![illustration for Syncthing](../../homecloud-2/Brand/Syncthing.Local.png) | ![illustration for SyncthingCard](../../homecloud-2/Brand/SyncthingCard.Local.png) | ![illustration for SyncthingGroup](../../homecloud-2/Brand/SyncthingGroup.Local.png) |




## Syncthing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Syncthing
include('homecloud-2/Brand/Syncthing')

' renders the element
Syncthing('Syncthing', 'Syncthing', 'an optional tech label')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Syncthing
include('homecloud-2/Brand/Syncthing')

' renders the element
Syncthing('Syncthing', 'Syncthing', 'an optional tech label')
@enduml
```

## SyncthingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element SyncthingCard
include('homecloud-2/Brand/Syncthing')

' renders the element
SyncthingCard('SyncthingCard', 'Syncthing Card', 'an optional description')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element SyncthingCard
include('homecloud-2/Brand/Syncthing')

' renders the element
SyncthingCard('SyncthingCard', 'Syncthing Card', 'an optional description')
@enduml
```

## SyncthingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element SyncthingGroup
include('homecloud-2/Brand/Syncthing')

' renders the element
SyncthingGroup('SyncthingGroup', 'Syncthing Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element SyncthingGroup
include('homecloud-2/Brand/Syncthing')

' renders the element
SyncthingGroup('SyncthingGroup', 'Syncthing Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

