# ShuttleVan


```text
fontawesome-5/Solid/ShuttleVan
```

```text
include('fontawesome-5/Solid/ShuttleVan')
```



| Illustration | ShuttleVan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShuttleVan.png) | ![illustration for ShuttleVan](../../fontawesome-5/Solid/ShuttleVan.Local.png) |




## ShuttleVan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShuttleVan
include('fontawesome-5/Solid/ShuttleVan')

' renders the element
ShuttleVan('ShuttleVan', 'Shuttle Van', 'an optional tech label')
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

' loads the Item which embeds the element ShuttleVan
include('fontawesome-5/Solid/ShuttleVan')

' renders the element
ShuttleVan('ShuttleVan', 'Shuttle Van', 'an optional tech label')
@enduml
```

