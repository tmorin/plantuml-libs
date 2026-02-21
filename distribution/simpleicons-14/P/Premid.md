# Premid


```text
simpleicons-14/P/Premid
```

```text
include('simpleicons-14/P/Premid')
```



| Illustration | Premid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Premid.png) | ![illustration for Premid](../../simpleicons-14/P/Premid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PremidXs>`
- `<$PremidSm>`
- `<$PremidMd>`
- `<$PremidLg>`





## Premid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Premid
include('simpleicons-14/P/Premid')

' renders the element
Premid('Premid', 'Premid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Premid
include('simpleicons-14/P/Premid')

' renders the element
Premid('Premid', 'Premid', 'an optional tech label', 'an optional description')
@enduml
```

