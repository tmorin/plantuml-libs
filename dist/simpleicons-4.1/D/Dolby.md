# Dolby

```text
simpleicons-4.1/D/Dolby
```

```text
include('simpleicons-4.1/D/Dolby')
```

|icon|element|
|---|---|
|![](Dolby.png)|![](Dolby.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Dolby element
include('simpleicons-4.1/D/Dolby')
Dolby('dolby', 'Dolby', 'an optional tech field')
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
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Dolby element
include('simpleicons-4.1/D/Dolby')
Dolby('dolby', 'Dolby', 'an optional tech field')
@enduml
```

