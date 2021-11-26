# Calculate


```text
material-4/Content/Calculate
```

```text
include('material-4/Content/Calculate')
```



| Illustration | Calculate |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Calculate.png) | ![illustration for Calculate](../../material-4/Content/Calculate.Local.png) |




## Calculate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Calculate
include('material-4/Content/Calculate')

' renders the element
Calculate('Calculate', 'Calculate', 'an optional tech label')
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

' loads the Item which embeds the element Calculate
include('material-4/Content/Calculate')

' renders the element
Calculate('Calculate', 'Calculate', 'an optional tech label')
@enduml
```

