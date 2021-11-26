# UnfoldMore


```text
material-4/Navigation/UnfoldMore
```

```text
include('material-4/Navigation/UnfoldMore')
```



| Illustration | UnfoldMore |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/UnfoldMore.png) | ![illustration for UnfoldMore](../../material-4/Navigation/UnfoldMore.Local.png) |




## UnfoldMore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element UnfoldMore
include('material-4/Navigation/UnfoldMore')

' renders the element
UnfoldMore('UnfoldMore', 'Unfold More', 'an optional tech label')
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

' loads the Item which embeds the element UnfoldMore
include('material-4/Navigation/UnfoldMore')

' renders the element
UnfoldMore('UnfoldMore', 'Unfold More', 'an optional tech label')
@enduml
```

