# Cookiecutter


```text
simpleicons-14/C/Cookiecutter
```

```text
include('simpleicons-14/C/Cookiecutter')
```



| Illustration | Cookiecutter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cookiecutter.png) | ![illustration for Cookiecutter](../../simpleicons-14/C/Cookiecutter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CookiecutterXs>`
- `<$CookiecutterSm>`
- `<$CookiecutterMd>`
- `<$CookiecutterLg>`





## Cookiecutter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cookiecutter
include('simpleicons-14/C/Cookiecutter')

' renders the element
Cookiecutter('Cookiecutter', 'Cookiecutter', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cookiecutter
include('simpleicons-14/C/Cookiecutter')

' renders the element
Cookiecutter('Cookiecutter', 'Cookiecutter', 'an optional tech label', 'an optional description')
@enduml
```

