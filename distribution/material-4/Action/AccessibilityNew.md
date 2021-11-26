# AccessibilityNew


```text
material-4/Action/AccessibilityNew
```

```text
include('material-4/Action/AccessibilityNew')
```



| Illustration | AccessibilityNew |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AccessibilityNew.png) | ![illustration for AccessibilityNew](../../material-4/Action/AccessibilityNew.Local.png) |




## AccessibilityNew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AccessibilityNew
include('material-4/Action/AccessibilityNew')

' renders the element
AccessibilityNew('AccessibilityNew', 'Accessibility New', 'an optional tech label')
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

' loads the Item which embeds the element AccessibilityNew
include('material-4/Action/AccessibilityNew')

' renders the element
AccessibilityNew('AccessibilityNew', 'Accessibility New', 'an optional tech label')
@enduml
```

