# Airindia


```text
simpleicons/A/Airindia
```

```text
include('simpleicons/A/Airindia')
```



| Illustration | Airindia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Airindia.png) | ![illustration for Airindia](../../simpleicons/A/Airindia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirindiaXs>`
- `<$AirindiaSm>`
- `<$AirindiaMd>`
- `<$AirindiaLg>`





## Airindia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Airindia
include('simpleicons/A/Airindia')

' renders the element
Airindia('Airindia', 'Airindia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airindia
include('simpleicons/A/Airindia')

' renders the element
Airindia('Airindia', 'Airindia', 'an optional tech label', 'an optional description')
@enduml
```

