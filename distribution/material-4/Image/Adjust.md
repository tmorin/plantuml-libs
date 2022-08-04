# Adjust


```text
material-4/Image/Adjust
```

```text
include('material-4/Image/Adjust')
```



| Illustration | Adjust |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Adjust.png) | ![illustration for Adjust](../../material-4/Image/Adjust.Local.png) |




## Adjust

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Adjust
include('material-4/Image/Adjust')

' renders the element
Adjust('Adjust', 'Adjust', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adjust
include('material-4/Image/Adjust')

' renders the element
Adjust('Adjust', 'Adjust', 'an optional tech label', 'an optional description')
@enduml
```

