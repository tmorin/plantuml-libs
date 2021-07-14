# _8Mp


```text
material-4/Image/_8Mp
```

```text
include('material-4/Image/_8Mp')
```



| Illustration | _8Mp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/_8Mp.png) | ![illustration for _8Mp](../../material-4/Image/_8Mp.Local.png) |




## _8Mp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _8Mp
include('material-4/Image/_8Mp')

' renders the element
_8Mp('8mp', '8mp', 'an optional tech label')
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

' loads the Item which embeds the element _8Mp
include('material-4/Image/_8Mp')

' renders the element
_8Mp('8mp', '8mp', 'an optional tech label')
@enduml
```

