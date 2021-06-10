# FortAwesome


```text
fontawesome-5/Brands/FortAwesome
```

```text
include('fontawesome-5/Brands/FortAwesome')
```



| Illustration | FortAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FortAwesome.png) | ![illustration for FortAwesome](../../fontawesome-5/Brands/FortAwesome.Local.png) |




## FortAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FortAwesome
include('fontawesome-5/Brands/FortAwesome')

' renders the element
FortAwesome('FortAwesome', 'Fort Awesome', 'an optional tech label')
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

' loads the Item which embeds the element FortAwesome
include('fontawesome-5/Brands/FortAwesome')

' renders the element
FortAwesome('FortAwesome', 'Fort Awesome', 'an optional tech label')
@enduml
```

