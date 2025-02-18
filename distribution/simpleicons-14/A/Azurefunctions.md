# Azurefunctions


```text
simpleicons-14/A/Azurefunctions
```

```text
include('simpleicons-14/A/Azurefunctions')
```



| Illustration | Azurefunctions |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Azurefunctions.png) | ![illustration for Azurefunctions](../../simpleicons-14/A/Azurefunctions.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AzurefunctionsXs>`
- `<$AzurefunctionsSm>`
- `<$AzurefunctionsMd>`
- `<$AzurefunctionsLg>`





## Azurefunctions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Azurefunctions
include('simpleicons-14/A/Azurefunctions')

' renders the element
Azurefunctions('Azurefunctions', 'Azurefunctions', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Azurefunctions
include('simpleicons-14/A/Azurefunctions')

' renders the element
Azurefunctions('Azurefunctions', 'Azurefunctions', 'an optional tech label', 'an optional description')
@enduml
```

