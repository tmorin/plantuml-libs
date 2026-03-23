# Pray


```text
fontawesome/Solid/Pray
```

```text
include('fontawesome/Solid/Pray')
```



| Illustration | Pray |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Pray.png) | ![illustration for Pray](../../fontawesome/Solid/Pray.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrayXs>`
- `<$PraySm>`
- `<$PrayMd>`
- `<$PrayLg>`





## Pray

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pray
include('fontawesome/Solid/Pray')

' renders the element
Pray('Pray', 'Pray', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pray
include('fontawesome/Solid/Pray')

' renders the element
Pray('Pray', 'Pray', 'an optional tech label', 'an optional description')
@enduml
```

