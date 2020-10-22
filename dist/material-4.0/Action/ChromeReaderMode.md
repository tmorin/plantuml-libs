# Chrome Reader Mode

```text
material-4.0/Action/ChromeReaderMode
```

```text
include('material-4.0/Action/ChromeReaderMode')
```

|icon|element|
|---|---|
|![](ChromeReaderMode.png)|![](ChromeReaderMode.element.png)|



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
' loads the ChromeReaderMode element
include('material-4.0/Action/ChromeReaderMode')
ChromeReaderMode('chrome_reader_mode', 'Chrome Reader Mode', 'an optional tech field')
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
' loads the ChromeReaderMode element
include('material-4.0/Action/ChromeReaderMode')
ChromeReaderMode('chrome_reader_mode', 'Chrome Reader Mode', 'an optional tech field')
@enduml
```

