# Transgender


```text
fontawesome/Solid/Transgender
```

```text
include('fontawesome/Solid/Transgender')
```



| Illustration | Transgender |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Transgender.png) | ![illustration for Transgender](../../fontawesome/Solid/Transgender.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransgenderXs>`
- `<$TransgenderSm>`
- `<$TransgenderMd>`
- `<$TransgenderLg>`





## Transgender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Transgender
include('fontawesome/Solid/Transgender')

' renders the element
Transgender('Transgender', 'Transgender', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Transgender
include('fontawesome/Solid/Transgender')

' renders the element
Transgender('Transgender', 'Transgender', 'an optional tech label', 'an optional description')
@enduml
```

