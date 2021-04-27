# Application

```text
eip/MessagingEndpoints/Application
```

```text
include('eip/MessagingEndpoints/Application')
```

|icon|element|
|---|---|
|![](Application.png)|![](Application.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the Application element
include('eip/MessagingEndpoints/Application')
Application('application', 'Application', 'an optional tech field')
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
' loads the eip bootstrap
include('eip/bootstrap')
' loads the Application element
include('eip/MessagingEndpoints/Application')
Application('application', 'Application', 'an optional tech field')
@enduml
```

