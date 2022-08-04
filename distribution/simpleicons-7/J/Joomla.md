# Joomla


```text
simpleicons-7/J/Joomla
```

```text
include('simpleicons-7/J/Joomla')
```



| Illustration | Joomla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Joomla.png) | ![illustration for Joomla](../../simpleicons-7/J/Joomla.Local.png) |




## Joomla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Joomla
include('simpleicons-7/J/Joomla')

' renders the element
Joomla('Joomla', 'Joomla', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Joomla
include('simpleicons-7/J/Joomla')

' renders the element
Joomla('Joomla', 'Joomla', 'an optional tech label', 'an optional description')
@enduml
```

