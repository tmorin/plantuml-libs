# Hryvnia


```text
fontawesome-5/Solid/Hryvnia
```

```text
include('fontawesome-5/Solid/Hryvnia')
```



| Illustration | Hryvnia |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hryvnia.png) | ![illustration for Hryvnia](../../fontawesome-5/Solid/Hryvnia.Local.png) |




## Hryvnia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hryvnia
include('fontawesome-5/Solid/Hryvnia')

' renders the element
Hryvnia('Hryvnia', 'Hryvnia', 'an optional tech label')
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

' loads the Item which embeds the element Hryvnia
include('fontawesome-5/Solid/Hryvnia')

' renders the element
Hryvnia('Hryvnia', 'Hryvnia', 'an optional tech label')
@enduml
```

