# Hornbill


```text
fontawesome-5/Brands/Hornbill
```

```text
include('fontawesome-5/Brands/Hornbill')
```



| Illustration | Hornbill |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Hornbill.png) | ![illustration for Hornbill](../../fontawesome-5/Brands/Hornbill.Local.png) |




## Hornbill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hornbill
include('fontawesome-5/Brands/Hornbill')

' renders the element
Hornbill('Hornbill', 'Hornbill', 'an optional tech label')
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

' loads the Item which embeds the element Hornbill
include('fontawesome-5/Brands/Hornbill')

' renders the element
Hornbill('Hornbill', 'Hornbill', 'an optional tech label')
@enduml
```

