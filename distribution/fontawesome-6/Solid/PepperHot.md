# PepperHot


```text
fontawesome-6/Solid/PepperHot
```

```text
include('fontawesome-6/Solid/PepperHot')
```



| Illustration | PepperHot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PepperHot.png) | ![illustration for PepperHot](../../fontawesome-6/Solid/PepperHot.Local.png) |




## PepperHot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PepperHot
include('fontawesome-6/Solid/PepperHot')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PepperHot
include('fontawesome-6/Solid/PepperHot')

' renders the element
PepperHot('PepperHot', 'Pepper Hot', 'an optional tech label')
@enduml
```

