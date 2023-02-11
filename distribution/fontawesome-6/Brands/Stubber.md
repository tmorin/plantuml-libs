# Stubber


```text
fontawesome-6/Brands/Stubber
```

```text
include('fontawesome-6/Brands/Stubber')
```



| Illustration | Stubber |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Stubber.png) | ![illustration for Stubber](../../fontawesome-6/Brands/Stubber.Local.png) |




## Stubber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stubber
include('fontawesome-6/Brands/Stubber')

' renders the element
Stubber('Stubber', 'Stubber', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stubber
include('fontawesome-6/Brands/Stubber')

' renders the element
Stubber('Stubber', 'Stubber', 'an optional tech label', 'an optional description')
@enduml
```

