# Startpage


```text
simpleicons-14/S/Startpage
```

```text
include('simpleicons-14/S/Startpage')
```



| Illustration | Startpage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Startpage.png) | ![illustration for Startpage](../../simpleicons-14/S/Startpage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StartpageXs>`
- `<$StartpageSm>`
- `<$StartpageMd>`
- `<$StartpageLg>`





## Startpage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Startpage
include('simpleicons-14/S/Startpage')

' renders the element
Startpage('Startpage', 'Startpage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Startpage
include('simpleicons-14/S/Startpage')

' renders the element
Startpage('Startpage', 'Startpage', 'an optional tech label', 'an optional description')
@enduml
```

