# Tint Slash

```text
fontawesome-5.15/Solid/TintSlash
```

```text
include('fontawesome-5.15/Solid/TintSlash')
```

|icon|element|
|---|---|
|![](TintSlash.png)|![](TintSlash.element.png)|



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
' loads the TintSlash element
include('fontawesome-5.15/Solid/TintSlash')
TintSlash('tint_slash', 'Tint Slash', 'an optional tech field')
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
' loads the TintSlash element
include('fontawesome-5.15/Solid/TintSlash')
TintSlash('tint_slash', 'Tint Slash', 'an optional tech field')
@enduml
```

