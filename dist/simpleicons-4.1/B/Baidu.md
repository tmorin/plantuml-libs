# Baidu

```text
simpleicons-4.1/B/Baidu
```

```text
include('simpleicons-4.1/B/Baidu')
```

|icon|element|
|---|---|
|![](Baidu.png)|![](Baidu.element.png)|



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
' loads the Baidu element
include('simpleicons-4.1/B/Baidu')
Baidu('baidu', 'Baidu', 'an optional tech field')
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
' loads the Baidu element
include('simpleicons-4.1/B/Baidu')
Baidu('baidu', 'Baidu', 'an optional tech field')
@enduml
```

