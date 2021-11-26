# Tablets


```text
fontawesome-5/Solid/Tablets
```

```text
include('fontawesome-5/Solid/Tablets')
```



| Illustration | Tablets |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tablets.png) | ![illustration for Tablets](../../fontawesome-5/Solid/Tablets.Local.png) |




## Tablets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tablets
include('fontawesome-5/Solid/Tablets')

' renders the element
Tablets('Tablets', 'Tablets', 'an optional tech label')
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

' loads the Item which embeds the element Tablets
include('fontawesome-5/Solid/Tablets')

' renders the element
Tablets('Tablets', 'Tablets', 'an optional tech label')
@enduml
```

