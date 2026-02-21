# Caddy


```text
simpleicons/C/Caddy
```

```text
include('simpleicons/C/Caddy')
```



| Illustration | Caddy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Caddy.png) | ![illustration for Caddy](../../simpleicons/C/Caddy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaddyXs>`
- `<$CaddySm>`
- `<$CaddyMd>`
- `<$CaddyLg>`





## Caddy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Caddy
include('simpleicons/C/Caddy')

' renders the element
Caddy('Caddy', 'Caddy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Caddy
include('simpleicons/C/Caddy')

' renders the element
Caddy('Caddy', 'Caddy', 'an optional tech label', 'an optional description')
@enduml
```

