# Uikit


```text
fontawesome-5/Brands/Uikit
```

```text
include('fontawesome-5/Brands/Uikit')
```



| Illustration | Uikit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Uikit.png) | ![illustration for Uikit](../../fontawesome-5/Brands/Uikit.Local.png) |




## Uikit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Uikit
include('fontawesome-5/Brands/Uikit')

' renders the element
Uikit('Uikit', 'Uikit', 'an optional tech label')
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

' loads the Item which embeds the element Uikit
include('fontawesome-5/Brands/Uikit')

' renders the element
Uikit('Uikit', 'Uikit', 'an optional tech label')
@enduml
```

