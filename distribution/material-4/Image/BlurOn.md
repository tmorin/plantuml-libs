# BlurOn


```text
material-4/Image/BlurOn
```

```text
include('material-4/Image/BlurOn')
```



| Illustration | BlurOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/BlurOn.png) | ![illustration for BlurOn](../../material-4/Image/BlurOn.Local.png) |




## BlurOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BlurOn
include('material-4/Image/BlurOn')

' renders the element
BlurOn('BlurOn', 'Blur On', 'an optional tech label')
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

' loads the Item which embeds the element BlurOn
include('material-4/Image/BlurOn')

' renders the element
BlurOn('BlurOn', 'Blur On', 'an optional tech label')
@enduml
```

