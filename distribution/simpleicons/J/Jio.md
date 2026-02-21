# Jio


```text
simpleicons/J/Jio
```

```text
include('simpleicons/J/Jio')
```



| Illustration | Jio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jio.png) | ![illustration for Jio](../../simpleicons/J/Jio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JioXs>`
- `<$JioSm>`
- `<$JioMd>`
- `<$JioLg>`





## Jio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jio
include('simpleicons/J/Jio')

' renders the element
Jio('Jio', 'Jio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jio
include('simpleicons/J/Jio')

' renders the element
Jio('Jio', 'Jio', 'an optional tech label', 'an optional description')
@enduml
```

