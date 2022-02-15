# CcDiscover


```text
fontawesome-6/Brands/CcDiscover
```

```text
include('fontawesome-6/Brands/CcDiscover')
```



| Illustration | CcDiscover |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CcDiscover.png) | ![illustration for CcDiscover](../../fontawesome-6/Brands/CcDiscover.Local.png) |




## CcDiscover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CcDiscover
include('fontawesome-6/Brands/CcDiscover')

' renders the element
CcDiscover('CcDiscover', 'Cc Discover', 'an optional tech label')
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

' loads the Item which embeds the element CcDiscover
include('fontawesome-6/Brands/CcDiscover')

' renders the element
CcDiscover('CcDiscover', 'Cc Discover', 'an optional tech label')
@enduml
```

