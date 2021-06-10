# Running


```text
fontawesome-5/Solid/Running
```

```text
include('fontawesome-5/Solid/Running')
```



| Illustration | Running |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Running.png) | ![illustration for Running](../../fontawesome-5/Solid/Running.Local.png) |




## Running

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Running
include('fontawesome-5/Solid/Running')

' renders the element
Running('Running', 'Running', 'an optional tech label')
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

' loads the Item which embeds the element Running
include('fontawesome-5/Solid/Running')

' renders the element
Running('Running', 'Running', 'an optional tech label')
@enduml
```

