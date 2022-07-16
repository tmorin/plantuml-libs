# Writedotas


```text
simpleicons-7/W/Writedotas
```

```text
include('simpleicons-7/W/Writedotas')
```



| Illustration | Writedotas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Writedotas.png) | ![illustration for Writedotas](../../simpleicons-7/W/Writedotas.Local.png) |




## Writedotas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Writedotas
include('simpleicons-7/W/Writedotas')

' renders the element
Writedotas('Writedotas', 'Writedotas', 'an optional tech label')
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

' loads the Item which embeds the element Writedotas
include('simpleicons-7/W/Writedotas')

' renders the element
Writedotas('Writedotas', 'Writedotas', 'an optional tech label')
@enduml
```

