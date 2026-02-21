# Wykop


```text
simpleicons-14/W/Wykop
```

```text
include('simpleicons-14/W/Wykop')
```



| Illustration | Wykop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wykop.png) | ![illustration for Wykop](../../simpleicons-14/W/Wykop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WykopXs>`
- `<$WykopSm>`
- `<$WykopMd>`
- `<$WykopLg>`





## Wykop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wykop
include('simpleicons-14/W/Wykop')

' renders the element
Wykop('Wykop', 'Wykop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wykop
include('simpleicons-14/W/Wykop')

' renders the element
Wykop('Wykop', 'Wykop', 'an optional tech label', 'an optional description')
@enduml
```

