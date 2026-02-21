# Krita


```text
simpleicons/K/Krita
```

```text
include('simpleicons/K/Krita')
```



| Illustration | Krita |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Krita.png) | ![illustration for Krita](../../simpleicons/K/Krita.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KritaXs>`
- `<$KritaSm>`
- `<$KritaMd>`
- `<$KritaLg>`





## Krita

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Krita
include('simpleicons/K/Krita')

' renders the element
Krita('Krita', 'Krita', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Krita
include('simpleicons/K/Krita')

' renders the element
Krita('Krita', 'Krita', 'an optional tech label', 'an optional description')
@enduml
```

