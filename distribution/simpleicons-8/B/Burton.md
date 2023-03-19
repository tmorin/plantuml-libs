# Burton


```text
simpleicons-8/B/Burton
```

```text
include('simpleicons-8/B/Burton')
```



| Illustration | Burton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Burton.png) | ![illustration for Burton](../../simpleicons-8/B/Burton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BurtonXs>`
- `<$BurtonSm>`
- `<$BurtonMd>`
- `<$BurtonLg>`





## Burton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Burton
include('simpleicons-8/B/Burton')

' renders the element
Burton('Burton', 'Burton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Burton
include('simpleicons-8/B/Burton')

' renders the element
Burton('Burton', 'Burton', 'an optional tech label', 'an optional description')
@enduml
```

