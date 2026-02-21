# Epel


```text
simpleicons/E/Epel
```

```text
include('simpleicons/E/Epel')
```



| Illustration | Epel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Epel.png) | ![illustration for Epel](../../simpleicons/E/Epel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EpelXs>`
- `<$EpelSm>`
- `<$EpelMd>`
- `<$EpelLg>`





## Epel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Epel
include('simpleicons/E/Epel')

' renders the element
Epel('Epel', 'Epel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Epel
include('simpleicons/E/Epel')

' renders the element
Epel('Epel', 'Epel', 'an optional tech label', 'an optional description')
@enduml
```

