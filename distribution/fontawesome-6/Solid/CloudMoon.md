# CloudMoon


```text
fontawesome-6/Solid/CloudMoon
```

```text
include('fontawesome-6/Solid/CloudMoon')
```



| Illustration | CloudMoon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudMoon.png) | ![illustration for CloudMoon](../../fontawesome-6/Solid/CloudMoon.Local.png) |




## CloudMoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudMoon
include('fontawesome-6/Solid/CloudMoon')

' renders the element
CloudMoon('CloudMoon', 'Cloud Moon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudMoon
include('fontawesome-6/Solid/CloudMoon')

' renders the element
CloudMoon('CloudMoon', 'Cloud Moon', 'an optional tech label', 'an optional description')
@enduml
```

