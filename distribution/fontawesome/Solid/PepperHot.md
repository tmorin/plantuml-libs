# PepperHot


```text
fontawesome/Solid/PepperHot
```

```text
include('fontawesome/Solid/PepperHot')
```



| Illustration | PepperHot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PepperHot.png) | ![illustration for PepperHot](../../fontawesome/Solid/PepperHot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PepperHotXs>`
- `<$PepperHotSm>`
- `<$PepperHotMd>`
- `<$PepperHotLg>`





## PepperHot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PepperHot
include('fontawesome/Solid/PepperHot')

' renders the element
PepperHot('PepperHot', 'Pepper Hot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PepperHot
include('fontawesome/Solid/PepperHot')

' renders the element
PepperHot('PepperHot', 'Pepper Hot', 'an optional tech label', 'an optional description')
@enduml
```

