# Internetexplorer


```text
simpleicons-8/I/Internetexplorer
```

```text
include('simpleicons-8/I/Internetexplorer')
```



| Illustration | Internetexplorer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Internetexplorer.png) | ![illustration for Internetexplorer](../../simpleicons-8/I/Internetexplorer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InternetexplorerXs>`
- `<$InternetexplorerSm>`
- `<$InternetexplorerMd>`
- `<$InternetexplorerLg>`





## Internetexplorer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Internetexplorer
include('simpleicons-8/I/Internetexplorer')

' renders the element
Internetexplorer('Internetexplorer', 'Internetexplorer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Internetexplorer
include('simpleicons-8/I/Internetexplorer')

' renders the element
Internetexplorer('Internetexplorer', 'Internetexplorer', 'an optional tech label', 'an optional description')
@enduml
```

