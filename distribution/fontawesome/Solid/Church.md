# Church


```text
fontawesome/Solid/Church
```

```text
include('fontawesome/Solid/Church')
```



| Illustration | Church |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Church.png) | ![illustration for Church](../../fontawesome/Solid/Church.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChurchXs>`
- `<$ChurchSm>`
- `<$ChurchMd>`
- `<$ChurchLg>`





## Church

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Church
include('fontawesome/Solid/Church')

' renders the element
Church('Church', 'Church', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Church
include('fontawesome/Solid/Church')

' renders the element
Church('Church', 'Church', 'an optional tech label', 'an optional description')
@enduml
```

