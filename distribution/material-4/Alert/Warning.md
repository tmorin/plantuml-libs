# Warning


```text
material-4/Alert/Warning
```

```text
include('material-4/Alert/Warning')
```



| Illustration | Warning |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Alert/Warning.png) | ![illustration for Warning](../../material-4/Alert/Warning.Local.png) |




## Warning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Warning
include('material-4/Alert/Warning')

' renders the element
Warning('Warning', 'Warning', 'an optional tech label')
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

' loads the Item which embeds the element Warning
include('material-4/Alert/Warning')

' renders the element
Warning('Warning', 'Warning', 'an optional tech label')
@enduml
```

