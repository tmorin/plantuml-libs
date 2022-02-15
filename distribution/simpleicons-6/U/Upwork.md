# Upwork


```text
simpleicons-6/U/Upwork
```

```text
include('simpleicons-6/U/Upwork')
```



| Illustration | Upwork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Upwork.png) | ![illustration for Upwork](../../simpleicons-6/U/Upwork.Local.png) |




## Upwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Upwork
include('simpleicons-6/U/Upwork')

' renders the element
Upwork('Upwork', 'Upwork', 'an optional tech label')
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

' loads the Item which embeds the element Upwork
include('simpleicons-6/U/Upwork')

' renders the element
Upwork('Upwork', 'Upwork', 'an optional tech label')
@enduml
```

