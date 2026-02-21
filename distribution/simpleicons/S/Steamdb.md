# Steamdb


```text
simpleicons/S/Steamdb
```

```text
include('simpleicons/S/Steamdb')
```



| Illustration | Steamdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Steamdb.png) | ![illustration for Steamdb](../../simpleicons/S/Steamdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SteamdbXs>`
- `<$SteamdbSm>`
- `<$SteamdbMd>`
- `<$SteamdbLg>`





## Steamdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Steamdb
include('simpleicons/S/Steamdb')

' renders the element
Steamdb('Steamdb', 'Steamdb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Steamdb
include('simpleicons/S/Steamdb')

' renders the element
Steamdb('Steamdb', 'Steamdb', 'an optional tech label', 'an optional description')
@enduml
```

