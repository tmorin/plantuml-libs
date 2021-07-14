# LineWeight


```text
material-4/Action/LineWeight
```

```text
include('material-4/Action/LineWeight')
```



| Illustration | LineWeight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LineWeight.png) | ![illustration for LineWeight](../../material-4/Action/LineWeight.Local.png) |




## LineWeight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LineWeight
include('material-4/Action/LineWeight')

' renders the element
LineWeight('LineWeight', 'Line Weight', 'an optional tech label')
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

' loads the Item which embeds the element LineWeight
include('material-4/Action/LineWeight')

' renders the element
LineWeight('LineWeight', 'Line Weight', 'an optional tech label')
@enduml
```

