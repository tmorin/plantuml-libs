# Themeisle


```text
fontawesome-6/Brands/Themeisle
```

```text
include('fontawesome-6/Brands/Themeisle')
```



| Illustration | Themeisle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Themeisle.png) | ![illustration for Themeisle](../../fontawesome-6/Brands/Themeisle.Local.png) |




## Themeisle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Themeisle
include('fontawesome-6/Brands/Themeisle')

' renders the element
Themeisle('Themeisle', 'Themeisle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Themeisle
include('fontawesome-6/Brands/Themeisle')

' renders the element
Themeisle('Themeisle', 'Themeisle', 'an optional tech label', 'an optional description')
@enduml
```

