# Kubuntu


```text
simpleicons-14/K/Kubuntu
```

```text
include('simpleicons-14/K/Kubuntu')
```



| Illustration | Kubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kubuntu.png) | ![illustration for Kubuntu](../../simpleicons-14/K/Kubuntu.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kubuntu
include('simpleicons-14/K/Kubuntu')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kubuntu
include('simpleicons-14/K/Kubuntu')

' renders the element
Kubuntu('Kubuntu', 'Kubuntu', 'an optional tech label', 'an optional description')
@enduml
```

