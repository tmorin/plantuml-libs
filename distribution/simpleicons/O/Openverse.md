# Openverse


```text
simpleicons/O/Openverse
```

```text
include('simpleicons/O/Openverse')
```



| Illustration | Openverse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openverse.png) | ![illustration for Openverse](../../simpleicons/O/Openverse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenverseXs>`
- `<$OpenverseSm>`
- `<$OpenverseMd>`
- `<$OpenverseLg>`





## Openverse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openverse
include('simpleicons/O/Openverse')

' renders the element
Openverse('Openverse', 'Openverse', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openverse
include('simpleicons/O/Openverse')

' renders the element
Openverse('Openverse', 'Openverse', 'an optional tech label', 'an optional description')
@enduml
```

