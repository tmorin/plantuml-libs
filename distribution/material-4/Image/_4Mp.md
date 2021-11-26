# _4Mp


```text
material-4/Image/_4Mp
```

```text
include('material-4/Image/_4Mp')
```



| Illustration | _4Mp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/_4Mp.png) | ![illustration for _4Mp](../../material-4/Image/_4Mp.Local.png) |




## _4Mp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _4Mp
include('material-4/Image/_4Mp')

' renders the element
_4Mp('4mp', '4mp', 'an optional tech label')
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

' loads the Item which embeds the element _4Mp
include('material-4/Image/_4Mp')

' renders the element
_4Mp('4mp', '4mp', 'an optional tech label')
@enduml
```

