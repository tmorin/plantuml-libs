# _7Mp


```text
material-4/Image/_7Mp
```

```text
include('material-4/Image/_7Mp')
```



| Illustration | _7Mp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/_7Mp.png) | ![illustration for _7Mp](../../material-4/Image/_7Mp.Local.png) |




## _7Mp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _7Mp
include('material-4/Image/_7Mp')

' renders the element
_7Mp('7mp', '7mp', 'an optional tech label')
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

' loads the Item which embeds the element _7Mp
include('material-4/Image/_7Mp')

' renders the element
_7Mp('7mp', '7mp', 'an optional tech label')
@enduml
```

