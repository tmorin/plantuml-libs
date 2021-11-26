# HouseSiding


```text
material-4/Places/HouseSiding
```

```text
include('material-4/Places/HouseSiding')
```



| Illustration | HouseSiding |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/HouseSiding.png) | ![illustration for HouseSiding](../../material-4/Places/HouseSiding.Local.png) |




## HouseSiding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HouseSiding
include('material-4/Places/HouseSiding')

' renders the element
HouseSiding('HouseSiding', 'House Siding', 'an optional tech label')
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

' loads the Item which embeds the element HouseSiding
include('material-4/Places/HouseSiding')

' renders the element
HouseSiding('HouseSiding', 'House Siding', 'an optional tech label')
@enduml
```

