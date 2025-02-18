# Oxygen


```text
simpleicons-14/O/Oxygen
```

```text
include('simpleicons-14/O/Oxygen')
```



| Illustration | Oxygen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Oxygen.png) | ![illustration for Oxygen](../../simpleicons-14/O/Oxygen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OxygenXs>`
- `<$OxygenSm>`
- `<$OxygenMd>`
- `<$OxygenLg>`





## Oxygen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Oxygen
include('simpleicons-14/O/Oxygen')

' renders the element
Oxygen('Oxygen', 'Oxygen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oxygen
include('simpleicons-14/O/Oxygen')

' renders the element
Oxygen('Oxygen', 'Oxygen', 'an optional tech label', 'an optional description')
@enduml
```

