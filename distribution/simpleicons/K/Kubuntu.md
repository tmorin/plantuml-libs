# Kubuntu


```text
simpleicons/K/Kubuntu
```

```text
include('simpleicons/K/Kubuntu')
```



| Illustration | Kubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kubuntu.png) | ![illustration for Kubuntu](../../simpleicons/K/Kubuntu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KubuntuXs>`
- `<$KubuntuSm>`
- `<$KubuntuMd>`
- `<$KubuntuLg>`





## Kubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kubuntu
include('simpleicons/K/Kubuntu')

' renders the element
Kubuntu('Kubuntu', 'Kubuntu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kubuntu
include('simpleicons/K/Kubuntu')

' renders the element
Kubuntu('Kubuntu', 'Kubuntu', 'an optional tech label', 'an optional description')
@enduml
```

