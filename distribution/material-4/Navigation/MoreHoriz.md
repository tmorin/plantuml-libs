# MoreHoriz


```text
material-4/Navigation/MoreHoriz
```

```text
include('material-4/Navigation/MoreHoriz')
```



| Illustration | MoreHoriz |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/MoreHoriz.png) | ![illustration for MoreHoriz](../../material-4/Navigation/MoreHoriz.Local.png) |




## MoreHoriz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MoreHoriz
include('material-4/Navigation/MoreHoriz')

' renders the element
MoreHoriz('MoreHoriz', 'More Horiz', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoreHoriz
include('material-4/Navigation/MoreHoriz')

' renders the element
MoreHoriz('MoreHoriz', 'More Horiz', 'an optional tech label', 'an optional description')
@enduml
```

