# Qlik


```text
simpleicons/Q/Qlik
```

```text
include('simpleicons/Q/Qlik')
```



| Illustration | Qlik |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qlik.png) | ![illustration for Qlik](../../simpleicons/Q/Qlik.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QlikXs>`
- `<$QlikSm>`
- `<$QlikMd>`
- `<$QlikLg>`





## Qlik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qlik
include('simpleicons/Q/Qlik')

' renders the element
Qlik('Qlik', 'Qlik', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qlik
include('simpleicons/Q/Qlik')

' renders the element
Qlik('Qlik', 'Qlik', 'an optional tech label', 'an optional description')
@enduml
```

