# Ros


```text
simpleicons-14/R/Ros
```

```text
include('simpleicons-14/R/Ros')
```



| Illustration | Ros |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Ros.png) | ![illustration for Ros](../../simpleicons-14/R/Ros.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RosXs>`
- `<$RosSm>`
- `<$RosMd>`
- `<$RosLg>`





## Ros

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ros
include('simpleicons-14/R/Ros')

' renders the element
Ros('Ros', 'Ros', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ros
include('simpleicons-14/R/Ros')

' renders the element
Ros('Ros', 'Ros', 'an optional tech label', 'an optional description')
@enduml
```

