# Cog


```text
fontawesome/Solid/Cog
```

```text
include('fontawesome/Solid/Cog')
```



| Illustration | Cog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cog.png) | ![illustration for Cog](../../fontawesome/Solid/Cog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CogXs>`
- `<$CogSm>`
- `<$CogMd>`
- `<$CogLg>`





## Cog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cog
include('fontawesome/Solid/Cog')

' renders the element
Cog('Cog', 'Cog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cog
include('fontawesome/Solid/Cog')

' renders the element
Cog('Cog', 'Cog', 'an optional tech label', 'an optional description')
@enduml
```

