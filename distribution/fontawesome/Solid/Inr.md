# Inr


```text
fontawesome/Solid/Inr
```

```text
include('fontawesome/Solid/Inr')
```



| Illustration | Inr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Inr.png) | ![illustration for Inr](../../fontawesome/Solid/Inr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InrXs>`
- `<$InrSm>`
- `<$InrMd>`
- `<$InrLg>`





## Inr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Inr
include('fontawesome/Solid/Inr')

' renders the element
Inr('Inr', 'Inr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Inr
include('fontawesome/Solid/Inr')

' renders the element
Inr('Inr', 'Inr', 'an optional tech label', 'an optional description')
@enduml
```

