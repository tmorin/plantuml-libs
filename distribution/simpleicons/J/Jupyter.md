# Jupyter


```text
simpleicons/J/Jupyter
```

```text
include('simpleicons/J/Jupyter')
```



| Illustration | Jupyter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jupyter.png) | ![illustration for Jupyter](../../simpleicons/J/Jupyter.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jupyter
include('simpleicons/J/Jupyter')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jupyter
include('simpleicons/J/Jupyter')

' renders the element
Jupyter('Jupyter', 'Jupyter', 'an optional tech label', 'an optional description')
@enduml
```

