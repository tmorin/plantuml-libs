# Protonvpn


```text
simpleicons-14/P/Protonvpn
```

```text
include('simpleicons-14/P/Protonvpn')
```



| Illustration | Protonvpn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Protonvpn.png) | ![illustration for Protonvpn](../../simpleicons-14/P/Protonvpn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProtonvpnXs>`
- `<$ProtonvpnSm>`
- `<$ProtonvpnMd>`
- `<$ProtonvpnLg>`





## Protonvpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Protonvpn
include('simpleicons-14/P/Protonvpn')

' renders the element
Protonvpn('Protonvpn', 'Protonvpn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Protonvpn
include('simpleicons-14/P/Protonvpn')

' renders the element
Protonvpn('Protonvpn', 'Protonvpn', 'an optional tech label', 'an optional description')
@enduml
```

