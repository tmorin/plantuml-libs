# Viruses


```text
fontawesome-6/Solid/Viruses
```

```text
include('fontawesome-6/Solid/Viruses')
```



| Illustration | Viruses |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Viruses.png) | ![illustration for Viruses](../../fontawesome-6/Solid/Viruses.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VirusesXs>`
- `<$VirusesSm>`
- `<$VirusesMd>`
- `<$VirusesLg>`





## Viruses

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Viruses
include('fontawesome-6/Solid/Viruses')

' renders the element
Viruses('Viruses', 'Viruses', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Viruses
include('fontawesome-6/Solid/Viruses')

' renders the element
Viruses('Viruses', 'Viruses', 'an optional tech label', 'an optional description')
@enduml
```

