# Wysiwyg


```text
material-4/Action/Wysiwyg
```

```text
include('material-4/Action/Wysiwyg')
```



| Illustration | Wysiwyg |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Wysiwyg.png) | ![illustration for Wysiwyg](../../material-4/Action/Wysiwyg.Local.png) |




## Wysiwyg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Wysiwyg
include('material-4/Action/Wysiwyg')

' renders the element
Wysiwyg('Wysiwyg', 'Wysiwyg', 'an optional tech label')
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

' loads the Item which embeds the element Wysiwyg
include('material-4/Action/Wysiwyg')

' renders the element
Wysiwyg('Wysiwyg', 'Wysiwyg', 'an optional tech label')
@enduml
```

