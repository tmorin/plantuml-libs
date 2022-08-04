# Simplenote


```text
simpleicons-7/S/Simplenote
```

```text
include('simpleicons-7/S/Simplenote')
```



| Illustration | Simplenote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Simplenote.png) | ![illustration for Simplenote](../../simpleicons-7/S/Simplenote.Local.png) |




## Simplenote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Simplenote
include('simpleicons-7/S/Simplenote')

' renders the element
Simplenote('Simplenote', 'Simplenote', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Simplenote
include('simpleicons-7/S/Simplenote')

' renders the element
Simplenote('Simplenote', 'Simplenote', 'an optional tech label', 'an optional description')
@enduml
```

