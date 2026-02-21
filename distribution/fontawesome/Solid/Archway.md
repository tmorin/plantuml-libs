# Archway


```text
fontawesome/Solid/Archway
```

```text
include('fontawesome/Solid/Archway')
```



| Illustration | Archway |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Archway.png) | ![illustration for Archway](../../fontawesome/Solid/Archway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArchwayXs>`
- `<$ArchwaySm>`
- `<$ArchwayMd>`
- `<$ArchwayLg>`





## Archway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Archway
include('fontawesome/Solid/Archway')

' renders the element
Archway('Archway', 'Archway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Archway
include('fontawesome/Solid/Archway')

' renders the element
Archway('Archway', 'Archway', 'an optional tech label', 'an optional description')
@enduml
```

