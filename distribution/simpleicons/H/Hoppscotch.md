# Hoppscotch


```text
simpleicons/H/Hoppscotch
```

```text
include('simpleicons/H/Hoppscotch')
```



| Illustration | Hoppscotch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hoppscotch.png) | ![illustration for Hoppscotch](../../simpleicons/H/Hoppscotch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HoppscotchXs>`
- `<$HoppscotchSm>`
- `<$HoppscotchMd>`
- `<$HoppscotchLg>`





## Hoppscotch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hoppscotch
include('simpleicons/H/Hoppscotch')

' renders the element
Hoppscotch('Hoppscotch', 'Hoppscotch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hoppscotch
include('simpleicons/H/Hoppscotch')

' renders the element
Hoppscotch('Hoppscotch', 'Hoppscotch', 'an optional tech label', 'an optional description')
@enduml
```

