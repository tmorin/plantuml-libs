# Crewai


```text
simpleicons/C/Crewai
```

```text
include('simpleicons/C/Crewai')
```



| Illustration | Crewai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Crewai.png) | ![illustration for Crewai](../../simpleicons/C/Crewai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrewaiXs>`
- `<$CrewaiSm>`
- `<$CrewaiMd>`
- `<$CrewaiLg>`





## Crewai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Crewai
include('simpleicons/C/Crewai')

' renders the element
Crewai('Crewai', 'Crewai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crewai
include('simpleicons/C/Crewai')

' renders the element
Crewai('Crewai', 'Crewai', 'an optional tech label', 'an optional description')
@enduml
```

