# Activeloop


```text
simpleicons-14/A/Activeloop
```

```text
include('simpleicons-14/A/Activeloop')
```



| Illustration | Activeloop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Activeloop.png) | ![illustration for Activeloop](../../simpleicons-14/A/Activeloop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ActiveloopXs>`
- `<$ActiveloopSm>`
- `<$ActiveloopMd>`
- `<$ActiveloopLg>`





## Activeloop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Activeloop
include('simpleicons-14/A/Activeloop')

' renders the element
Activeloop('Activeloop', 'Activeloop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Activeloop
include('simpleicons-14/A/Activeloop')

' renders the element
Activeloop('Activeloop', 'Activeloop', 'an optional tech label', 'an optional description')
@enduml
```

