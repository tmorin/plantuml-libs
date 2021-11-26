# Code


```text
material-4/Action/Code
```

```text
include('material-4/Action/Code')
```



| Illustration | Code |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Code.png) | ![illustration for Code](../../material-4/Action/Code.Local.png) |




## Code

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Code
include('material-4/Action/Code')

' renders the element
Code('Code', 'Code', 'an optional tech label')
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

' loads the Item which embeds the element Code
include('material-4/Action/Code')

' renders the element
Code('Code', 'Code', 'an optional tech label')
@enduml
```

