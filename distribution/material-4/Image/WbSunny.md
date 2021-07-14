# WbSunny


```text
material-4/Image/WbSunny
```

```text
include('material-4/Image/WbSunny')
```



| Illustration | WbSunny |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/WbSunny.png) | ![illustration for WbSunny](../../material-4/Image/WbSunny.Local.png) |




## WbSunny

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WbSunny
include('material-4/Image/WbSunny')

' renders the element
WbSunny('WbSunny', 'Wb Sunny', 'an optional tech label')
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

' loads the Item which embeds the element WbSunny
include('material-4/Image/WbSunny')

' renders the element
WbSunny('WbSunny', 'Wb Sunny', 'an optional tech label')
@enduml
```

