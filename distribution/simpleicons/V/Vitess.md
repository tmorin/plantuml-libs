# Vitess


```text
simpleicons/V/Vitess
```

```text
include('simpleicons/V/Vitess')
```



| Illustration | Vitess |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vitess.png) | ![illustration for Vitess](../../simpleicons/V/Vitess.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VitessXs>`
- `<$VitessSm>`
- `<$VitessMd>`
- `<$VitessLg>`





## Vitess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vitess
include('simpleicons/V/Vitess')

' renders the element
Vitess('Vitess', 'Vitess', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vitess
include('simpleicons/V/Vitess')

' renders the element
Vitess('Vitess', 'Vitess', 'an optional tech label', 'an optional description')
@enduml
```

