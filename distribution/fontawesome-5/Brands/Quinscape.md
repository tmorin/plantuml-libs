# Quinscape


```text
fontawesome-5/Brands/Quinscape
```

```text
include('fontawesome-5/Brands/Quinscape')
```



| Illustration | Quinscape |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Quinscape.png) | ![illustration for Quinscape](../../fontawesome-5/Brands/Quinscape.Local.png) |




## Quinscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Quinscape
include('fontawesome-5/Brands/Quinscape')

' renders the element
Quinscape('Quinscape', 'Quinscape', 'an optional tech label')
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

' loads the Item which embeds the element Quinscape
include('fontawesome-5/Brands/Quinscape')

' renders the element
Quinscape('Quinscape', 'Quinscape', 'an optional tech label')
@enduml
```

