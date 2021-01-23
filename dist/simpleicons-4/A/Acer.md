# Acer

```text
simpleicons-4/A/Acer
```

```text
include('simpleicons-4/A/Acer')
```

|icon|element|
|---|---|
|![](Acer.png)|![](Acer.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Acer element
include('simpleicons-4/A/Acer')
Acer('acer', 'Acer', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Acer element
include('simpleicons-4/A/Acer')
Acer('acer', 'Acer', 'an optional tech field')
@enduml
```

