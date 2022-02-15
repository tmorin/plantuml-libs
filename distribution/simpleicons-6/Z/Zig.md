# Zig


```text
simpleicons-6/Z/Zig
```

```text
include('simpleicons-6/Z/Zig')
```



| Illustration | Zig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Z/Zig.png) | ![illustration for Zig](../../simpleicons-6/Z/Zig.Local.png) |




## Zig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zig
include('simpleicons-6/Z/Zig')

' renders the element
Zig('Zig', 'Zig', 'an optional tech label')
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

' loads the Item which embeds the element Zig
include('simpleicons-6/Z/Zig')

' renders the element
Zig('Zig', 'Zig', 'an optional tech label')
@enduml
```

