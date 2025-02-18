# Dash


```text
simpleicons-14/D/Dash
```

```text
include('simpleicons-14/D/Dash')
```



| Illustration | Dash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dash.png) | ![illustration for Dash](../../simpleicons-14/D/Dash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DashXs>`
- `<$DashSm>`
- `<$DashMd>`
- `<$DashLg>`





## Dash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dash
include('simpleicons-14/D/Dash')

' renders the element
Dash('Dash', 'Dash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dash
include('simpleicons-14/D/Dash')

' renders the element
Dash('Dash', 'Dash', 'an optional tech label', 'an optional description')
@enduml
```

