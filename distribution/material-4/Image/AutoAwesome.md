# AutoAwesome


```text
material-4/Image/AutoAwesome
```

```text
include('material-4/Image/AutoAwesome')
```



| Illustration | AutoAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AutoAwesome.png) | ![illustration for AutoAwesome](../../material-4/Image/AutoAwesome.Local.png) |




## AutoAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AutoAwesome
include('material-4/Image/AutoAwesome')

' renders the element
AutoAwesome('AutoAwesome', 'Auto Awesome', 'an optional tech label')
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

' loads the Item which embeds the element AutoAwesome
include('material-4/Image/AutoAwesome')

' renders the element
AutoAwesome('AutoAwesome', 'Auto Awesome', 'an optional tech label')
@enduml
```

