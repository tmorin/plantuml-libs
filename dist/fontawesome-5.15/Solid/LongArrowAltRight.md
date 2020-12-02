# Long Arrow Alt Right

```text
fontawesome-5.15/Solid/LongArrowAltRight
```

```text
include('fontawesome-5.15/Solid/LongArrowAltRight')
```

|icon|element|
|---|---|
|![](LongArrowAltRight.png)|![](LongArrowAltRight.element.png)|



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
' loads the LongArrowAltRight element
include('fontawesome-5.15/Solid/LongArrowAltRight')
LongArrowAltRight('long_arrow_alt_right', 'Long Arrow Alt Right', 'an optional tech field')
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
' loads the LongArrowAltRight element
include('fontawesome-5.15/Solid/LongArrowAltRight')
LongArrowAltRight('long_arrow_alt_right', 'Long Arrow Alt Right', 'an optional tech field')
@enduml
```

