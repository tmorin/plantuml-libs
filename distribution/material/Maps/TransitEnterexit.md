# TransitEnterexit


```text
material/Maps/TransitEnterexit
```

```text
include('material/Maps/TransitEnterexit')
```



| Illustration | TransitEnterexit |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/TransitEnterexit.png) | ![illustration for TransitEnterexit](../../material/Maps/TransitEnterexit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransitEnterexitXs>`
- `<$TransitEnterexitSm>`
- `<$TransitEnterexitMd>`
- `<$TransitEnterexitLg>`





## TransitEnterexit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TransitEnterexit
include('material/Maps/TransitEnterexit')

' renders the element
TransitEnterexit('TransitEnterexit', 'Transit Enterexit', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element TransitEnterexit
include('material/Maps/TransitEnterexit')

' renders the element
TransitEnterexit('TransitEnterexit', 'Transit Enterexit', 'an optional tech label', 'an optional description')
@enduml
```

