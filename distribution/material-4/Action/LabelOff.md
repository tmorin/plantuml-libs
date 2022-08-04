# LabelOff


```text
material-4/Action/LabelOff
```

```text
include('material-4/Action/LabelOff')
```



| Illustration | LabelOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LabelOff.png) | ![illustration for LabelOff](../../material-4/Action/LabelOff.Local.png) |




## LabelOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LabelOff
include('material-4/Action/LabelOff')

' renders the element
LabelOff('LabelOff', 'Label Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LabelOff
include('material-4/Action/LabelOff')

' renders the element
LabelOff('LabelOff', 'Label Off', 'an optional tech label', 'an optional description')
@enduml
```

