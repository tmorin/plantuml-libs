# Long Arrow Alt Up

```text
fontawesome-5.15/Solid/LongArrowAltUp
```

```text
include('fontawesome-5.15/Solid/LongArrowAltUp')
```

|icon|element|
|---|---|
|![](LongArrowAltUp.png)|![](LongArrowAltUp.element.png)|



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
' loads the LongArrowAltUp element
include('fontawesome-5.15/Solid/LongArrowAltUp')
LongArrowAltUp('long_arrow_alt_up', 'Long Arrow Alt Up', 'an optional tech field')
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
' loads the LongArrowAltUp element
include('fontawesome-5.15/Solid/LongArrowAltUp')
LongArrowAltUp('long_arrow_alt_up', 'Long Arrow Alt Up', 'an optional tech field')
@enduml
```

