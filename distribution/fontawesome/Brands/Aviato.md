# Aviato


```text
fontawesome/Brands/Aviato
```

```text
include('fontawesome/Brands/Aviato')
```



| Illustration | Aviato |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Aviato.png) | ![illustration for Aviato](../../fontawesome/Brands/Aviato.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AviatoXs>`
- `<$AviatoSm>`
- `<$AviatoMd>`
- `<$AviatoLg>`





## Aviato

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Aviato
include('fontawesome/Brands/Aviato')

' renders the element
Aviato('Aviato', 'Aviato', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aviato
include('fontawesome/Brands/Aviato')

' renders the element
Aviato('Aviato', 'Aviato', 'an optional tech label', 'an optional description')
@enduml
```

