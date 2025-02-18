# Powerpages


```text
simpleicons-14/P/Powerpages
```

```text
include('simpleicons-14/P/Powerpages')
```



| Illustration | Powerpages |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Powerpages.png) | ![illustration for Powerpages](../../simpleicons-14/P/Powerpages.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PowerpagesXs>`
- `<$PowerpagesSm>`
- `<$PowerpagesMd>`
- `<$PowerpagesLg>`





## Powerpages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Powerpages
include('simpleicons-14/P/Powerpages')

' renders the element
Powerpages('Powerpages', 'Powerpages', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Powerpages
include('simpleicons-14/P/Powerpages')

' renders the element
Powerpages('Powerpages', 'Powerpages', 'an optional tech label', 'an optional description')
@enduml
```

