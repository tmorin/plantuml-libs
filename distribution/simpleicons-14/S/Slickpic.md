# Slickpic


```text
simpleicons-14/S/Slickpic
```

```text
include('simpleicons-14/S/Slickpic')
```



| Illustration | Slickpic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Slickpic.png) | ![illustration for Slickpic](../../simpleicons-14/S/Slickpic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlickpicXs>`
- `<$SlickpicSm>`
- `<$SlickpicMd>`
- `<$SlickpicLg>`





## Slickpic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Slickpic
include('simpleicons-14/S/Slickpic')

' renders the element
Slickpic('Slickpic', 'Slickpic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Slickpic
include('simpleicons-14/S/Slickpic')

' renders the element
Slickpic('Slickpic', 'Slickpic', 'an optional tech label', 'an optional description')
@enduml
```

