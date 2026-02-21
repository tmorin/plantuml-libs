# Trophy


```text
fontawesome/Solid/Trophy
```

```text
include('fontawesome/Solid/Trophy')
```



| Illustration | Trophy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Trophy.png) | ![illustration for Trophy](../../fontawesome/Solid/Trophy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrophyXs>`
- `<$TrophySm>`
- `<$TrophyMd>`
- `<$TrophyLg>`





## Trophy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Trophy
include('fontawesome/Solid/Trophy')

' renders the element
Trophy('Trophy', 'Trophy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trophy
include('fontawesome/Solid/Trophy')

' renders the element
Trophy('Trophy', 'Trophy', 'an optional tech label', 'an optional description')
@enduml
```

