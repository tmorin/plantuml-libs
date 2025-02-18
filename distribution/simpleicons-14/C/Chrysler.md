# Chrysler


```text
simpleicons-14/C/Chrysler
```

```text
include('simpleicons-14/C/Chrysler')
```



| Illustration | Chrysler |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chrysler.png) | ![illustration for Chrysler](../../simpleicons-14/C/Chrysler.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChryslerXs>`
- `<$ChryslerSm>`
- `<$ChryslerMd>`
- `<$ChryslerLg>`





## Chrysler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chrysler
include('simpleicons-14/C/Chrysler')

' renders the element
Chrysler('Chrysler', 'Chrysler', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chrysler
include('simpleicons-14/C/Chrysler')

' renders the element
Chrysler('Chrysler', 'Chrysler', 'an optional tech label', 'an optional description')
@enduml
```

