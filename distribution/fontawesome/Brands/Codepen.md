# Codepen


```text
fontawesome/Brands/Codepen
```

```text
include('fontawesome/Brands/Codepen')
```



| Illustration | Codepen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Codepen.png) | ![illustration for Codepen](../../fontawesome/Brands/Codepen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodepenXs>`
- `<$CodepenSm>`
- `<$CodepenMd>`
- `<$CodepenLg>`





## Codepen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Codepen
include('fontawesome/Brands/Codepen')

' renders the element
Codepen('Codepen', 'Codepen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codepen
include('fontawesome/Brands/Codepen')

' renders the element
Codepen('Codepen', 'Codepen', 'an optional tech label', 'an optional description')
@enduml
```

