# ChildFriendly


```text
material-4/Places/ChildFriendly
```

```text
include('material-4/Places/ChildFriendly')
```



| Illustration | ChildFriendly |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/ChildFriendly.png) | ![illustration for ChildFriendly](../../material-4/Places/ChildFriendly.Local.png) |




## ChildFriendly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ChildFriendly
include('material-4/Places/ChildFriendly')

' renders the element
ChildFriendly('ChildFriendly', 'Child Friendly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChildFriendly
include('material-4/Places/ChildFriendly')

' renders the element
ChildFriendly('ChildFriendly', 'Child Friendly', 'an optional tech label', 'an optional description')
@enduml
```

