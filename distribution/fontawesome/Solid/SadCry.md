# SadCry


```text
fontawesome/Solid/SadCry
```

```text
include('fontawesome/Solid/SadCry')
```



| Illustration | SadCry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SadCry.png) | ![illustration for SadCry](../../fontawesome/Solid/SadCry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SadCryXs>`
- `<$SadCrySm>`
- `<$SadCryMd>`
- `<$SadCryLg>`





## SadCry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SadCry
include('fontawesome/Solid/SadCry')

' renders the element
SadCry('SadCry', 'Sad Cry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SadCry
include('fontawesome/Solid/SadCry')

' renders the element
SadCry('SadCry', 'Sad Cry', 'an optional tech label', 'an optional description')
@enduml
```

