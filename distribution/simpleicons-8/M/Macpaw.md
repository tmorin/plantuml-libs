# Macpaw


```text
simpleicons-8/M/Macpaw
```

```text
include('simpleicons-8/M/Macpaw')
```



| Illustration | Macpaw |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Macpaw.png) | ![illustration for Macpaw](../../simpleicons-8/M/Macpaw.Local.png) |




## Macpaw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Macpaw
include('simpleicons-8/M/Macpaw')

' renders the element
Macpaw('Macpaw', 'Macpaw', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Macpaw
include('simpleicons-8/M/Macpaw')

' renders the element
Macpaw('Macpaw', 'Macpaw', 'an optional tech label', 'an optional description')
@enduml
```

