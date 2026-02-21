# Kred


```text
simpleicons/K/Kred
```

```text
include('simpleicons/K/Kred')
```



| Illustration | Kred |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kred.png) | ![illustration for Kred](../../simpleicons/K/Kred.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KredXs>`
- `<$KredSm>`
- `<$KredMd>`
- `<$KredLg>`





## Kred

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kred
include('simpleicons/K/Kred')

' renders the element
Kred('Kred', 'Kred', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kred
include('simpleicons/K/Kred')

' renders the element
Kred('Kred', 'Kred', 'an optional tech label', 'an optional description')
@enduml
```

