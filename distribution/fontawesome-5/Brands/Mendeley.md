# Mendeley


```text
fontawesome-5/Brands/Mendeley
```

```text
include('fontawesome-5/Brands/Mendeley')
```



| Illustration | Mendeley |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Mendeley.png) | ![illustration for Mendeley](../../fontawesome-5/Brands/Mendeley.Local.png) |




## Mendeley

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mendeley
include('fontawesome-5/Brands/Mendeley')

' renders the element
Mendeley('Mendeley', 'Mendeley', 'an optional tech label')
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

' loads the Item which embeds the element Mendeley
include('fontawesome-5/Brands/Mendeley')

' renders the element
Mendeley('Mendeley', 'Mendeley', 'an optional tech label')
@enduml
```

