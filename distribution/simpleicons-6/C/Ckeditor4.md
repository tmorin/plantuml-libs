# Ckeditor4


```text
simpleicons-6/C/Ckeditor4
```

```text
include('simpleicons-6/C/Ckeditor4')
```



| Illustration | Ckeditor4 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Ckeditor4.png) | ![illustration for Ckeditor4](../../simpleicons-6/C/Ckeditor4.Local.png) |




## Ckeditor4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ckeditor4
include('simpleicons-6/C/Ckeditor4')

' renders the element
Ckeditor4('Ckeditor4', 'Ckeditor4', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ckeditor4
include('simpleicons-6/C/Ckeditor4')

' renders the element
Ckeditor4('Ckeditor4', 'Ckeditor4', 'an optional tech label')
@enduml
```

