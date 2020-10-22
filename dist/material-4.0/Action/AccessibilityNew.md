# Accessibility New

```text
material-4.0/Action/AccessibilityNew
```

```text
include('material-4.0/Action/AccessibilityNew')
```

|icon|element|
|---|---|
|![](AccessibilityNew.png)|![](AccessibilityNew.element.png)|



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
' loads the AccessibilityNew element
include('material-4.0/Action/AccessibilityNew')
AccessibilityNew('accessibility_new', 'Accessibility New', 'an optional tech field')
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
' loads the AccessibilityNew element
include('material-4.0/Action/AccessibilityNew')
AccessibilityNew('accessibility_new', 'Accessibility New', 'an optional tech field')
@enduml
```

