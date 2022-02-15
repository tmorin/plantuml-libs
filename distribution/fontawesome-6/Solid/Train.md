# Train


```text
fontawesome-6/Solid/Train
```

```text
include('fontawesome-6/Solid/Train')
```



| Illustration | Train |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Train.png) | ![illustration for Train](../../fontawesome-6/Solid/Train.Local.png) |




## Train

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Train
include('fontawesome-6/Solid/Train')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Train
include('fontawesome-6/Solid/Train')

' renders the element
Train('Train', 'Train', 'an optional tech label')
@enduml
```

