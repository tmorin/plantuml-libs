# Leslibraires


```text
simpleicons/L/Leslibraires
```

```text
include('simpleicons/L/Leslibraires')
```



| Illustration | Leslibraires |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Leslibraires.png) | ![illustration for Leslibraires](../../simpleicons/L/Leslibraires.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeslibrairesXs>`
- `<$LeslibrairesSm>`
- `<$LeslibrairesMd>`
- `<$LeslibrairesLg>`





## Leslibraires

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Leslibraires
include('simpleicons/L/Leslibraires')

' renders the element
Leslibraires('Leslibraires', 'Leslibraires', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Leslibraires
include('simpleicons/L/Leslibraires')

' renders the element
Leslibraires('Leslibraires', 'Leslibraires', 'an optional tech label', 'an optional description')
@enduml
```

