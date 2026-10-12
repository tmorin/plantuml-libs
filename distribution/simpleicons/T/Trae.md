# Trae


```text
simpleicons/T/Trae
```

```text
include('simpleicons/T/Trae')
```



| Illustration | Trae |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trae.png) | ![illustration for Trae](../../simpleicons/T/Trae.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TraeXs>`
- `<$TraeSm>`
- `<$TraeMd>`
- `<$TraeLg>`





## Trae

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trae
include('simpleicons/T/Trae')

' renders the element
Trae('Trae', 'Trae', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trae
include('simpleicons/T/Trae')

' renders the element
Trae('Trae', 'Trae', 'an optional tech label', 'an optional description')
@enduml
```

