# HomeFilled


```text
material-4/Action/HomeFilled
```

```text
include('material-4/Action/HomeFilled')
```



| Illustration | HomeFilled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/HomeFilled.png) | ![illustration for HomeFilled](../../material-4/Action/HomeFilled.Local.png) |




## HomeFilled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HomeFilled
include('material-4/Action/HomeFilled')

' renders the element
HomeFilled('HomeFilled', 'Home Filled', 'an optional tech label')
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

' loads the Item which embeds the element HomeFilled
include('material-4/Action/HomeFilled')

' renders the element
HomeFilled('HomeFilled', 'Home Filled', 'an optional tech label')
@enduml
```

