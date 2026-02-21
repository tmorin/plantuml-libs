# Freecad


```text
simpleicons-14/F/Freecad
```

```text
include('simpleicons-14/F/Freecad')
```



| Illustration | Freecad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Freecad.png) | ![illustration for Freecad](../../simpleicons-14/F/Freecad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreecadXs>`
- `<$FreecadSm>`
- `<$FreecadMd>`
- `<$FreecadLg>`





## Freecad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Freecad
include('simpleicons-14/F/Freecad')

' renders the element
Freecad('Freecad', 'Freecad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freecad
include('simpleicons-14/F/Freecad')

' renders the element
Freecad('Freecad', 'Freecad', 'an optional tech label', 'an optional description')
@enduml
```

