# Macports


```text
simpleicons/M/Macports
```

```text
include('simpleicons/M/Macports')
```



| Illustration | Macports |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Macports.png) | ![illustration for Macports](../../simpleicons/M/Macports.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MacportsXs>`
- `<$MacportsSm>`
- `<$MacportsMd>`
- `<$MacportsLg>`





## Macports

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Macports
include('simpleicons/M/Macports')

' renders the element
Macports('Macports', 'Macports', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Macports
include('simpleicons/M/Macports')

' renders the element
Macports('Macports', 'Macports', 'an optional tech label', 'an optional description')
@enduml
```

