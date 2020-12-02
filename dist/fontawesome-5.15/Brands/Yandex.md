# Yandex

```text
fontawesome-5.15/Brands/Yandex
```

```text
include('fontawesome-5.15/Brands/Yandex')
```

|icon|element|
|---|---|
|![](Yandex.png)|![](Yandex.element.png)|



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
' loads the Yandex element
include('fontawesome-5.15/Brands/Yandex')
Yandex('yandex', 'Yandex', 'an optional tech field')
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
' loads the Yandex element
include('fontawesome-5.15/Brands/Yandex')
Yandex('yandex', 'Yandex', 'an optional tech field')
@enduml
```

