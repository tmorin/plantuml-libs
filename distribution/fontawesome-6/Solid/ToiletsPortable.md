# ToiletsPortable


```text
fontawesome-6/Solid/ToiletsPortable
```

```text
include('fontawesome-6/Solid/ToiletsPortable')
```



| Illustration | ToiletsPortable |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ToiletsPortable.png) | ![illustration for ToiletsPortable](../../fontawesome-6/Solid/ToiletsPortable.Local.png) |




## ToiletsPortable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ToiletsPortable
include('fontawesome-6/Solid/ToiletsPortable')

' renders the element
ToiletsPortable('ToiletsPortable', 'Toilets Portable', 'an optional tech label')
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

' loads the Item which embeds the element ToiletsPortable
include('fontawesome-6/Solid/ToiletsPortable')

' renders the element
ToiletsPortable('ToiletsPortable', 'Toilets Portable', 'an optional tech label')
@enduml
```

