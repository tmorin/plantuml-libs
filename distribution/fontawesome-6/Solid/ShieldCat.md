# ShieldCat


```text
fontawesome-6/Solid/ShieldCat
```

```text
include('fontawesome-6/Solid/ShieldCat')
```



| Illustration | ShieldCat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ShieldCat.png) | ![illustration for ShieldCat](../../fontawesome-6/Solid/ShieldCat.Local.png) |




## ShieldCat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShieldCat
include('fontawesome-6/Solid/ShieldCat')

' renders the element
ShieldCat('ShieldCat', 'Shield Cat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShieldCat
include('fontawesome-6/Solid/ShieldCat')

' renders the element
ShieldCat('ShieldCat', 'Shield Cat', 'an optional tech label', 'an optional description')
@enduml
```

