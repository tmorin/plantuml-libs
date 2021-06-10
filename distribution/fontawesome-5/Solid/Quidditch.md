# Quidditch


```text
fontawesome-5/Solid/Quidditch
```

```text
include('fontawesome-5/Solid/Quidditch')
```



| Illustration | Quidditch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Quidditch.png) | ![illustration for Quidditch](../../fontawesome-5/Solid/Quidditch.Local.png) |




## Quidditch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Quidditch
include('fontawesome-5/Solid/Quidditch')

' renders the element
Quidditch('Quidditch', 'Quidditch', 'an optional tech label')
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

' loads the Item which embeds the element Quidditch
include('fontawesome-5/Solid/Quidditch')

' renders the element
Quidditch('Quidditch', 'Quidditch', 'an optional tech label')
@enduml
```

