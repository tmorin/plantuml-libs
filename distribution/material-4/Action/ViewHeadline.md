# ViewHeadline


```text
material-4/Action/ViewHeadline
```

```text
include('material-4/Action/ViewHeadline')
```



| Illustration | ViewHeadline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewHeadline.png) | ![illustration for ViewHeadline](../../material-4/Action/ViewHeadline.Local.png) |




## ViewHeadline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewHeadline
include('material-4/Action/ViewHeadline')

' renders the element
ViewHeadline('ViewHeadline', 'View Headline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewHeadline
include('material-4/Action/ViewHeadline')

' renders the element
ViewHeadline('ViewHeadline', 'View Headline', 'an optional tech label', 'an optional description')
@enduml
```

