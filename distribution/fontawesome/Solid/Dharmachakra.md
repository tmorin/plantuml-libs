# Dharmachakra


```text
fontawesome/Solid/Dharmachakra
```

```text
include('fontawesome/Solid/Dharmachakra')
```



| Illustration | Dharmachakra |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dharmachakra.png) | ![illustration for Dharmachakra](../../fontawesome/Solid/Dharmachakra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DharmachakraXs>`
- `<$DharmachakraSm>`
- `<$DharmachakraMd>`
- `<$DharmachakraLg>`





## Dharmachakra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dharmachakra
include('fontawesome/Solid/Dharmachakra')

' renders the element
Dharmachakra('Dharmachakra', 'Dharmachakra', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dharmachakra
include('fontawesome/Solid/Dharmachakra')

' renders the element
Dharmachakra('Dharmachakra', 'Dharmachakra', 'an optional tech label', 'an optional description')
@enduml
```

