# Socks


```text
fontawesome-6/Solid/Socks
```

```text
include('fontawesome-6/Solid/Socks')
```



| Illustration | Socks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Socks.png) | ![illustration for Socks](../../fontawesome-6/Solid/Socks.Local.png) |




## Socks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Socks
include('fontawesome-6/Solid/Socks')

' renders the element
Socks('Socks', 'Socks', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Socks
include('fontawesome-6/Solid/Socks')

' renders the element
Socks('Socks', 'Socks', 'an optional tech label')
@enduml
```

