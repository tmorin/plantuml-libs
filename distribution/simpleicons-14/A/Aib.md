# Aib


```text
simpleicons-14/A/Aib
```

```text
include('simpleicons-14/A/Aib')
```



| Illustration | Aib |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Aib.png) | ![illustration for Aib](../../simpleicons-14/A/Aib.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AibXs>`
- `<$AibSm>`
- `<$AibMd>`
- `<$AibLg>`





## Aib

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Aib
include('simpleicons-14/A/Aib')

' renders the element
Aib('Aib', 'Aib', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aib
include('simpleicons-14/A/Aib')

' renders the element
Aib('Aib', 'Aib', 'an optional tech label', 'an optional description')
@enduml
```

