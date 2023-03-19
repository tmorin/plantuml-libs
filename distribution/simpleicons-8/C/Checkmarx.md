# Checkmarx


```text
simpleicons-8/C/Checkmarx
```

```text
include('simpleicons-8/C/Checkmarx')
```



| Illustration | Checkmarx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Checkmarx.png) | ![illustration for Checkmarx](../../simpleicons-8/C/Checkmarx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckmarxXs>`
- `<$CheckmarxSm>`
- `<$CheckmarxMd>`
- `<$CheckmarxLg>`





## Checkmarx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Checkmarx
include('simpleicons-8/C/Checkmarx')

' renders the element
Checkmarx('Checkmarx', 'Checkmarx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Checkmarx
include('simpleicons-8/C/Checkmarx')

' renders the element
Checkmarx('Checkmarx', 'Checkmarx', 'an optional tech label', 'an optional description')
@enduml
```

