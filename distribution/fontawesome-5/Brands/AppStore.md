# AppStore


```text
fontawesome-5/Brands/AppStore
```

```text
include('fontawesome-5/Brands/AppStore')
```



| Illustration | AppStore |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/AppStore.png) | ![illustration for AppStore](../../fontawesome-5/Brands/AppStore.Local.png) |




## AppStore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AppStore
include('fontawesome-5/Brands/AppStore')

' renders the element
AppStore('AppStore', 'App Store', 'an optional tech label')
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

' loads the Item which embeds the element AppStore
include('fontawesome-5/Brands/AppStore')

' renders the element
AppStore('AppStore', 'App Store', 'an optional tech label')
@enduml
```

