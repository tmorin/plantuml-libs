# PersonBooth


```text
fontawesome-6/Solid/PersonBooth
```

```text
include('fontawesome-6/Solid/PersonBooth')
```



| Illustration | PersonBooth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonBooth.png) | ![illustration for PersonBooth](../../fontawesome-6/Solid/PersonBooth.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonBooth
include('fontawesome-6/Solid/PersonBooth')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonBooth
include('fontawesome-6/Solid/PersonBooth')

' renders the element
PersonBooth('PersonBooth', 'Person Booth', 'an optional tech label', 'an optional description')
@enduml
```

