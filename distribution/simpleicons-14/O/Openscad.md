# Openscad


```text
simpleicons-14/O/Openscad
```

```text
include('simpleicons-14/O/Openscad')
```



| Illustration | Openscad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Openscad.png) | ![illustration for Openscad](../../simpleicons-14/O/Openscad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenscadXs>`
- `<$OpenscadSm>`
- `<$OpenscadMd>`
- `<$OpenscadLg>`





## Openscad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Openscad
include('simpleicons-14/O/Openscad')

' renders the element
Openscad('Openscad', 'Openscad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openscad
include('simpleicons-14/O/Openscad')

' renders the element
Openscad('Openscad', 'Openscad', 'an optional tech label', 'an optional description')
@enduml
```

