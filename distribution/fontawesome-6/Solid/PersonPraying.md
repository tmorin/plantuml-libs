# PersonPraying


```text
fontawesome-6/Solid/PersonPraying
```

```text
include('fontawesome-6/Solid/PersonPraying')
```



| Illustration | PersonPraying |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonPraying.png) | ![illustration for PersonPraying](../../fontawesome-6/Solid/PersonPraying.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonPraying
include('fontawesome-6/Solid/PersonPraying')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonPraying
include('fontawesome-6/Solid/PersonPraying')

' renders the element
PersonPraying('PersonPraying', 'Person Praying', 'an optional tech label', 'an optional description')
@enduml
```

