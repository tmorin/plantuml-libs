# Rupee


```text
fontawesome/Solid/Rupee
```

```text
include('fontawesome/Solid/Rupee')
```



| Illustration | Rupee |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Rupee.png) | ![illustration for Rupee](../../fontawesome/Solid/Rupee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RupeeXs>`
- `<$RupeeSm>`
- `<$RupeeMd>`
- `<$RupeeLg>`





## Rupee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rupee
include('fontawesome/Solid/Rupee')

' renders the element
Rupee('Rupee', 'Rupee', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rupee
include('fontawesome/Solid/Rupee')

' renders the element
Rupee('Rupee', 'Rupee', 'an optional tech label', 'an optional description')
@enduml
```

