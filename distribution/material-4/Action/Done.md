# Done


```text
material-4/Action/Done
```

```text
include('material-4/Action/Done')
```



| Illustration | Done |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Done.png) | ![illustration for Done](../../material-4/Action/Done.Local.png) |




## Done

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Done
include('material-4/Action/Done')

' renders the element
Done('Done', 'Done', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Done
include('material-4/Action/Done')

' renders the element
Done('Done', 'Done', 'an optional tech label', 'an optional description')
@enduml
```

