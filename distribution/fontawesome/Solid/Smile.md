# Smile


```text
fontawesome/Solid/Smile
```

```text
include('fontawesome/Solid/Smile')
```



| Illustration | Smile |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Smile.png) | ![illustration for Smile](../../fontawesome/Solid/Smile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmileXs>`
- `<$SmileSm>`
- `<$SmileMd>`
- `<$SmileLg>`





## Smile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Smile
include('fontawesome/Solid/Smile')

' renders the element
Smile('Smile', 'Smile', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smile
include('fontawesome/Solid/Smile')

' renders the element
Smile('Smile', 'Smile', 'an optional tech label', 'an optional description')
@enduml
```

