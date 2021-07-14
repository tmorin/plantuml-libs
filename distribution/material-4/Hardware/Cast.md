# Cast


```text
material-4/Hardware/Cast
```

```text
include('material-4/Hardware/Cast')
```



| Illustration | Cast |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Cast.png) | ![illustration for Cast](../../material-4/Hardware/Cast.Local.png) |




## Cast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Cast
include('material-4/Hardware/Cast')

' renders the element
Cast('Cast', 'Cast', 'an optional tech label')
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

' loads the Item which embeds the element Cast
include('material-4/Hardware/Cast')

' renders the element
Cast('Cast', 'Cast', 'an optional tech label')
@enduml
```

