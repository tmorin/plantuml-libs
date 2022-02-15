# Carto


```text
simpleicons-6/C/Carto
```

```text
include('simpleicons-6/C/Carto')
```



| Illustration | Carto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Carto.png) | ![illustration for Carto](../../simpleicons-6/C/Carto.Local.png) |




## Carto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Carto
include('simpleicons-6/C/Carto')

' renders the element
Carto('Carto', 'Carto', 'an optional tech label')
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

' loads the Item which embeds the element Carto
include('simpleicons-6/C/Carto')

' renders the element
Carto('Carto', 'Carto', 'an optional tech label')
@enduml
```

