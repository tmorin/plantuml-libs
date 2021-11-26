# NodeJs


```text
fontawesome-5/Brands/NodeJs
```

```text
include('fontawesome-5/Brands/NodeJs')
```



| Illustration | NodeJs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/NodeJs.png) | ![illustration for NodeJs](../../fontawesome-5/Brands/NodeJs.Local.png) |




## NodeJs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element NodeJs
include('fontawesome-5/Brands/NodeJs')

' renders the element
NodeJs('NodeJs', 'Node Js', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element NodeJs
include('fontawesome-5/Brands/NodeJs')

' renders the element
NodeJs('NodeJs', 'Node Js', 'an optional tech label')
@enduml
```

