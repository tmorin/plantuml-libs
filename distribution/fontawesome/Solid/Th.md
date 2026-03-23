# Th


```text
fontawesome/Solid/Th
```

```text
include('fontawesome/Solid/Th')
```



| Illustration | Th |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Th.png) | ![illustration for Th](../../fontawesome/Solid/Th.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThXs>`
- `<$ThSm>`
- `<$ThMd>`
- `<$ThLg>`





## Th

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Th
include('fontawesome/Solid/Th')

' renders the element
Th('Th', 'Th', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Th
include('fontawesome/Solid/Th')

' renders the element
Th('Th', 'Th', 'an optional tech label', 'an optional description')
@enduml
```

