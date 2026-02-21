# Libreofficemath


```text
simpleicons/L/Libreofficemath
```

```text
include('simpleicons/L/Libreofficemath')
```



| Illustration | Libreofficemath |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Libreofficemath.png) | ![illustration for Libreofficemath](../../simpleicons/L/Libreofficemath.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibreofficemathXs>`
- `<$LibreofficemathSm>`
- `<$LibreofficemathMd>`
- `<$LibreofficemathLg>`





## Libreofficemath

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Libreofficemath
include('simpleicons/L/Libreofficemath')

' renders the element
Libreofficemath('Libreofficemath', 'Libreofficemath', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Libreofficemath
include('simpleicons/L/Libreofficemath')

' renders the element
Libreofficemath('Libreofficemath', 'Libreofficemath', 'an optional tech label', 'an optional description')
@enduml
```

