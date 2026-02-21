# Lightbulb


```text
fontawesome/Regular/Lightbulb
```

```text
include('fontawesome/Regular/Lightbulb')
```



| Illustration | Lightbulb |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Lightbulb.png) | ![illustration for Lightbulb](../../fontawesome/Regular/Lightbulb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LightbulbXs>`
- `<$LightbulbSm>`
- `<$LightbulbMd>`
- `<$LightbulbLg>`





## Lightbulb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Lightbulb
include('fontawesome/Regular/Lightbulb')

' renders the element
Lightbulb('Lightbulb', 'Lightbulb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lightbulb
include('fontawesome/Regular/Lightbulb')

' renders the element
Lightbulb('Lightbulb', 'Lightbulb', 'an optional tech label', 'an optional description')
@enduml
```

