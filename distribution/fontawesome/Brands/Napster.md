# Napster


```text
fontawesome/Brands/Napster
```

```text
include('fontawesome/Brands/Napster')
```



| Illustration | Napster |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Napster.png) | ![illustration for Napster](../../fontawesome/Brands/Napster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NapsterXs>`
- `<$NapsterSm>`
- `<$NapsterMd>`
- `<$NapsterLg>`





## Napster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Napster
include('fontawesome/Brands/Napster')

' renders the element
Napster('Napster', 'Napster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Napster
include('fontawesome/Brands/Napster')

' renders the element
Napster('Napster', 'Napster', 'an optional tech label', 'an optional description')
@enduml
```

