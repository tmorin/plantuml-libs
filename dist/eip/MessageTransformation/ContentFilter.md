# Content Filter

```text
eip/MessageTransformation/ContentFilter
```

```text
include('eip/MessageTransformation/ContentFilter')
```

|icon|element|
|---|---|
|![](ContentFilter.png)|![](ContentFilter.element.png)|



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
' loads the ContentFilter element
include('eip/MessageTransformation/ContentFilter')
ContentFilter('content_filter', 'Content Filter', 'an optional tech field')
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
' loads the ContentFilter element
include('eip/MessageTransformation/ContentFilter')
ContentFilter('content_filter', 'Content Filter', 'an optional tech field')
@enduml
```

