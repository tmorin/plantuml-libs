# PepperHot


```text
fontawesome-5/Solid/PepperHot
```

```text
include('fontawesome-5/Solid/PepperHot')
```



| Illustration | PepperHot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PepperHot.png) | ![illustration for PepperHot](../../fontawesome-5/Solid/PepperHot.Local.png) |




## PepperHot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PepperHot
include('fontawesome-5/Solid/PepperHot')

' renders the element
PepperHot('PepperHot', 'Pepper Hot', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PepperHot
include('fontawesome-5/Solid/PepperHot')

' renders the element
PepperHot('PepperHot', 'Pepper Hot', 'an optional tech label')
@enduml
```

