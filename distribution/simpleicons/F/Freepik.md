# Freepik


```text
simpleicons/F/Freepik
```

```text
include('simpleicons/F/Freepik')
```



| Illustration | Freepik |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Freepik.png) | ![illustration for Freepik](../../simpleicons/F/Freepik.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreepikXs>`
- `<$FreepikSm>`
- `<$FreepikMd>`
- `<$FreepikLg>`





## Freepik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Freepik
include('simpleicons/F/Freepik')

' renders the element
Freepik('Freepik', 'Freepik', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freepik
include('simpleicons/F/Freepik')

' renders the element
Freepik('Freepik', 'Freepik', 'an optional tech label', 'an optional description')
@enduml
```

