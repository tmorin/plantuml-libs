# TrainTram


```text
fontawesome-6/Solid/TrainTram
```

```text
include('fontawesome-6/Solid/TrainTram')
```



| Illustration | TrainTram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TrainTram.png) | ![illustration for TrainTram](../../fontawesome-6/Solid/TrainTram.Local.png) |




## TrainTram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TrainTram
include('fontawesome-6/Solid/TrainTram')

' renders the element
TrainTram('TrainTram', 'Train Tram', 'an optional tech label')
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

' loads the Item which embeds the element TrainTram
include('fontawesome-6/Solid/TrainTram')

' renders the element
TrainTram('TrainTram', 'Train Tram', 'an optional tech label')
@enduml
```

