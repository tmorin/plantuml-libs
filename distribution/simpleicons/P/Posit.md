# Posit


```text
simpleicons/P/Posit
```

```text
include('simpleicons/P/Posit')
```



| Illustration | Posit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Posit.png) | ![illustration for Posit](../../simpleicons/P/Posit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PositXs>`
- `<$PositSm>`
- `<$PositMd>`
- `<$PositLg>`





## Posit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Posit
include('simpleicons/P/Posit')

' renders the element
Posit('Posit', 'Posit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Posit
include('simpleicons/P/Posit')

' renders the element
Posit('Posit', 'Posit', 'an optional tech label', 'an optional description')
@enduml
```

