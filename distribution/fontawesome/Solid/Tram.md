# Tram


```text
fontawesome/Solid/Tram
```

```text
include('fontawesome/Solid/Tram')
```



| Illustration | Tram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tram.png) | ![illustration for Tram](../../fontawesome/Solid/Tram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TramXs>`
- `<$TramSm>`
- `<$TramMd>`
- `<$TramLg>`





## Tram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tram
include('fontawesome/Solid/Tram')

' renders the element
Tram('Tram', 'Tram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tram
include('fontawesome/Solid/Tram')

' renders the element
Tram('Tram', 'Tram', 'an optional tech label', 'an optional description')
@enduml
```

