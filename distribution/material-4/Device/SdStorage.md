# SdStorage


```text
material-4/Device/SdStorage
```

```text
include('material-4/Device/SdStorage')
```



| Illustration | SdStorage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SdStorage.png) | ![illustration for SdStorage](../../material-4/Device/SdStorage.Local.png) |




## SdStorage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SdStorage
include('material-4/Device/SdStorage')

' renders the element
SdStorage('SdStorage', 'Sd Storage', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SdStorage
include('material-4/Device/SdStorage')

' renders the element
SdStorage('SdStorage', 'Sd Storage', 'an optional tech label')
@enduml
```

