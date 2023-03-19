# Argos


```text
simpleicons-8/A/Argos
```

```text
include('simpleicons-8/A/Argos')
```



| Illustration | Argos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Argos.png) | ![illustration for Argos](../../simpleicons-8/A/Argos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArgosXs>`
- `<$ArgosSm>`
- `<$ArgosMd>`
- `<$ArgosLg>`





## Argos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Argos
include('simpleicons-8/A/Argos')

' renders the element
Argos('Argos', 'Argos', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Argos
include('simpleicons-8/A/Argos')

' renders the element
Argos('Argos', 'Argos', 'an optional tech label', 'an optional description')
@enduml
```

