# GridOn


```text
material-4/Image/GridOn
```

```text
include('material-4/Image/GridOn')
```



| Illustration | GridOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/GridOn.png) | ![illustration for GridOn](../../material-4/Image/GridOn.Local.png) |




## GridOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GridOn
include('material-4/Image/GridOn')

' renders the element
GridOn('GridOn', 'Grid On', 'an optional tech label')
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

' loads the Item which embeds the element GridOn
include('material-4/Image/GridOn')

' renders the element
GridOn('GridOn', 'Grid On', 'an optional tech label')
@enduml
```

