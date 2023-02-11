# Warp


```text
simpleicons-8/W/Warp
```

```text
include('simpleicons-8/W/Warp')
```



| Illustration | Warp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Warp.png) | ![illustration for Warp](../../simpleicons-8/W/Warp.Local.png) |




## Warp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Warp
include('simpleicons-8/W/Warp')

' renders the element
Warp('Warp', 'Warp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Warp
include('simpleicons-8/W/Warp')

' renders the element
Warp('Warp', 'Warp', 'an optional tech label', 'an optional description')
@enduml
```

