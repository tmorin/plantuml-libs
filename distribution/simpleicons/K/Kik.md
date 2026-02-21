# Kik


```text
simpleicons/K/Kik
```

```text
include('simpleicons/K/Kik')
```



| Illustration | Kik |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kik.png) | ![illustration for Kik](../../simpleicons/K/Kik.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KikXs>`
- `<$KikSm>`
- `<$KikMd>`
- `<$KikLg>`





## Kik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kik
include('simpleicons/K/Kik')

' renders the element
Kik('Kik', 'Kik', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kik
include('simpleicons/K/Kik')

' renders the element
Kik('Kik', 'Kik', 'an optional tech label', 'an optional description')
@enduml
```

