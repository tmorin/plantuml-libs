# Cart Arrow Down

```text
fontawesome-5.15/Solid/CartArrowDown
```

```text
include('fontawesome-5.15/Solid/CartArrowDown')
```

|icon|element|
|---|---|
|![](CartArrowDown.png)|![](CartArrowDown.element.png)|



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
' loads the CartArrowDown element
include('fontawesome-5.15/Solid/CartArrowDown')
CartArrowDown('cart_arrow_down', 'Cart Arrow Down', 'an optional tech field')
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
' loads the CartArrowDown element
include('fontawesome-5.15/Solid/CartArrowDown')
CartArrowDown('cart_arrow_down', 'Cart Arrow Down', 'an optional tech field')
@enduml
```

