# Viaplay


```text
simpleicons-14/V/Viaplay
```

```text
include('simpleicons-14/V/Viaplay')
```



| Illustration | Viaplay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Viaplay.png) | ![illustration for Viaplay](../../simpleicons-14/V/Viaplay.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Viaplay
include('simpleicons-14/V/Viaplay')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Viaplay
include('simpleicons-14/V/Viaplay')

' renders the element
Viaplay('Viaplay', 'Viaplay', 'an optional tech label', 'an optional description')
@enduml
```

