# Park


```text
material-4/Maps/Park
```

```text
include('material-4/Maps/Park')
```



| Illustration | Park |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Park.png) | ![illustration for Park](../../material-4/Maps/Park.Local.png) |




## Park

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Park
include('material-4/Maps/Park')

' renders the element
Park('Park', 'Park', 'an optional tech label')
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

' loads the Item which embeds the element Park
include('material-4/Maps/Park')

' renders the element
Park('Park', 'Park', 'an optional tech label')
@enduml
```

