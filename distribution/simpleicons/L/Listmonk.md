# Listmonk


```text
simpleicons/L/Listmonk
```

```text
include('simpleicons/L/Listmonk')
```



| Illustration | Listmonk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Listmonk.png) | ![illustration for Listmonk](../../simpleicons/L/Listmonk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ListmonkXs>`
- `<$ListmonkSm>`
- `<$ListmonkMd>`
- `<$ListmonkLg>`





## Listmonk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Listmonk
include('simpleicons/L/Listmonk')

' renders the element
Listmonk('Listmonk', 'Listmonk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Listmonk
include('simpleicons/L/Listmonk')

' renders the element
Listmonk('Listmonk', 'Listmonk', 'an optional tech label', 'an optional description')
@enduml
```

