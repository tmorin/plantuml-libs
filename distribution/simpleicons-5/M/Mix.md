# Mix


```text
simpleicons-5/M/Mix
```

```text
include('simpleicons-5/M/Mix')
```



| Illustration | Mix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mix.png) | ![illustration for Mix](../../simpleicons-5/M/Mix.Local.png) |




## Mix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mix
include('simpleicons-5/M/Mix')

' renders the element
Mix('Mix', 'Mix', 'an optional tech label')
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

' loads the Item which embeds the element Mix
include('simpleicons-5/M/Mix')

' renders the element
Mix('Mix', 'Mix', 'an optional tech label')
@enduml
```

