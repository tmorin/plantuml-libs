# Splotch


```text
fontawesome-6/Solid/Splotch
```

```text
include('fontawesome-6/Solid/Splotch')
```



| Illustration | Splotch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Splotch.png) | ![illustration for Splotch](../../fontawesome-6/Solid/Splotch.Local.png) |




## Splotch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Splotch
include('fontawesome-6/Solid/Splotch')

' renders the element
Splotch('Splotch', 'Splotch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Splotch
include('fontawesome-6/Solid/Splotch')

' renders the element
Splotch('Splotch', 'Splotch', 'an optional tech label', 'an optional description')
@enduml
```

