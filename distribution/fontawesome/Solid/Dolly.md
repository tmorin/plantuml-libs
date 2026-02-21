# Dolly


```text
fontawesome/Solid/Dolly
```

```text
include('fontawesome/Solid/Dolly')
```



| Illustration | Dolly |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dolly.png) | ![illustration for Dolly](../../fontawesome/Solid/Dolly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DollyXs>`
- `<$DollySm>`
- `<$DollyMd>`
- `<$DollyLg>`





## Dolly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dolly
include('fontawesome/Solid/Dolly')

' renders the element
Dolly('Dolly', 'Dolly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dolly
include('fontawesome/Solid/Dolly')

' renders the element
Dolly('Dolly', 'Dolly', 'an optional tech label', 'an optional description')
@enduml
```

