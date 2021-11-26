# Star


```text
material-4/Toggle/Star
```

```text
include('material-4/Toggle/Star')
```



| Illustration | Star |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Toggle/Star.png) | ![illustration for Star](../../material-4/Toggle/Star.Local.png) |




## Star

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Star
include('material-4/Toggle/Star')

' renders the element
Star('Star', 'Star', 'an optional tech label')
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

' loads the Item which embeds the element Star
include('material-4/Toggle/Star')

' renders the element
Star('Star', 'Star', 'an optional tech label')
@enduml
```

