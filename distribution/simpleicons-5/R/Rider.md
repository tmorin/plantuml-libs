# Rider


```text
simpleicons-5/R/Rider
```

```text
include('simpleicons-5/R/Rider')
```



| Illustration | Rider |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rider.png) | ![illustration for Rider](../../simpleicons-5/R/Rider.Local.png) |




## Rider

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rider
include('simpleicons-5/R/Rider')

' renders the element
Rider('Rider', 'Rider', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rider
include('simpleicons-5/R/Rider')

' renders the element
Rider('Rider', 'Rider', 'an optional tech label')
@enduml
```

