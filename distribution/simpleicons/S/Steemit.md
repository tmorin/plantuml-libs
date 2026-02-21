# Steemit


```text
simpleicons/S/Steemit
```

```text
include('simpleicons/S/Steemit')
```



| Illustration | Steemit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Steemit.png) | ![illustration for Steemit](../../simpleicons/S/Steemit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SteemitXs>`
- `<$SteemitSm>`
- `<$SteemitMd>`
- `<$SteemitLg>`





## Steemit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Steemit
include('simpleicons/S/Steemit')

' renders the element
Steemit('Steemit', 'Steemit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Steemit
include('simpleicons/S/Steemit')

' renders the element
Steemit('Steemit', 'Steemit', 'an optional tech label', 'an optional description')
@enduml
```

