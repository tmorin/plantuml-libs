# Polywork


```text
simpleicons-5/P/Polywork
```

```text
include('simpleicons-5/P/Polywork')
```



| Illustration | Polywork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Polywork.png) | ![illustration for Polywork](../../simpleicons-5/P/Polywork.Local.png) |




## Polywork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Polywork
include('simpleicons-5/P/Polywork')

' renders the element
Polywork('Polywork', 'Polywork', 'an optional tech label')
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

' loads the Item which embeds the element Polywork
include('simpleicons-5/P/Polywork')

' renders the element
Polywork('Polywork', 'Polywork', 'an optional tech label')
@enduml
```
