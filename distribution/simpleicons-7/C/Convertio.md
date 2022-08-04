# Convertio


```text
simpleicons-7/C/Convertio
```

```text
include('simpleicons-7/C/Convertio')
```



| Illustration | Convertio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Convertio.png) | ![illustration for Convertio](../../simpleicons-7/C/Convertio.Local.png) |




## Convertio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Convertio
include('simpleicons-7/C/Convertio')

' renders the element
Convertio('Convertio', 'Convertio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Convertio
include('simpleicons-7/C/Convertio')

' renders the element
Convertio('Convertio', 'Convertio', 'an optional tech label', 'an optional description')
@enduml
```

