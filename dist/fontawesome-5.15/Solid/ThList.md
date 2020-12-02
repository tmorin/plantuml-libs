# Th List

```text
fontawesome-5.15/Solid/ThList
```

```text
include('fontawesome-5.15/Solid/ThList')
```

|icon|element|
|---|---|
|![](ThList.png)|![](ThList.element.png)|



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
' loads the ThList element
include('fontawesome-5.15/Solid/ThList')
ThList('th_list', 'Th List', 'an optional tech field')
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
' loads the ThList element
include('fontawesome-5.15/Solid/ThList')
ThList('th_list', 'Th List', 'an optional tech field')
@enduml
```

