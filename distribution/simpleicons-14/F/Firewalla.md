# Firewalla


```text
simpleicons-14/F/Firewalla
```

```text
include('simpleicons-14/F/Firewalla')
```



| Illustration | Firewalla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Firewalla.png) | ![illustration for Firewalla](../../simpleicons-14/F/Firewalla.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FirewallaXs>`
- `<$FirewallaSm>`
- `<$FirewallaMd>`
- `<$FirewallaLg>`





## Firewalla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Firewalla
include('simpleicons-14/F/Firewalla')

' renders the element
Firewalla('Firewalla', 'Firewalla', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Firewalla
include('simpleicons-14/F/Firewalla')

' renders the element
Firewalla('Firewalla', 'Firewalla', 'an optional tech label', 'an optional description')
@enduml
```

