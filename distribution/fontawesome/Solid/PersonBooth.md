# PersonBooth


```text
fontawesome/Solid/PersonBooth
```

```text
include('fontawesome/Solid/PersonBooth')
```



| Illustration | PersonBooth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonBooth.png) | ![illustration for PersonBooth](../../fontawesome/Solid/PersonBooth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonBoothXs>`
- `<$PersonBoothSm>`
- `<$PersonBoothMd>`
- `<$PersonBoothLg>`





## PersonBooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonBooth
include('fontawesome/Solid/PersonBooth')

' renders the element
PersonBooth('PersonBooth', 'Person Booth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonBooth
include('fontawesome/Solid/PersonBooth')

' renders the element
PersonBooth('PersonBooth', 'Person Booth', 'an optional tech label', 'an optional description')
@enduml
```

