# Hippo


```text
fontawesome-6/Solid/Hippo
```

```text
include('fontawesome-6/Solid/Hippo')
```



| Illustration | Hippo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Hippo.png) | ![illustration for Hippo](../../fontawesome-6/Solid/Hippo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HippoXs>`
- `<$HippoSm>`
- `<$HippoMd>`
- `<$HippoLg>`





## Hippo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hippo
include('fontawesome-6/Solid/Hippo')

' renders the element
Hippo('Hippo', 'Hippo', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hippo
include('fontawesome-6/Solid/Hippo')

' renders the element
Hippo('Hippo', 'Hippo', 'an optional tech label', 'an optional description')
@enduml
```

