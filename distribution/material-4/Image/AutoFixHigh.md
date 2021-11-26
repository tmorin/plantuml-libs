# AutoFixHigh


```text
material-4/Image/AutoFixHigh
```

```text
include('material-4/Image/AutoFixHigh')
```



| Illustration | AutoFixHigh |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AutoFixHigh.png) | ![illustration for AutoFixHigh](../../material-4/Image/AutoFixHigh.Local.png) |




## AutoFixHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AutoFixHigh
include('material-4/Image/AutoFixHigh')

' renders the element
AutoFixHigh('AutoFixHigh', 'Auto Fix High', 'an optional tech label')
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

' loads the Item which embeds the element AutoFixHigh
include('material-4/Image/AutoFixHigh')

' renders the element
AutoFixHigh('AutoFixHigh', 'Auto Fix High', 'an optional tech label')
@enduml
```

