# Wire


```text
simpleicons/W/Wire
```

```text
include('simpleicons/W/Wire')
```



| Illustration | Wire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wire.png) | ![illustration for Wire](../../simpleicons/W/Wire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WireXs>`
- `<$WireSm>`
- `<$WireMd>`
- `<$WireLg>`





## Wire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wire
include('simpleicons/W/Wire')

' renders the element
Wire('Wire', 'Wire', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wire
include('simpleicons/W/Wire')

' renders the element
Wire('Wire', 'Wire', 'an optional tech label', 'an optional description')
@enduml
```

