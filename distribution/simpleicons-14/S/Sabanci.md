# Sabanci


```text
simpleicons-14/S/Sabanci
```

```text
include('simpleicons-14/S/Sabanci')
```



| Illustration | Sabanci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sabanci.png) | ![illustration for Sabanci](../../simpleicons-14/S/Sabanci.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SabanciXs>`
- `<$SabanciSm>`
- `<$SabanciMd>`
- `<$SabanciLg>`





## Sabanci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sabanci
include('simpleicons-14/S/Sabanci')

' renders the element
Sabanci('Sabanci', 'Sabanci', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sabanci
include('simpleicons-14/S/Sabanci')

' renders the element
Sabanci('Sabanci', 'Sabanci', 'an optional tech label', 'an optional description')
@enduml
```

