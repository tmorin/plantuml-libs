# Dash


```text
simpleicons-7/D/Dash
```

```text
include('simpleicons-7/D/Dash')
```



| Illustration | Dash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dash.png) | ![illustration for Dash](../../simpleicons-7/D/Dash.Local.png) |




## Dash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dash
include('simpleicons-7/D/Dash')

' renders the element
Dash('Dash', 'Dash', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dash
include('simpleicons-7/D/Dash')

' renders the element
Dash('Dash', 'Dash', 'an optional tech label')
@enduml
```

