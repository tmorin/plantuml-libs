# ShieldVirus


```text
fontawesome/Solid/ShieldVirus
```

```text
include('fontawesome/Solid/ShieldVirus')
```



| Illustration | ShieldVirus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShieldVirus.png) | ![illustration for ShieldVirus](../../fontawesome/Solid/ShieldVirus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShieldVirusXs>`
- `<$ShieldVirusSm>`
- `<$ShieldVirusMd>`
- `<$ShieldVirusLg>`





## ShieldVirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShieldVirus
include('fontawesome/Solid/ShieldVirus')

' renders the element
ShieldVirus('ShieldVirus', 'Shield Virus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShieldVirus
include('fontawesome/Solid/ShieldVirus')

' renders the element
ShieldVirus('ShieldVirus', 'Shield Virus', 'an optional tech label', 'an optional description')
@enduml
```

