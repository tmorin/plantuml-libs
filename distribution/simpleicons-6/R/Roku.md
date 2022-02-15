# Roku


```text
simpleicons-6/R/Roku
```

```text
include('simpleicons-6/R/Roku')
```



| Illustration | Roku |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Roku.png) | ![illustration for Roku](../../simpleicons-6/R/Roku.Local.png) |




## Roku

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Roku
include('simpleicons-6/R/Roku')

' renders the element
Roku('Roku', 'Roku', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Roku
include('simpleicons-6/R/Roku')

' renders the element
Roku('Roku', 'Roku', 'an optional tech label')
@enduml
```

