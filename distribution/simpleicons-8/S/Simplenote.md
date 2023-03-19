# Simplenote


```text
simpleicons-8/S/Simplenote
```

```text
include('simpleicons-8/S/Simplenote')
```



| Illustration | Simplenote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Simplenote.png) | ![illustration for Simplenote](../../simpleicons-8/S/Simplenote.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Simplenote
include('simpleicons-8/S/Simplenote')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Simplenote
include('simpleicons-8/S/Simplenote')

' renders the element
Simplenote('Simplenote', 'Simplenote', 'an optional tech label', 'an optional description')
@enduml
```

