# Height


```text
material-4/Editor/Height
```

```text
include('material-4/Editor/Height')
```



| Illustration | Height |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/Height.png) | ![illustration for Height](../../material-4/Editor/Height.Local.png) |




## Height

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Height
include('material-4/Editor/Height')

' renders the element
Height('Height', 'Height', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Height
include('material-4/Editor/Height')

' renders the element
Height('Height', 'Height', 'an optional tech label', 'an optional description')
@enduml
```

