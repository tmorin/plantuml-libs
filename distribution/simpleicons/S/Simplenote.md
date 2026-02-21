# Simplenote


```text
simpleicons/S/Simplenote
```

```text
include('simpleicons/S/Simplenote')
```



| Illustration | Simplenote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Simplenote.png) | ![illustration for Simplenote](../../simpleicons/S/Simplenote.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimplenoteXs>`
- `<$SimplenoteSm>`
- `<$SimplenoteMd>`
- `<$SimplenoteLg>`





## Simplenote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Simplenote
include('simpleicons/S/Simplenote')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Simplenote
include('simpleicons/S/Simplenote')

' renders the element
Simplenote('Simplenote', 'Simplenote', 'an optional tech label', 'an optional description')
@enduml
```

