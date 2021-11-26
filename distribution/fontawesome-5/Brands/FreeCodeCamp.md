# FreeCodeCamp


```text
fontawesome-5/Brands/FreeCodeCamp
```

```text
include('fontawesome-5/Brands/FreeCodeCamp')
```



| Illustration | FreeCodeCamp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FreeCodeCamp.png) | ![illustration for FreeCodeCamp](../../fontawesome-5/Brands/FreeCodeCamp.Local.png) |




## FreeCodeCamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FreeCodeCamp
include('fontawesome-5/Brands/FreeCodeCamp')

' renders the element
FreeCodeCamp('FreeCodeCamp', 'Free Code Camp', 'an optional tech label')
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

' loads the Item which embeds the element FreeCodeCamp
include('fontawesome-5/Brands/FreeCodeCamp')

' renders the element
FreeCodeCamp('FreeCodeCamp', 'Free Code Camp', 'an optional tech label')
@enduml
```

