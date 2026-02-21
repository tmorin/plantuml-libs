# LungsVirus


```text
fontawesome/Solid/LungsVirus
```

```text
include('fontawesome/Solid/LungsVirus')
```



| Illustration | LungsVirus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LungsVirus.png) | ![illustration for LungsVirus](../../fontawesome/Solid/LungsVirus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LungsVirusXs>`
- `<$LungsVirusSm>`
- `<$LungsVirusMd>`
- `<$LungsVirusLg>`





## LungsVirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LungsVirus
include('fontawesome/Solid/LungsVirus')

' renders the element
LungsVirus('LungsVirus', 'Lungs Virus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LungsVirus
include('fontawesome/Solid/LungsVirus')

' renders the element
LungsVirus('LungsVirus', 'Lungs Virus', 'an optional tech label', 'an optional description')
@enduml
```

