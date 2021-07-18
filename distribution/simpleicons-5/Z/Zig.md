# Zig


```text
simpleicons-5/Z/Zig
```

```text
include('simpleicons-5/Z/Zig')
```



| Illustration | Zig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zig.png) | ![illustration for Zig](../../simpleicons-5/Z/Zig.Local.png) |




## Zig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zig
include('simpleicons-5/Z/Zig')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zig
include('simpleicons-5/Z/Zig')

' renders the element
Zig('Zig', 'Zig', 'an optional tech label')
@enduml
```

