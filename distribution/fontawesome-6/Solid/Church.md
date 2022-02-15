# Church


```text
fontawesome-6/Solid/Church
```

```text
include('fontawesome-6/Solid/Church')
```



| Illustration | Church |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Church.png) | ![illustration for Church](../../fontawesome-6/Solid/Church.Local.png) |




## Church

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Church
include('fontawesome-6/Solid/Church')

' renders the element
Church('Church', 'Church', 'an optional tech label')
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

' loads the Item which embeds the element Church
include('fontawesome-6/Solid/Church')

' renders the element
Church('Church', 'Church', 'an optional tech label')
@enduml
```

