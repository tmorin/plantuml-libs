# Hotel


```text
material-4/Maps/Hotel
```

```text
include('material-4/Maps/Hotel')
```



| Illustration | Hotel |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Hotel.png) | ![illustration for Hotel](../../material-4/Maps/Hotel.Local.png) |




## Hotel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Hotel
include('material-4/Maps/Hotel')

' renders the element
Hotel('Hotel', 'Hotel', 'an optional tech label')
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

' loads the Item which embeds the element Hotel
include('material-4/Maps/Hotel')

' renders the element
Hotel('Hotel', 'Hotel', 'an optional tech label')
@enduml
```

