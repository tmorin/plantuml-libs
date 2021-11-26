# AutoFixNormal


```text
material-4/Image/AutoFixNormal
```

```text
include('material-4/Image/AutoFixNormal')
```



| Illustration | AutoFixNormal |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AutoFixNormal.png) | ![illustration for AutoFixNormal](../../material-4/Image/AutoFixNormal.Local.png) |




## AutoFixNormal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AutoFixNormal
include('material-4/Image/AutoFixNormal')

' renders the element
AutoFixNormal('AutoFixNormal', 'Auto Fix Normal', 'an optional tech label')
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

' loads the Item which embeds the element AutoFixNormal
include('material-4/Image/AutoFixNormal')

' renders the element
AutoFixNormal('AutoFixNormal', 'Auto Fix Normal', 'an optional tech label')
@enduml
```

