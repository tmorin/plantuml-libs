# Splotch


```text
fontawesome-5/Solid/Splotch
```

```text
include('fontawesome-5/Solid/Splotch')
```



| Illustration | Splotch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Splotch.png) | ![illustration for Splotch](../../fontawesome-5/Solid/Splotch.Local.png) |




## Splotch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Splotch
include('fontawesome-5/Solid/Splotch')

' renders the element
Splotch('Splotch', 'Splotch', 'an optional tech label')
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

' loads the Item which embeds the element Splotch
include('fontawesome-5/Solid/Splotch')

' renders the element
Splotch('Splotch', 'Splotch', 'an optional tech label')
@enduml
```

