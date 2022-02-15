# Flask


```text
fontawesome-6/Solid/Flask
```

```text
include('fontawesome-6/Solid/Flask')
```



| Illustration | Flask |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Flask.png) | ![illustration for Flask](../../fontawesome-6/Solid/Flask.Local.png) |




## Flask

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Flask
include('fontawesome-6/Solid/Flask')

' renders the element
Flask('Flask', 'Flask', 'an optional tech label')
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

' loads the Item which embeds the element Flask
include('fontawesome-6/Solid/Flask')

' renders the element
Flask('Flask', 'Flask', 'an optional tech label')
@enduml
```

