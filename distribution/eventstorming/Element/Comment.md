# Comment


```text
eventstorming/Element/Comment
```

```text
include('eventstorming/Element/Comment')
```



| Comment |
| :---: |
| ![illustration for Comment](../../eventstorming/Element/Comment.Local.png) |




## Comment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Comment
include('eventstorming/Element/Comment')

Comment('Comment') [
Comment
--
A comment is used to provide additional information.
]
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
include('eventstorming/bootstrap')

' loads the Item which embeds the element Comment
include('eventstorming/Element/Comment')

Comment('Comment') [
Comment
--
A comment is used to provide additional information.
]
@enduml
```

