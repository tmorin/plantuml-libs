# _2Mp


```text
material-4/Image/_2Mp
```

```text
include('material-4/Image/_2Mp')
```



| Illustration | _2Mp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/_2Mp.png) | ![illustration for _2Mp](../../material-4/Image/_2Mp.Local.png) |




## _2Mp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _2Mp
include('material-4/Image/_2Mp')

' renders the element
_2Mp('2mp', '2mp', 'an optional tech label')
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

' loads the Item which embeds the element _2Mp
include('material-4/Image/_2Mp')

' renders the element
_2Mp('2mp', '2mp', 'an optional tech label')
@enduml
```

