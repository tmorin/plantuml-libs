# Viaplay


```text
simpleicons/V/Viaplay
```

```text
include('simpleicons/V/Viaplay')
```



| Illustration | Viaplay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Viaplay.png) | ![illustration for Viaplay](../../simpleicons/V/Viaplay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViaplayXs>`
- `<$ViaplaySm>`
- `<$ViaplayMd>`
- `<$ViaplayLg>`





## Viaplay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Viaplay
include('simpleicons/V/Viaplay')

' renders the element
Viaplay('Viaplay', 'Viaplay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Viaplay
include('simpleicons/V/Viaplay')

' renders the element
Viaplay('Viaplay', 'Viaplay', 'an optional tech label', 'an optional description')
@enduml
```

