# Aquarius


```text
fontawesome/Solid/Aquarius
```

```text
include('fontawesome/Solid/Aquarius')
```



| Illustration | Aquarius |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Aquarius.png) | ![illustration for Aquarius](../../fontawesome/Solid/Aquarius.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AquariusXs>`
- `<$AquariusSm>`
- `<$AquariusMd>`
- `<$AquariusLg>`





## Aquarius

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Aquarius
include('fontawesome/Solid/Aquarius')

' renders the element
Aquarius('Aquarius', 'Aquarius', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aquarius
include('fontawesome/Solid/Aquarius')

' renders the element
Aquarius('Aquarius', 'Aquarius', 'an optional tech label', 'an optional description')
@enduml
```

