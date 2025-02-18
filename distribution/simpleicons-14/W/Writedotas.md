# Writedotas


```text
simpleicons-14/W/Writedotas
```

```text
include('simpleicons-14/W/Writedotas')
```



| Illustration | Writedotas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Writedotas.png) | ![illustration for Writedotas](../../simpleicons-14/W/Writedotas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WritedotasXs>`
- `<$WritedotasSm>`
- `<$WritedotasMd>`
- `<$WritedotasLg>`





## Writedotas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Writedotas
include('simpleicons-14/W/Writedotas')

' renders the element
Writedotas('Writedotas', 'Writedotas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Writedotas
include('simpleicons-14/W/Writedotas')

' renders the element
Writedotas('Writedotas', 'Writedotas', 'an optional tech label', 'an optional description')
@enduml
```

