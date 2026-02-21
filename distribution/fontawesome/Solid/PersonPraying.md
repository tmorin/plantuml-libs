# PersonPraying


```text
fontawesome/Solid/PersonPraying
```

```text
include('fontawesome/Solid/PersonPraying')
```



| Illustration | PersonPraying |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonPraying.png) | ![illustration for PersonPraying](../../fontawesome/Solid/PersonPraying.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonPrayingXs>`
- `<$PersonPrayingSm>`
- `<$PersonPrayingMd>`
- `<$PersonPrayingLg>`





## PersonPraying

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonPraying
include('fontawesome/Solid/PersonPraying')

' renders the element
PersonPraying('PersonPraying', 'Person Praying', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonPraying
include('fontawesome/Solid/PersonPraying')

' renders the element
PersonPraying('PersonPraying', 'Person Praying', 'an optional tech label', 'an optional description')
@enduml
```

