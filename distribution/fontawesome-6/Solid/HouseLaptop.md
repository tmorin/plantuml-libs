# HouseLaptop


```text
fontawesome-6/Solid/HouseLaptop
```

```text
include('fontawesome-6/Solid/HouseLaptop')
```



| Illustration | HouseLaptop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseLaptop.png) | ![illustration for HouseLaptop](../../fontawesome-6/Solid/HouseLaptop.Local.png) |




## HouseLaptop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseLaptop
include('fontawesome-6/Solid/HouseLaptop')

' renders the element
HouseLaptop('HouseLaptop', 'House Laptop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseLaptop
include('fontawesome-6/Solid/HouseLaptop')

' renders the element
HouseLaptop('HouseLaptop', 'House Laptop', 'an optional tech label', 'an optional description')
@enduml
```

