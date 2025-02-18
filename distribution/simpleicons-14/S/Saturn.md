# Saturn


```text
simpleicons-14/S/Saturn
```

```text
include('simpleicons-14/S/Saturn')
```



| Illustration | Saturn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Saturn.png) | ![illustration for Saturn](../../simpleicons-14/S/Saturn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SaturnXs>`
- `<$SaturnSm>`
- `<$SaturnMd>`
- `<$SaturnLg>`





## Saturn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Saturn
include('simpleicons-14/S/Saturn')

' renders the element
Saturn('Saturn', 'Saturn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Saturn
include('simpleicons-14/S/Saturn')

' renders the element
Saturn('Saturn', 'Saturn', 'an optional tech label', 'an optional description')
@enduml
```

