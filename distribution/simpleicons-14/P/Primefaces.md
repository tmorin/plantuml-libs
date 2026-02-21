# Primefaces


```text
simpleicons-14/P/Primefaces
```

```text
include('simpleicons-14/P/Primefaces')
```



| Illustration | Primefaces |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Primefaces.png) | ![illustration for Primefaces](../../simpleicons-14/P/Primefaces.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrimefacesXs>`
- `<$PrimefacesSm>`
- `<$PrimefacesMd>`
- `<$PrimefacesLg>`





## Primefaces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Primefaces
include('simpleicons-14/P/Primefaces')

' renders the element
Primefaces('Primefaces', 'Primefaces', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Primefaces
include('simpleicons-14/P/Primefaces')

' renders the element
Primefaces('Primefaces', 'Primefaces', 'an optional tech label', 'an optional description')
@enduml
```

