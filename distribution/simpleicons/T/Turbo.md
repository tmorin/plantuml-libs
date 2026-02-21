# Turbo


```text
simpleicons/T/Turbo
```

```text
include('simpleicons/T/Turbo')
```



| Illustration | Turbo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Turbo.png) | ![illustration for Turbo](../../simpleicons/T/Turbo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurboXs>`
- `<$TurboSm>`
- `<$TurboMd>`
- `<$TurboLg>`





## Turbo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Turbo
include('simpleicons/T/Turbo')

' renders the element
Turbo('Turbo', 'Turbo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Turbo
include('simpleicons/T/Turbo')

' renders the element
Turbo('Turbo', 'Turbo', 'an optional tech label', 'an optional description')
@enduml
```

