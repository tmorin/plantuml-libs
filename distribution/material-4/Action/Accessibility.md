# Accessibility


```text
material-4/Action/Accessibility
```

```text
include('material-4/Action/Accessibility')
```



| Illustration | Accessibility |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Accessibility.png) | ![illustration for Accessibility](../../material-4/Action/Accessibility.Local.png) |




## Accessibility

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Accessibility
include('material-4/Action/Accessibility')

' renders the element
Accessibility('Accessibility', 'Accessibility', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Accessibility
include('material-4/Action/Accessibility')

' renders the element
Accessibility('Accessibility', 'Accessibility', 'an optional tech label')
@enduml
```

