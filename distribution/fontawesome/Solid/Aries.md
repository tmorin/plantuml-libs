# Aries


```text
fontawesome/Solid/Aries
```

```text
include('fontawesome/Solid/Aries')
```



| Illustration | Aries |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Aries.png) | ![illustration for Aries](../../fontawesome/Solid/Aries.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AriesXs>`
- `<$AriesSm>`
- `<$AriesMd>`
- `<$AriesLg>`





## Aries

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Aries
include('fontawesome/Solid/Aries')

' renders the element
Aries('Aries', 'Aries', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aries
include('fontawesome/Solid/Aries')

' renders the element
Aries('Aries', 'Aries', 'an optional tech label', 'an optional description')
@enduml
```

