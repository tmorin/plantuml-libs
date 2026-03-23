# Taurus


```text
fontawesome/Solid/Taurus
```

```text
include('fontawesome/Solid/Taurus')
```



| Illustration | Taurus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Taurus.png) | ![illustration for Taurus](../../fontawesome/Solid/Taurus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TaurusXs>`
- `<$TaurusSm>`
- `<$TaurusMd>`
- `<$TaurusLg>`





## Taurus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Taurus
include('fontawesome/Solid/Taurus')

' renders the element
Taurus('Taurus', 'Taurus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Taurus
include('fontawesome/Solid/Taurus')

' renders the element
Taurus('Taurus', 'Taurus', 'an optional tech label', 'an optional description')
@enduml
```

