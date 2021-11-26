# Joget


```text
fontawesome-5/Brands/Joget
```

```text
include('fontawesome-5/Brands/Joget')
```



| Illustration | Joget |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Joget.png) | ![illustration for Joget](../../fontawesome-5/Brands/Joget.Local.png) |




## Joget

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Joget
include('fontawesome-5/Brands/Joget')

' renders the element
Joget('Joget', 'Joget', 'an optional tech label')
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

' loads the Item which embeds the element Joget
include('fontawesome-5/Brands/Joget')

' renders the element
Joget('Joget', 'Joget', 'an optional tech label')
@enduml
```

