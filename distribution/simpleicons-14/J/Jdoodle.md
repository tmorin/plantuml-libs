# Jdoodle


```text
simpleicons-14/J/Jdoodle
```

```text
include('simpleicons-14/J/Jdoodle')
```



| Illustration | Jdoodle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jdoodle.png) | ![illustration for Jdoodle](../../simpleicons-14/J/Jdoodle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JdoodleXs>`
- `<$JdoodleSm>`
- `<$JdoodleMd>`
- `<$JdoodleLg>`





## Jdoodle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jdoodle
include('simpleicons-14/J/Jdoodle')

' renders the element
Jdoodle('Jdoodle', 'Jdoodle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jdoodle
include('simpleicons-14/J/Jdoodle')

' renders the element
Jdoodle('Jdoodle', 'Jdoodle', 'an optional tech label', 'an optional description')
@enduml
```

