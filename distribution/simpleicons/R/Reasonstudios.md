# Reasonstudios


```text
simpleicons/R/Reasonstudios
```

```text
include('simpleicons/R/Reasonstudios')
```



| Illustration | Reasonstudios |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Reasonstudios.png) | ![illustration for Reasonstudios](../../simpleicons/R/Reasonstudios.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReasonstudiosXs>`
- `<$ReasonstudiosSm>`
- `<$ReasonstudiosMd>`
- `<$ReasonstudiosLg>`





## Reasonstudios

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Reasonstudios
include('simpleicons/R/Reasonstudios')

' renders the element
Reasonstudios('Reasonstudios', 'Reasonstudios', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reasonstudios
include('simpleicons/R/Reasonstudios')

' renders the element
Reasonstudios('Reasonstudios', 'Reasonstudios', 'an optional tech label', 'an optional description')
@enduml
```

