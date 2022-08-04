# HorizontalRule


```text
material-4/Editor/HorizontalRule
```

```text
include('material-4/Editor/HorizontalRule')
```



| Illustration | HorizontalRule |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/HorizontalRule.png) | ![illustration for HorizontalRule](../../material-4/Editor/HorizontalRule.Local.png) |




## HorizontalRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HorizontalRule
include('material-4/Editor/HorizontalRule')

' renders the element
HorizontalRule('HorizontalRule', 'Horizontal Rule', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HorizontalRule
include('material-4/Editor/HorizontalRule')

' renders the element
HorizontalRule('HorizontalRule', 'Horizontal Rule', 'an optional tech label', 'an optional description')
@enduml
```

