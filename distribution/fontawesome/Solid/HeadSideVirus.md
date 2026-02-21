# HeadSideVirus


```text
fontawesome/Solid/HeadSideVirus
```

```text
include('fontawesome/Solid/HeadSideVirus')
```



| Illustration | HeadSideVirus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HeadSideVirus.png) | ![illustration for HeadSideVirus](../../fontawesome/Solid/HeadSideVirus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadSideVirusXs>`
- `<$HeadSideVirusSm>`
- `<$HeadSideVirusMd>`
- `<$HeadSideVirusLg>`





## HeadSideVirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeadSideVirus
include('fontawesome/Solid/HeadSideVirus')

' renders the element
HeadSideVirus('HeadSideVirus', 'Head Side Virus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeadSideVirus
include('fontawesome/Solid/HeadSideVirus')

' renders the element
HeadSideVirus('HeadSideVirus', 'Head Side Virus', 'an optional tech label', 'an optional description')
@enduml
```

