# Carto


```text
simpleicons-7/C/Carto
```

```text
include('simpleicons-7/C/Carto')
```



| Illustration | Carto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Carto.png) | ![illustration for Carto](../../simpleicons-7/C/Carto.Local.png) |




## Carto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Carto
include('simpleicons-7/C/Carto')

' renders the element
Carto('Carto', 'Carto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Carto
include('simpleicons-7/C/Carto')

' renders the element
Carto('Carto', 'Carto', 'an optional tech label', 'an optional description')
@enduml
```

