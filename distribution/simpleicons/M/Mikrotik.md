# Mikrotik


```text
simpleicons/M/Mikrotik
```

```text
include('simpleicons/M/Mikrotik')
```



| Illustration | Mikrotik |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mikrotik.png) | ![illustration for Mikrotik](../../simpleicons/M/Mikrotik.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MikrotikXs>`
- `<$MikrotikSm>`
- `<$MikrotikMd>`
- `<$MikrotikLg>`





## Mikrotik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mikrotik
include('simpleicons/M/Mikrotik')

' renders the element
Mikrotik('Mikrotik', 'Mikrotik', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mikrotik
include('simpleicons/M/Mikrotik')

' renders the element
Mikrotik('Mikrotik', 'Mikrotik', 'an optional tech label', 'an optional description')
@enduml
```

