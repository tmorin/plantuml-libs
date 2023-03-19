# Devpost


```text
simpleicons-8/D/Devpost
```

```text
include('simpleicons-8/D/Devpost')
```



| Illustration | Devpost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Devpost.png) | ![illustration for Devpost](../../simpleicons-8/D/Devpost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevpostXs>`
- `<$DevpostSm>`
- `<$DevpostMd>`
- `<$DevpostLg>`





## Devpost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Devpost
include('simpleicons-8/D/Devpost')

' renders the element
Devpost('Devpost', 'Devpost', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Devpost
include('simpleicons-8/D/Devpost')

' renders the element
Devpost('Devpost', 'Devpost', 'an optional tech label', 'an optional description')
@enduml
```

