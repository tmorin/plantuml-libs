# Highlight Alt

```text
material-4.0/Action/HighlightAlt
```

```text
include('material-4.0/Action/HighlightAlt')
```

|icon|element|
|---|---|
|![](HighlightAlt.png)|![](HighlightAlt.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the HighlightAlt element
include('material-4.0/Action/HighlightAlt')
HighlightAlt('highlight_alt', 'Highlight Alt', 'an optional tech field')
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
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the HighlightAlt element
include('material-4.0/Action/HighlightAlt')
HighlightAlt('highlight_alt', 'Highlight Alt', 'an optional tech field')
@enduml
```

