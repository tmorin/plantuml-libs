# Gbp


```text
fontawesome/Solid/Gbp
```

```text
include('fontawesome/Solid/Gbp')
```



| Illustration | Gbp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Gbp.png) | ![illustration for Gbp](../../fontawesome/Solid/Gbp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GbpXs>`
- `<$GbpSm>`
- `<$GbpMd>`
- `<$GbpLg>`





## Gbp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gbp
include('fontawesome/Solid/Gbp')

' renders the element
Gbp('Gbp', 'Gbp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gbp
include('fontawesome/Solid/Gbp')

' renders the element
Gbp('Gbp', 'Gbp', 'an optional tech label', 'an optional description')
@enduml
```

