# Rider


```text
simpleicons-7/R/Rider
```

```text
include('simpleicons-7/R/Rider')
```



| Illustration | Rider |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rider.png) | ![illustration for Rider](../../simpleicons-7/R/Rider.Local.png) |




## Rider

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rider
include('simpleicons-7/R/Rider')

' renders the element
Rider('Rider', 'Rider', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rider
include('simpleicons-7/R/Rider')

' renders the element
Rider('Rider', 'Rider', 'an optional tech label', 'an optional description')
@enduml
```

