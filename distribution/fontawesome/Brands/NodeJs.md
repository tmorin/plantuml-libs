# NodeJs


```text
fontawesome/Brands/NodeJs
```

```text
include('fontawesome/Brands/NodeJs')
```



| Illustration | NodeJs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/NodeJs.png) | ![illustration for NodeJs](../../fontawesome/Brands/NodeJs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NodeJsXs>`
- `<$NodeJsSm>`
- `<$NodeJsMd>`
- `<$NodeJsLg>`





## NodeJs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element NodeJs
include('fontawesome/Brands/NodeJs')

' renders the element
NodeJs('NodeJs', 'Node Js', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element NodeJs
include('fontawesome/Brands/NodeJs')

' renders the element
NodeJs('NodeJs', 'Node Js', 'an optional tech label', 'an optional description')
@enduml
```

