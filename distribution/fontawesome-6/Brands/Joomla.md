# Joomla


```text
fontawesome-6/Brands/Joomla
```

```text
include('fontawesome-6/Brands/Joomla')
```



| Illustration | Joomla |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Joomla.png) | ![illustration for Joomla](../../fontawesome-6/Brands/Joomla.Local.png) |




## Joomla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Joomla
include('fontawesome-6/Brands/Joomla')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Joomla
include('fontawesome-6/Brands/Joomla')

' renders the element
Joomla('Joomla', 'Joomla', 'an optional tech label')
@enduml
```

