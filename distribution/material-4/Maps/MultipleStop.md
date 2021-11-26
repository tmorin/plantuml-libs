# MultipleStop


```text
material-4/Maps/MultipleStop
```

```text
include('material-4/Maps/MultipleStop')
```



| Illustration | MultipleStop |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/MultipleStop.png) | ![illustration for MultipleStop](../../material-4/Maps/MultipleStop.Local.png) |




## MultipleStop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MultipleStop
include('material-4/Maps/MultipleStop')

' renders the element
MultipleStop('MultipleStop', 'Multiple Stop', 'an optional tech label')
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

' loads the Item which embeds the element MultipleStop
include('material-4/Maps/MultipleStop')

' renders the element
MultipleStop('MultipleStop', 'Multiple Stop', 'an optional tech label')
@enduml
```

