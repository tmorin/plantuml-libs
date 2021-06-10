# Train


```text
fontawesome-5/Solid/Train
```

```text
include('fontawesome-5/Solid/Train')
```



| Illustration | Train |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Train.png) | ![illustration for Train](../../fontawesome-5/Solid/Train.Local.png) |




## Train

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Train
include('fontawesome-5/Solid/Train')

' renders the element
Train('Train', 'Train', 'an optional tech label')
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

' loads the Item which embeds the element Train
include('fontawesome-5/Solid/Train')

' renders the element
Train('Train', 'Train', 'an optional tech label')
@enduml
```

