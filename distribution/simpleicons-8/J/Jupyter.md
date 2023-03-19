# Jupyter


```text
simpleicons-8/J/Jupyter
```

```text
include('simpleicons-8/J/Jupyter')
```



| Illustration | Jupyter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Jupyter.png) | ![illustration for Jupyter](../../simpleicons-8/J/Jupyter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JupyterXs>`
- `<$JupyterSm>`
- `<$JupyterMd>`
- `<$JupyterLg>`





## Jupyter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Jupyter
include('simpleicons-8/J/Jupyter')

' renders the element
Jupyter('Jupyter', 'Jupyter', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Jupyter
include('simpleicons-8/J/Jupyter')

' renders the element
Jupyter('Jupyter', 'Jupyter', 'an optional tech label', 'an optional description')
@enduml
```

