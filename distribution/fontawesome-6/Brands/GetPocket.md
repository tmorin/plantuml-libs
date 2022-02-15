# GetPocket


```text
fontawesome-6/Brands/GetPocket
```

```text
include('fontawesome-6/Brands/GetPocket')
```



| Illustration | GetPocket |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GetPocket.png) | ![illustration for GetPocket](../../fontawesome-6/Brands/GetPocket.Local.png) |




## GetPocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GetPocket
include('fontawesome-6/Brands/GetPocket')

' renders the element
GetPocket('GetPocket', 'Get Pocket', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GetPocket
include('fontawesome-6/Brands/GetPocket')

' renders the element
GetPocket('GetPocket', 'Get Pocket', 'an optional tech label')
@enduml
```

