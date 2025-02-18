# Leroymerlin


```text
simpleicons-14/L/Leroymerlin
```

```text
include('simpleicons-14/L/Leroymerlin')
```



| Illustration | Leroymerlin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Leroymerlin.png) | ![illustration for Leroymerlin](../../simpleicons-14/L/Leroymerlin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeroymerlinXs>`
- `<$LeroymerlinSm>`
- `<$LeroymerlinMd>`
- `<$LeroymerlinLg>`





## Leroymerlin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Leroymerlin
include('simpleicons-14/L/Leroymerlin')

' renders the element
Leroymerlin('Leroymerlin', 'Leroymerlin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Leroymerlin
include('simpleicons-14/L/Leroymerlin')

' renders the element
Leroymerlin('Leroymerlin', 'Leroymerlin', 'an optional tech label', 'an optional description')
@enduml
```

