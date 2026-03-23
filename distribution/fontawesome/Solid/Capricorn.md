# Capricorn


```text
fontawesome/Solid/Capricorn
```

```text
include('fontawesome/Solid/Capricorn')
```



| Illustration | Capricorn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Capricorn.png) | ![illustration for Capricorn](../../fontawesome/Solid/Capricorn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CapricornXs>`
- `<$CapricornSm>`
- `<$CapricornMd>`
- `<$CapricornLg>`





## Capricorn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Capricorn
include('fontawesome/Solid/Capricorn')

' renders the element
Capricorn('Capricorn', 'Capricorn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Capricorn
include('fontawesome/Solid/Capricorn')

' renders the element
Capricorn('Capricorn', 'Capricorn', 'an optional tech label', 'an optional description')
@enduml
```

