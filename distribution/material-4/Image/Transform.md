# Transform


```text
material-4/Image/Transform
```

```text
include('material-4/Image/Transform')
```



| Illustration | Transform |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Transform.png) | ![illustration for Transform](../../material-4/Image/Transform.Local.png) |




## Transform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Transform
include('material-4/Image/Transform')

' renders the element
Transform('Transform', 'Transform', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Transform
include('material-4/Image/Transform')

' renders the element
Transform('Transform', 'Transform', 'an optional tech label', 'an optional description')
@enduml
```

