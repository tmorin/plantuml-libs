# Dhl


```text
fontawesome-6/Brands/Dhl
```

```text
include('fontawesome-6/Brands/Dhl')
```



| Illustration | Dhl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Dhl.png) | ![illustration for Dhl](../../fontawesome-6/Brands/Dhl.Local.png) |




## Dhl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dhl
include('fontawesome-6/Brands/Dhl')

' renders the element
Dhl('Dhl', 'Dhl', 'an optional tech label')
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

' loads the Item which embeds the element Dhl
include('fontawesome-6/Brands/Dhl')

' renders the element
Dhl('Dhl', 'Dhl', 'an optional tech label')
@enduml
```

