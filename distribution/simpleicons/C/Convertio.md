# Convertio


```text
simpleicons/C/Convertio
```

```text
include('simpleicons/C/Convertio')
```



| Illustration | Convertio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Convertio.png) | ![illustration for Convertio](../../simpleicons/C/Convertio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConvertioXs>`
- `<$ConvertioSm>`
- `<$ConvertioMd>`
- `<$ConvertioLg>`





## Convertio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Convertio
include('simpleicons/C/Convertio')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Convertio
include('simpleicons/C/Convertio')

' renders the element
Convertio('Convertio', 'Convertio', 'an optional tech label', 'an optional description')
@enduml
```

