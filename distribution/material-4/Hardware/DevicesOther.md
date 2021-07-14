# DevicesOther


```text
material-4/Hardware/DevicesOther
```

```text
include('material-4/Hardware/DevicesOther')
```



| Illustration | DevicesOther |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/DevicesOther.png) | ![illustration for DevicesOther](../../material-4/Hardware/DevicesOther.Local.png) |




## DevicesOther

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DevicesOther
include('material-4/Hardware/DevicesOther')

' renders the element
DevicesOther('DevicesOther', 'Devices Other', 'an optional tech label')
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

' loads the Item which embeds the element DevicesOther
include('material-4/Hardware/DevicesOther')

' renders the element
DevicesOther('DevicesOther', 'Devices Other', 'an optional tech label')
@enduml
```

