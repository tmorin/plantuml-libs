# Crop32


```text
material-4/Image/Crop32
```

```text
include('material-4/Image/Crop32')
```



| Illustration | Crop32 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Crop32.png) | ![illustration for Crop32](../../material-4/Image/Crop32.Local.png) |




## Crop32

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Crop32
include('material-4/Image/Crop32')

' renders the element
Crop32('Crop32', 'Crop32', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crop32
include('material-4/Image/Crop32')

' renders the element
Crop32('Crop32', 'Crop32', 'an optional tech label', 'an optional description')
@enduml
```

