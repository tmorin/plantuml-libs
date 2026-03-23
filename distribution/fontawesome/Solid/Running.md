# Running


```text
fontawesome/Solid/Running
```

```text
include('fontawesome/Solid/Running')
```



| Illustration | Running |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Running.png) | ![illustration for Running](../../fontawesome/Solid/Running.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RunningXs>`
- `<$RunningSm>`
- `<$RunningMd>`
- `<$RunningLg>`





## Running

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Running
include('fontawesome/Solid/Running')

' renders the element
Running('Running', 'Running', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Running
include('fontawesome/Solid/Running')

' renders the element
Running('Running', 'Running', 'an optional tech label', 'an optional description')
@enduml
```

