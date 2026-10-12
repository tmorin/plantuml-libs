# Contensis


```text
simpleicons/C/Contensis
```

```text
include('simpleicons/C/Contensis')
```



| Illustration | Contensis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Contensis.png) | ![illustration for Contensis](../../simpleicons/C/Contensis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContensisXs>`
- `<$ContensisSm>`
- `<$ContensisMd>`
- `<$ContensisLg>`





## Contensis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Contensis
include('simpleicons/C/Contensis')

' renders the element
Contensis('Contensis', 'Contensis', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contensis
include('simpleicons/C/Contensis')

' renders the element
Contensis('Contensis', 'Contensis', 'an optional tech label', 'an optional description')
@enduml
```

