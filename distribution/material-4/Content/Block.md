# Block


```text
material-4/Content/Block
```

```text
include('material-4/Content/Block')
```



| Illustration | Block |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Block.png) | ![illustration for Block](../../material-4/Content/Block.Local.png) |




## Block

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Block
include('material-4/Content/Block')

' renders the element
Block('Block', 'Block', 'an optional tech label')
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

' loads the Item which embeds the element Block
include('material-4/Content/Block')

' renders the element
Block('Block', 'Block', 'an optional tech label')
@enduml
```

