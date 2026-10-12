# Solveddotac


```text
simpleicons/S/Solveddotac
```

```text
include('simpleicons/S/Solveddotac')
```



| Illustration | Solveddotac |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Solveddotac.png) | ![illustration for Solveddotac](../../simpleicons/S/Solveddotac.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SolveddotacXs>`
- `<$SolveddotacSm>`
- `<$SolveddotacMd>`
- `<$SolveddotacLg>`





## Solveddotac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Solveddotac
include('simpleicons/S/Solveddotac')

' renders the element
Solveddotac('Solveddotac', 'Solveddotac', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Solveddotac
include('simpleicons/S/Solveddotac')

' renders the element
Solveddotac('Solveddotac', 'Solveddotac', 'an optional tech label', 'an optional description')
@enduml
```

