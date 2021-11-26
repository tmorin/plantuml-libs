# Crutch


```text
fontawesome-5/Solid/Crutch
```

```text
include('fontawesome-5/Solid/Crutch')
```



| Illustration | Crutch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Crutch.png) | ![illustration for Crutch](../../fontawesome-5/Solid/Crutch.Local.png) |




## Crutch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Crutch
include('fontawesome-5/Solid/Crutch')

' renders the element
Crutch('Crutch', 'Crutch', 'an optional tech label')
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

' loads the Item which embeds the element Crutch
include('fontawesome-5/Solid/Crutch')

' renders the element
Crutch('Crutch', 'Crutch', 'an optional tech label')
@enduml
```

