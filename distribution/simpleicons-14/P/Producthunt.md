# Producthunt


```text
simpleicons-14/P/Producthunt
```

```text
include('simpleicons-14/P/Producthunt')
```



| Illustration | Producthunt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Producthunt.png) | ![illustration for Producthunt](../../simpleicons-14/P/Producthunt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProducthuntXs>`
- `<$ProducthuntSm>`
- `<$ProducthuntMd>`
- `<$ProducthuntLg>`





## Producthunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Producthunt
include('simpleicons-14/P/Producthunt')

' renders the element
Producthunt('Producthunt', 'Producthunt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Producthunt
include('simpleicons-14/P/Producthunt')

' renders the element
Producthunt('Producthunt', 'Producthunt', 'an optional tech label', 'an optional description')
@enduml
```

