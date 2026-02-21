# Modelscope


```text
simpleicons/M/Modelscope
```

```text
include('simpleicons/M/Modelscope')
```



| Illustration | Modelscope |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Modelscope.png) | ![illustration for Modelscope](../../simpleicons/M/Modelscope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModelscopeXs>`
- `<$ModelscopeSm>`
- `<$ModelscopeMd>`
- `<$ModelscopeLg>`





## Modelscope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Modelscope
include('simpleicons/M/Modelscope')

' renders the element
Modelscope('Modelscope', 'Modelscope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Modelscope
include('simpleicons/M/Modelscope')

' renders the element
Modelscope('Modelscope', 'Modelscope', 'an optional tech label', 'an optional description')
@enduml
```

