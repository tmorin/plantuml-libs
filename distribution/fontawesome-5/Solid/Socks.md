# Socks


```text
fontawesome-5/Solid/Socks
```

```text
include('fontawesome-5/Solid/Socks')
```



| Illustration | Socks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Socks.png) | ![illustration for Socks](../../fontawesome-5/Solid/Socks.Local.png) |




## Socks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Socks
include('fontawesome-5/Solid/Socks')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Socks
include('fontawesome-5/Solid/Socks')

' renders the element
Socks('Socks', 'Socks', 'an optional tech label')
@enduml
```

