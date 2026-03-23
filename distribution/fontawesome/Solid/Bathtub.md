# Bathtub


```text
fontawesome/Solid/Bathtub
```

```text
include('fontawesome/Solid/Bathtub')
```



| Illustration | Bathtub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bathtub.png) | ![illustration for Bathtub](../../fontawesome/Solid/Bathtub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BathtubXs>`
- `<$BathtubSm>`
- `<$BathtubMd>`
- `<$BathtubLg>`





## Bathtub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bathtub
include('fontawesome/Solid/Bathtub')

' renders the element
Bathtub('Bathtub', 'Bathtub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bathtub
include('fontawesome/Solid/Bathtub')

' renders the element
Bathtub('Bathtub', 'Bathtub', 'an optional tech label', 'an optional description')
@enduml
```

