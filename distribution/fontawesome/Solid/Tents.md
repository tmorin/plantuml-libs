# Tents


```text
fontawesome/Solid/Tents
```

```text
include('fontawesome/Solid/Tents')
```



| Illustration | Tents |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tents.png) | ![illustration for Tents](../../fontawesome/Solid/Tents.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TentsXs>`
- `<$TentsSm>`
- `<$TentsMd>`
- `<$TentsLg>`





## Tents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tents
include('fontawesome/Solid/Tents')

' renders the element
Tents('Tents', 'Tents', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tents
include('fontawesome/Solid/Tents')

' renders the element
Tents('Tents', 'Tents', 'an optional tech label', 'an optional description')
@enduml
```

