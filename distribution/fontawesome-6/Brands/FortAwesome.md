# FortAwesome


```text
fontawesome-6/Brands/FortAwesome
```

```text
include('fontawesome-6/Brands/FortAwesome')
```



| Illustration | FortAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/FortAwesome.png) | ![illustration for FortAwesome](../../fontawesome-6/Brands/FortAwesome.Local.png) |




## FortAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FortAwesome
include('fontawesome-6/Brands/FortAwesome')

' renders the element
FortAwesome('FortAwesome', 'Fort Awesome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FortAwesome
include('fontawesome-6/Brands/FortAwesome')

' renders the element
FortAwesome('FortAwesome', 'Fort Awesome', 'an optional tech label', 'an optional description')
@enduml
```

