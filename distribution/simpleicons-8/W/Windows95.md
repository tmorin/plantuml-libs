# Windows95


```text
simpleicons-8/W/Windows95
```

```text
include('simpleicons-8/W/Windows95')
```



| Illustration | Windows95 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Windows95.png) | ![illustration for Windows95](../../simpleicons-8/W/Windows95.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Windows95Xs>`
- `<$Windows95Sm>`
- `<$Windows95Md>`
- `<$Windows95Lg>`





## Windows95

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Windows95
include('simpleicons-8/W/Windows95')

' renders the element
Windows95('Windows95', 'Windows95', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Windows95
include('simpleicons-8/W/Windows95')

' renders the element
Windows95('Windows95', 'Windows95', 'an optional tech label', 'an optional description')
@enduml
```

