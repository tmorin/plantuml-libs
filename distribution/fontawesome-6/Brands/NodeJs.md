# NodeJs


```text
fontawesome-6/Brands/NodeJs
```

```text
include('fontawesome-6/Brands/NodeJs')
```



| Illustration | NodeJs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/NodeJs.png) | ![illustration for NodeJs](../../fontawesome-6/Brands/NodeJs.Local.png) |




## NodeJs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NodeJs
include('fontawesome-6/Brands/NodeJs')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NodeJs
include('fontawesome-6/Brands/NodeJs')

' renders the element
NodeJs('NodeJs', 'Node Js', 'an optional tech label')
@enduml
```

