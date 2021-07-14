# Nature


```text
material-4/Image/Nature
```

```text
include('material-4/Image/Nature')
```



| Illustration | Nature |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Nature.png) | ![illustration for Nature](../../material-4/Image/Nature.Local.png) |




## Nature

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Nature
include('material-4/Image/Nature')

' renders the element
Nature('Nature', 'Nature', 'an optional tech label')
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

' loads the Item which embeds the element Nature
include('material-4/Image/Nature')

' renders the element
Nature('Nature', 'Nature', 'an optional tech label')
@enduml
```

