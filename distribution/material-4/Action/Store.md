# Store


```text
material-4/Action/Store
```

```text
include('material-4/Action/Store')
```



| Illustration | Store |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Store.png) | ![illustration for Store](../../material-4/Action/Store.Local.png) |




## Store

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Store
include('material-4/Action/Store')

' renders the element
Store('Store', 'Store', 'an optional tech label')
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

' loads the Item which embeds the element Store
include('material-4/Action/Store')

' renders the element
Store('Store', 'Store', 'an optional tech label')
@enduml
```

