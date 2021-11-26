# Skiing


```text
fontawesome-5/Solid/Skiing
```

```text
include('fontawesome-5/Solid/Skiing')
```



| Illustration | Skiing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Skiing.png) | ![illustration for Skiing](../../fontawesome-5/Solid/Skiing.Local.png) |




## Skiing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Skiing
include('fontawesome-5/Solid/Skiing')

' renders the element
Skiing('Skiing', 'Skiing', 'an optional tech label')
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

' loads the Item which embeds the element Skiing
include('fontawesome-5/Solid/Skiing')

' renders the element
Skiing('Skiing', 'Skiing', 'an optional tech label')
@enduml
```

