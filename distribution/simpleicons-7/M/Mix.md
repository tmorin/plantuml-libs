# Mix


```text
simpleicons-7/M/Mix
```

```text
include('simpleicons-7/M/Mix')
```



| Illustration | Mix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mix.png) | ![illustration for Mix](../../simpleicons-7/M/Mix.Local.png) |




## Mix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mix
include('simpleicons-7/M/Mix')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mix
include('simpleicons-7/M/Mix')

' renders the element
Mix('Mix', 'Mix', 'an optional tech label')
@enduml
```

