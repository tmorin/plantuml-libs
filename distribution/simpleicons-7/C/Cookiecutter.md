# Cookiecutter


```text
simpleicons-7/C/Cookiecutter
```

```text
include('simpleicons-7/C/Cookiecutter')
```



| Illustration | Cookiecutter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Cookiecutter.png) | ![illustration for Cookiecutter](../../simpleicons-7/C/Cookiecutter.Local.png) |




## Cookiecutter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Cookiecutter
include('simpleicons-7/C/Cookiecutter')

' renders the element
Cookiecutter('Cookiecutter', 'Cookiecutter', 'an optional tech label')
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

' loads the Item which embeds the element Cookiecutter
include('simpleicons-7/C/Cookiecutter')

' renders the element
Cookiecutter('Cookiecutter', 'Cookiecutter', 'an optional tech label')
@enduml
```

