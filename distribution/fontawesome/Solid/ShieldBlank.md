# ShieldBlank


```text
fontawesome/Solid/ShieldBlank
```

```text
include('fontawesome/Solid/ShieldBlank')
```



| Illustration | ShieldBlank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShieldBlank.png) | ![illustration for ShieldBlank](../../fontawesome/Solid/ShieldBlank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShieldBlankXs>`
- `<$ShieldBlankSm>`
- `<$ShieldBlankMd>`
- `<$ShieldBlankLg>`





## ShieldBlank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShieldBlank
include('fontawesome/Solid/ShieldBlank')

' renders the element
ShieldBlank('ShieldBlank', 'Shield Blank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShieldBlank
include('fontawesome/Solid/ShieldBlank')

' renders the element
ShieldBlank('ShieldBlank', 'Shield Blank', 'an optional tech label', 'an optional description')
@enduml
```

