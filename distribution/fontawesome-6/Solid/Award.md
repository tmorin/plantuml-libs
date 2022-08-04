# Award


```text
fontawesome-6/Solid/Award
```

```text
include('fontawesome-6/Solid/Award')
```



| Illustration | Award |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Award.png) | ![illustration for Award](../../fontawesome-6/Solid/Award.Local.png) |




## Award

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Award
include('fontawesome-6/Solid/Award')

' renders the element
Award('Award', 'Award', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Award
include('fontawesome-6/Solid/Award')

' renders the element
Award('Award', 'Award', 'an optional tech label', 'an optional description')
@enduml
```

