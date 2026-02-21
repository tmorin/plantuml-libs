# Authentik


```text
simpleicons/A/Authentik
```

```text
include('simpleicons/A/Authentik')
```



| Illustration | Authentik |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Authentik.png) | ![illustration for Authentik](../../simpleicons/A/Authentik.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AuthentikXs>`
- `<$AuthentikSm>`
- `<$AuthentikMd>`
- `<$AuthentikLg>`





## Authentik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Authentik
include('simpleicons/A/Authentik')

' renders the element
Authentik('Authentik', 'Authentik', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Authentik
include('simpleicons/A/Authentik')

' renders the element
Authentik('Authentik', 'Authentik', 'an optional tech label', 'an optional description')
@enduml
```

