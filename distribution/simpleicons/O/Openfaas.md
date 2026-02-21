# Openfaas


```text
simpleicons/O/Openfaas
```

```text
include('simpleicons/O/Openfaas')
```



| Illustration | Openfaas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openfaas.png) | ![illustration for Openfaas](../../simpleicons/O/Openfaas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenfaasXs>`
- `<$OpenfaasSm>`
- `<$OpenfaasMd>`
- `<$OpenfaasLg>`





## Openfaas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openfaas
include('simpleicons/O/Openfaas')

' renders the element
Openfaas('Openfaas', 'Openfaas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openfaas
include('simpleicons/O/Openfaas')

' renders the element
Openfaas('Openfaas', 'Openfaas', 'an optional tech label', 'an optional description')
@enduml
```

