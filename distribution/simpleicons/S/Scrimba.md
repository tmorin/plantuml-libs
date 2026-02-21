# Scrimba


```text
simpleicons/S/Scrimba
```

```text
include('simpleicons/S/Scrimba')
```



| Illustration | Scrimba |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Scrimba.png) | ![illustration for Scrimba](../../simpleicons/S/Scrimba.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScrimbaXs>`
- `<$ScrimbaSm>`
- `<$ScrimbaMd>`
- `<$ScrimbaLg>`





## Scrimba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Scrimba
include('simpleicons/S/Scrimba')

' renders the element
Scrimba('Scrimba', 'Scrimba', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scrimba
include('simpleicons/S/Scrimba')

' renders the element
Scrimba('Scrimba', 'Scrimba', 'an optional tech label', 'an optional description')
@enduml
```

