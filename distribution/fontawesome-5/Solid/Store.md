# Store


```text
fontawesome-5/Solid/Store
```

```text
include('fontawesome-5/Solid/Store')
```



| Illustration | Store |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Store.png) | ![illustration for Store](../../fontawesome-5/Solid/Store.Local.png) |




## Store

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Store
include('fontawesome-5/Solid/Store')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Store
include('fontawesome-5/Solid/Store')

' renders the element
Store('Store', 'Store', 'an optional tech label')
@enduml
```

