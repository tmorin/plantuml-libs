# Bit

```text
simpleicons-4/B/Bit
```

```text
include('simpleicons-4/B/Bit')
```

|icon|element|
|---|---|
|![](Bit.png)|![](Bit.element.png)|



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
' loads the Bit element
include('simpleicons-4/B/Bit')
Bit('bit', 'Bit', 'an optional tech field')
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
' loads the Bit element
include('simpleicons-4/B/Bit')
Bit('bit', 'Bit', 'an optional tech field')
@enduml
```
