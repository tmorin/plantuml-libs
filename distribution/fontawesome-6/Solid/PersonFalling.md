# PersonFalling


```text
fontawesome-6/Solid/PersonFalling
```

```text
include('fontawesome-6/Solid/PersonFalling')
```



| Illustration | PersonFalling |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonFalling.png) | ![illustration for PersonFalling](../../fontawesome-6/Solid/PersonFalling.Local.png) |




## PersonFalling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonFalling
include('fontawesome-6/Solid/PersonFalling')

' renders the element
PersonFalling('PersonFalling', 'Person Falling', 'an optional tech label')
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

' loads the Item which embeds the element PersonFalling
include('fontawesome-6/Solid/PersonFalling')

' renders the element
PersonFalling('PersonFalling', 'Person Falling', 'an optional tech label')
@enduml
```

