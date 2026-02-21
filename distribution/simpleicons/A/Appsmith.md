# Appsmith


```text
simpleicons/A/Appsmith
```

```text
include('simpleicons/A/Appsmith')
```



| Illustration | Appsmith |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Appsmith.png) | ![illustration for Appsmith](../../simpleicons/A/Appsmith.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppsmithXs>`
- `<$AppsmithSm>`
- `<$AppsmithMd>`
- `<$AppsmithLg>`





## Appsmith

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Appsmith
include('simpleicons/A/Appsmith')

' renders the element
Appsmith('Appsmith', 'Appsmith', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Appsmith
include('simpleicons/A/Appsmith')

' renders the element
Appsmith('Appsmith', 'Appsmith', 'an optional tech label', 'an optional description')
@enduml
```

