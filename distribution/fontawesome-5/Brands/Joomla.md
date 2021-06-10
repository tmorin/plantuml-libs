# Joomla


```text
fontawesome-5/Brands/Joomla
```

```text
include('fontawesome-5/Brands/Joomla')
```



| Illustration | Joomla |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Joomla.png) | ![illustration for Joomla](../../fontawesome-5/Brands/Joomla.Local.png) |




## Joomla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Joomla
include('fontawesome-5/Brands/Joomla')

' renders the element
Joomla('Joomla', 'Joomla', 'an optional tech label')
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

' loads the Item which embeds the element Joomla
include('fontawesome-5/Brands/Joomla')

' renders the element
Joomla('Joomla', 'Joomla', 'an optional tech label')
@enduml
```

