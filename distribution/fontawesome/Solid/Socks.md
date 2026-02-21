# Socks


```text
fontawesome/Solid/Socks
```

```text
include('fontawesome/Solid/Socks')
```



| Illustration | Socks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Socks.png) | ![illustration for Socks](../../fontawesome/Solid/Socks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SocksXs>`
- `<$SocksSm>`
- `<$SocksMd>`
- `<$SocksLg>`





## Socks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Socks
include('fontawesome/Solid/Socks')

' renders the element
Socks('Socks', 'Socks', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Socks
include('fontawesome/Solid/Socks')

' renders the element
Socks('Socks', 'Socks', 'an optional tech label', 'an optional description')
@enduml
```

