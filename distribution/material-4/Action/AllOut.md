# AllOut


```text
material-4/Action/AllOut
```

```text
include('material-4/Action/AllOut')
```



| Illustration | AllOut |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AllOut.png) | ![illustration for AllOut](../../material-4/Action/AllOut.Local.png) |




## AllOut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AllOut
include('material-4/Action/AllOut')

' renders the element
AllOut('AllOut', 'All Out', 'an optional tech label')
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

' loads the Item which embeds the element AllOut
include('material-4/Action/AllOut')

' renders the element
AllOut('AllOut', 'All Out', 'an optional tech label')
@enduml
```

