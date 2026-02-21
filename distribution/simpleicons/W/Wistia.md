# Wistia


```text
simpleicons/W/Wistia
```

```text
include('simpleicons/W/Wistia')
```



| Illustration | Wistia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wistia.png) | ![illustration for Wistia](../../simpleicons/W/Wistia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WistiaXs>`
- `<$WistiaSm>`
- `<$WistiaMd>`
- `<$WistiaLg>`





## Wistia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wistia
include('simpleicons/W/Wistia')

' renders the element
Wistia('Wistia', 'Wistia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wistia
include('simpleicons/W/Wistia')

' renders the element
Wistia('Wistia', 'Wistia', 'an optional tech label', 'an optional description')
@enduml
```

