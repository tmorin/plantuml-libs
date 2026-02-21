# Avianca


```text
simpleicons-14/A/Avianca
```

```text
include('simpleicons-14/A/Avianca')
```



| Illustration | Avianca |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Avianca.png) | ![illustration for Avianca](../../simpleicons-14/A/Avianca.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AviancaXs>`
- `<$AviancaSm>`
- `<$AviancaMd>`
- `<$AviancaLg>`





## Avianca

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Avianca
include('simpleicons-14/A/Avianca')

' renders the element
Avianca('Avianca', 'Avianca', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Avianca
include('simpleicons-14/A/Avianca')

' renders the element
Avianca('Avianca', 'Avianca', 'an optional tech label', 'an optional description')
@enduml
```

