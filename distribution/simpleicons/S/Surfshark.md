# Surfshark


```text
simpleicons/S/Surfshark
```

```text
include('simpleicons/S/Surfshark')
```



| Illustration | Surfshark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Surfshark.png) | ![illustration for Surfshark](../../simpleicons/S/Surfshark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SurfsharkXs>`
- `<$SurfsharkSm>`
- `<$SurfsharkMd>`
- `<$SurfsharkLg>`





## Surfshark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Surfshark
include('simpleicons/S/Surfshark')

' renders the element
Surfshark('Surfshark', 'Surfshark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Surfshark
include('simpleicons/S/Surfshark')

' renders the element
Surfshark('Surfshark', 'Surfshark', 'an optional tech label', 'an optional description')
@enduml
```

