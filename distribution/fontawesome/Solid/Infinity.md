# Infinity


```text
fontawesome/Solid/Infinity
```

```text
include('fontawesome/Solid/Infinity')
```



| Illustration | Infinity |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Infinity.png) | ![illustration for Infinity](../../fontawesome/Solid/Infinity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InfinityXs>`
- `<$InfinitySm>`
- `<$InfinityMd>`
- `<$InfinityLg>`





## Infinity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Infinity
include('fontawesome/Solid/Infinity')

' renders the element
Infinity('Infinity', 'Infinity', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Infinity
include('fontawesome/Solid/Infinity')

' renders the element
Infinity('Infinity', 'Infinity', 'an optional tech label', 'an optional description')
@enduml
```

