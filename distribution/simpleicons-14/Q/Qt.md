# Qt


```text
simpleicons-14/Q/Qt
```

```text
include('simpleicons-14/Q/Qt')
```



| Illustration | Qt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qt.png) | ![illustration for Qt](../../simpleicons-14/Q/Qt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QtXs>`
- `<$QtSm>`
- `<$QtMd>`
- `<$QtLg>`





## Qt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qt
include('simpleicons-14/Q/Qt')

' renders the element
Qt('Qt', 'Qt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qt
include('simpleicons-14/Q/Qt')

' renders the element
Qt('Qt', 'Qt', 'an optional tech label', 'an optional description')
@enduml
```

