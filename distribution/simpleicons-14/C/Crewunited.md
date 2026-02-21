# Crewunited


```text
simpleicons-14/C/Crewunited
```

```text
include('simpleicons-14/C/Crewunited')
```



| Illustration | Crewunited |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Crewunited.png) | ![illustration for Crewunited](../../simpleicons-14/C/Crewunited.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrewunitedXs>`
- `<$CrewunitedSm>`
- `<$CrewunitedMd>`
- `<$CrewunitedLg>`





## Crewunited

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Crewunited
include('simpleicons-14/C/Crewunited')

' renders the element
Crewunited('Crewunited', 'Crewunited', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Crewunited
include('simpleicons-14/C/Crewunited')

' renders the element
Crewunited('Crewunited', 'Crewunited', 'an optional tech label', 'an optional description')
@enduml
```

