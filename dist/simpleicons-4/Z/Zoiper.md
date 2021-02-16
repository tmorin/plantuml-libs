# Zoiper

```text
simpleicons-4/Z/Zoiper
```

```text
include('simpleicons-4/Z/Zoiper')
```

|icon|element|
|---|---|
|![](Zoiper.png)|![](Zoiper.element.png)|



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
' loads the Zoiper element
include('simpleicons-4/Z/Zoiper')
Zoiper('zoiper', 'Zoiper', 'an optional tech field')
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
' loads the Zoiper element
include('simpleicons-4/Z/Zoiper')
Zoiper('zoiper', 'Zoiper', 'an optional tech field')
@enduml
```

