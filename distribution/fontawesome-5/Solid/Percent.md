# Percent


```text
fontawesome-5/Solid/Percent
```

```text
include('fontawesome-5/Solid/Percent')
```



| Illustration | Percent |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Percent.png) | ![illustration for Percent](../../fontawesome-5/Solid/Percent.Local.png) |




## Percent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Percent
include('fontawesome-5/Solid/Percent')

' renders the element
Percent('Percent', 'Percent', 'an optional tech label')
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

' loads the Item which embeds the element Percent
include('fontawesome-5/Solid/Percent')

' renders the element
Percent('Percent', 'Percent', 'an optional tech label')
@enduml
```

