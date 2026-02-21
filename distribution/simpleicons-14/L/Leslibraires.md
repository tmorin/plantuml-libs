# Leslibraires


```text
simpleicons-14/L/Leslibraires
```

```text
include('simpleicons-14/L/Leslibraires')
```



| Illustration | Leslibraires |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Leslibraires.png) | ![illustration for Leslibraires](../../simpleicons-14/L/Leslibraires.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Leslibraires
include('simpleicons-14/L/Leslibraires')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Leslibraires
include('simpleicons-14/L/Leslibraires')

' renders the element
Leslibraires('Leslibraires', 'Leslibraires', 'an optional tech label', 'an optional description')
@enduml
```

