# UnfoldLess


```text
material-4/Navigation/UnfoldLess
```

```text
include('material-4/Navigation/UnfoldLess')
```



| Illustration | UnfoldLess |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/UnfoldLess.png) | ![illustration for UnfoldLess](../../material-4/Navigation/UnfoldLess.Local.png) |




## UnfoldLess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element UnfoldLess
include('material-4/Navigation/UnfoldLess')

' renders the element
UnfoldLess('UnfoldLess', 'Unfold Less', 'an optional tech label')
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

' loads the Item which embeds the element UnfoldLess
include('material-4/Navigation/UnfoldLess')

' renders the element
UnfoldLess('UnfoldLess', 'Unfold Less', 'an optional tech label')
@enduml
```

