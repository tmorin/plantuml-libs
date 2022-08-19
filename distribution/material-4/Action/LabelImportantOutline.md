# LabelImportantOutline


```text
material-4/Action/LabelImportantOutline
```

```text
include('material-4/Action/LabelImportantOutline')
```



| Illustration | LabelImportantOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LabelImportantOutline.png) | ![illustration for LabelImportantOutline](../../material-4/Action/LabelImportantOutline.Local.png) |




## LabelImportantOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LabelImportantOutline
include('material-4/Action/LabelImportantOutline')

' renders the element
LabelImportantOutline('LabelImportantOutline', 'Label Important Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LabelImportantOutline
include('material-4/Action/LabelImportantOutline')

' renders the element
LabelImportantOutline('LabelImportantOutline', 'Label Important Outline', 'an optional tech label', 'an optional description')
@enduml
```
