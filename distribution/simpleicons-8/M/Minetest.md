# Minetest


```text
simpleicons-8/M/Minetest
```

```text
include('simpleicons-8/M/Minetest')
```



| Illustration | Minetest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Minetest.png) | ![illustration for Minetest](../../simpleicons-8/M/Minetest.Local.png) |




## Minetest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Minetest
include('simpleicons-8/M/Minetest')

' renders the element
Minetest('Minetest', 'Minetest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Minetest
include('simpleicons-8/M/Minetest')

' renders the element
Minetest('Minetest', 'Minetest', 'an optional tech label', 'an optional description')
@enduml
```

