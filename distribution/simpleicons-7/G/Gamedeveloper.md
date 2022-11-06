# Gamedeveloper


```text
simpleicons-7/G/Gamedeveloper
```

```text
include('simpleicons-7/G/Gamedeveloper')
```



| Illustration | Gamedeveloper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gamedeveloper.png) | ![illustration for Gamedeveloper](../../simpleicons-7/G/Gamedeveloper.Local.png) |




## Gamedeveloper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gamedeveloper
include('simpleicons-7/G/Gamedeveloper')

' renders the element
Gamedeveloper('Gamedeveloper', 'Gamedeveloper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gamedeveloper
include('simpleicons-7/G/Gamedeveloper')

' renders the element
Gamedeveloper('Gamedeveloper', 'Gamedeveloper', 'an optional tech label', 'an optional description')
@enduml
```

