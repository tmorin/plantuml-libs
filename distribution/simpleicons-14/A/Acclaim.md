# Acclaim


```text
simpleicons-14/A/Acclaim
```

```text
include('simpleicons-14/A/Acclaim')
```



| Illustration | Acclaim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Acclaim.png) | ![illustration for Acclaim](../../simpleicons-14/A/Acclaim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AcclaimXs>`
- `<$AcclaimSm>`
- `<$AcclaimMd>`
- `<$AcclaimLg>`





## Acclaim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Acclaim
include('simpleicons-14/A/Acclaim')

' renders the element
Acclaim('Acclaim', 'Acclaim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Acclaim
include('simpleicons-14/A/Acclaim')

' renders the element
Acclaim('Acclaim', 'Acclaim', 'an optional tech label', 'an optional description')
@enduml
```

