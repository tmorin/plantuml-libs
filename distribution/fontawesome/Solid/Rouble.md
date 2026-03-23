# Rouble


```text
fontawesome/Solid/Rouble
```

```text
include('fontawesome/Solid/Rouble')
```



| Illustration | Rouble |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Rouble.png) | ![illustration for Rouble](../../fontawesome/Solid/Rouble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoubleXs>`
- `<$RoubleSm>`
- `<$RoubleMd>`
- `<$RoubleLg>`





## Rouble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rouble
include('fontawesome/Solid/Rouble')

' renders the element
Rouble('Rouble', 'Rouble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rouble
include('fontawesome/Solid/Rouble')

' renders the element
Rouble('Rouble', 'Rouble', 'an optional tech label', 'an optional description')
@enduml
```

