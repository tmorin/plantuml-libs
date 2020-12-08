# Qiita

```text
simpleicons-4.1/Q/Qiita
```

```text
include('simpleicons-4.1/Q/Qiita')
```

|icon|element|
|---|---|
|![](Qiita.png)|![](Qiita.element.png)|



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
' loads the Qiita element
include('simpleicons-4.1/Q/Qiita')
Qiita('qiita', 'Qiita', 'an optional tech field')
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
' loads the Qiita element
include('simpleicons-4.1/Q/Qiita')
Qiita('qiita', 'Qiita', 'an optional tech field')
@enduml
```

