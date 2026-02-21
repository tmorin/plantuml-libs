# Libreofficemath


```text
simpleicons-14/L/Libreofficemath
```

```text
include('simpleicons-14/L/Libreofficemath')
```



| Illustration | Libreofficemath |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Libreofficemath.png) | ![illustration for Libreofficemath](../../simpleicons-14/L/Libreofficemath.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Libreofficemath
include('simpleicons-14/L/Libreofficemath')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Libreofficemath
include('simpleicons-14/L/Libreofficemath')

' renders the element
Libreofficemath('Libreofficemath', 'Libreofficemath', 'an optional tech label', 'an optional description')
@enduml
```

