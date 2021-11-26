# Watch


```text
material-4/Hardware/Watch
```

```text
include('material-4/Hardware/Watch')
```



| Illustration | Watch |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Watch.png) | ![illustration for Watch](../../material-4/Hardware/Watch.Local.png) |




## Watch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Watch
include('material-4/Hardware/Watch')

' renders the element
Watch('Watch', 'Watch', 'an optional tech label')
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

' loads the Item which embeds the element Watch
include('material-4/Hardware/Watch')

' renders the element
Watch('Watch', 'Watch', 'an optional tech label')
@enduml
```

