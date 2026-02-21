# Sidequest


```text
simpleicons/S/Sidequest
```

```text
include('simpleicons/S/Sidequest')
```



| Illustration | Sidequest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sidequest.png) | ![illustration for Sidequest](../../simpleicons/S/Sidequest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SidequestXs>`
- `<$SidequestSm>`
- `<$SidequestMd>`
- `<$SidequestLg>`





## Sidequest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sidequest
include('simpleicons/S/Sidequest')

' renders the element
Sidequest('Sidequest', 'Sidequest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sidequest
include('simpleicons/S/Sidequest')

' renders the element
Sidequest('Sidequest', 'Sidequest', 'an optional tech label', 'an optional description')
@enduml
```

