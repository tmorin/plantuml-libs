# Mp


```text
material-4/Image/Mp
```

```text
include('material-4/Image/Mp')
```



| Illustration | Mp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Mp.png) | ![illustration for Mp](../../material-4/Image/Mp.Local.png) |




## Mp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Mp
include('material-4/Image/Mp')

' renders the element
Mp('Mp', 'Mp', 'an optional tech label')
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

' loads the Item which embeds the element Mp
include('material-4/Image/Mp')

' renders the element
Mp('Mp', 'Mp', 'an optional tech label')
@enduml
```

