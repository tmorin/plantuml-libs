# University


```text
fontawesome-5/Solid/University
```

```text
include('fontawesome-5/Solid/University')
```



| Illustration | University |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/University.png) | ![illustration for University](../../fontawesome-5/Solid/University.Local.png) |




## University

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element University
include('fontawesome-5/Solid/University')

' renders the element
University('University', 'University', 'an optional tech label')
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

' loads the Item which embeds the element University
include('fontawesome-5/Solid/University')

' renders the element
University('University', 'University', 'an optional tech label')
@enduml
```

