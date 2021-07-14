# Rootsbedrock


```text
simpleicons-5/R/Rootsbedrock
```

```text
include('simpleicons-5/R/Rootsbedrock')
```



| Illustration | Rootsbedrock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rootsbedrock.png) | ![illustration for Rootsbedrock](../../simpleicons-5/R/Rootsbedrock.Local.png) |




## Rootsbedrock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rootsbedrock
include('simpleicons-5/R/Rootsbedrock')

' renders the element
Rootsbedrock('Rootsbedrock', 'Rootsbedrock', 'an optional tech label')
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

' loads the Item which embeds the element Rootsbedrock
include('simpleicons-5/R/Rootsbedrock')

' renders the element
Rootsbedrock('Rootsbedrock', 'Rootsbedrock', 'an optional tech label')
@enduml
```

