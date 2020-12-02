# Long Arrow Alt Down

```text
fontawesome-5.15/Solid/LongArrowAltDown
```

```text
include('fontawesome-5.15/Solid/LongArrowAltDown')
```

|icon|element|
|---|---|
|![](LongArrowAltDown.png)|![](LongArrowAltDown.element.png)|



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
' loads the LongArrowAltDown element
include('fontawesome-5.15/Solid/LongArrowAltDown')
LongArrowAltDown('long_arrow_alt_down', 'Long Arrow Alt Down', 'an optional tech field')
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
' loads the LongArrowAltDown element
include('fontawesome-5.15/Solid/LongArrowAltDown')
LongArrowAltDown('long_arrow_alt_down', 'Long Arrow Alt Down', 'an optional tech field')
@enduml
```

