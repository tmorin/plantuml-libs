# Soap


```text
material/Places/Soap
```

```text
include('material/Places/Soap')
```



| Illustration | Soap |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Soap.png) | ![illustration for Soap](../../material/Places/Soap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SoapXs>`
- `<$SoapSm>`
- `<$SoapMd>`
- `<$SoapLg>`





## Soap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Soap
include('material/Places/Soap')

' renders the element
Soap('Soap', 'Soap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Soap
include('material/Places/Soap')

' renders the element
Soap('Soap', 'Soap', 'an optional tech label', 'an optional description')
@enduml
```

