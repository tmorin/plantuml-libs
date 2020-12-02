# Wine Bottle

```text
fontawesome-5.15/Solid/WineBottle
```

```text
include('fontawesome-5.15/Solid/WineBottle')
```

|icon|element|
|---|---|
|![](WineBottle.png)|![](WineBottle.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the WineBottle element
include('fontawesome-5.15/Solid/WineBottle')
WineBottle('wine_bottle', 'Wine Bottle', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the WineBottle element
include('fontawesome-5.15/Solid/WineBottle')
WineBottle('wine_bottle', 'Wine Bottle', 'an optional tech field')
@enduml
```

