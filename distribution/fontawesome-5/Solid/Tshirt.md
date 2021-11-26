# Tshirt


```text
fontawesome-5/Solid/Tshirt
```

```text
include('fontawesome-5/Solid/Tshirt')
```



| Illustration | Tshirt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tshirt.png) | ![illustration for Tshirt](../../fontawesome-5/Solid/Tshirt.Local.png) |




## Tshirt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tshirt
include('fontawesome-5/Solid/Tshirt')

' renders the element
Tshirt('Tshirt', 'Tshirt', 'an optional tech label')
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

' loads the Item which embeds the element Tshirt
include('fontawesome-5/Solid/Tshirt')

' renders the element
Tshirt('Tshirt', 'Tshirt', 'an optional tech label')
@enduml
```

