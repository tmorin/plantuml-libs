# Award


```text
fontawesome/Solid/Award
```

```text
include('fontawesome/Solid/Award')
```



| Illustration | Award |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Award.png) | ![illustration for Award](../../fontawesome/Solid/Award.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwardXs>`
- `<$AwardSm>`
- `<$AwardMd>`
- `<$AwardLg>`





## Award

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Award
include('fontawesome/Solid/Award')

' renders the element
Award('Award', 'Award', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Award
include('fontawesome/Solid/Award')

' renders the element
Award('Award', 'Award', 'an optional tech label', 'an optional description')
@enduml
```

