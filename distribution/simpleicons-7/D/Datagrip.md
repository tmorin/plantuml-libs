# Datagrip


```text
simpleicons-7/D/Datagrip
```

```text
include('simpleicons-7/D/Datagrip')
```



| Illustration | Datagrip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Datagrip.png) | ![illustration for Datagrip](../../simpleicons-7/D/Datagrip.Local.png) |




## Datagrip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Datagrip
include('simpleicons-7/D/Datagrip')

' renders the element
Datagrip('Datagrip', 'Datagrip', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Datagrip
include('simpleicons-7/D/Datagrip')

' renders the element
Datagrip('Datagrip', 'Datagrip', 'an optional tech label')
@enduml
```

