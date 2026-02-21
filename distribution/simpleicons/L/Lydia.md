# Lydia


```text
simpleicons/L/Lydia
```

```text
include('simpleicons/L/Lydia')
```



| Illustration | Lydia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lydia.png) | ![illustration for Lydia](../../simpleicons/L/Lydia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LydiaXs>`
- `<$LydiaSm>`
- `<$LydiaMd>`
- `<$LydiaLg>`





## Lydia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lydia
include('simpleicons/L/Lydia')

' renders the element
Lydia('Lydia', 'Lydia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lydia
include('simpleicons/L/Lydia')

' renders the element
Lydia('Lydia', 'Lydia', 'an optional tech label', 'an optional description')
@enduml
```

