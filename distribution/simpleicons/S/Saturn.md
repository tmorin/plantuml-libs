# Saturn


```text
simpleicons/S/Saturn
```

```text
include('simpleicons/S/Saturn')
```



| Illustration | Saturn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Saturn.png) | ![illustration for Saturn](../../simpleicons/S/Saturn.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Saturn
include('simpleicons/S/Saturn')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Saturn
include('simpleicons/S/Saturn')

' renders the element
Saturn('Saturn', 'Saturn', 'an optional tech label', 'an optional description')
@enduml
```

