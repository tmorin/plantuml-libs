# WeightHanging


```text
fontawesome-5/Solid/WeightHanging
```

```text
include('fontawesome-5/Solid/WeightHanging')
```



| Illustration | WeightHanging |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/WeightHanging.png) | ![illustration for WeightHanging](../../fontawesome-5/Solid/WeightHanging.Local.png) |




## WeightHanging

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WeightHanging
include('fontawesome-5/Solid/WeightHanging')

' renders the element
WeightHanging('WeightHanging', 'Weight Hanging', 'an optional tech label')
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

' loads the Item which embeds the element WeightHanging
include('fontawesome-5/Solid/WeightHanging')

' renders the element
WeightHanging('WeightHanging', 'Weight Hanging', 'an optional tech label')
@enduml
```

